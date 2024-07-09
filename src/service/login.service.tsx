import axios from "axios";
import ApiCripto from "./cripto.service";

const API = axios.create({
  timeout: 10000 // Aumente o tempo limite para 10 segundos
});

// Defina a interface para o objeto de usuário
interface User {
  name: string;
  email: string;
  password: string;
  // Adicione outros campos conforme necessário
}

interface Email {
  to: string;
  subject: string;
  text: string;
}

// Defina a interface para a resposta do servidor
interface CreateUserResponse {
  usuario: User;
  status: number;
}

interface ErrorResponse {
  status: number;
  message: string;
}

type CreateUserResult = CreateUserResponse | ErrorResponse;

// Função para criptografar a senha
async function encryptPassword(password: string, publicKey: string): Promise<string> {
  try {
    const data = {
      message: password,
      public_key: publicKey
    };
    console.log('Dados para criptografia:', data);
    const response = await ApiCripto.post("/rsa/encrypt", data, {
      headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json',
        "access-control-allow-origin": "*",
      }
    });
    console.log('Resposta da criptografia:', response.data.encrypted_message);
    return response.data.encrypted_message;
  } catch (error) {
    console.error("Unexpected error:", error);
    throw error;
  }
}

// Função para desencriptar a senha
async function decryptPassword(password: string, private_key: string): Promise<string> {
    try{
        const data = {
            message: password,
            private_key
        };
        const response = await ApiCripto.post("/rsa/decrypt", data, {
        headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json',
        "access-control-allow-origin": "*",
        }
        });
    return response.data.decrypted_message;
    } catch (error) {
        console.error("Unexpected error:", error);
        throw error;
    }
}

export async function createUser(objeto: User): Promise<CreateUserResult | undefined> {
  const publicKey = "2d2d2d2d2d424547494e205055424c4943204b45592d2d2d2d2d0a4d494942496a414e42676b71686b6947397730424151454641414f43415138414d49494243674b4341514541746539323943596b5135325358704d49696e535a0a755a62694b527551316669565a6d475a78693930435647756e59475a6f4e677544676b5a70467268563964464d4962656962307a6a70754162506d6837732f350a52444c75634d3458316344704945794c717a55595a43414b546778762b775836486c49376c6859725461663332333636654b5154532b42503368616b5267766f0a504f42504d493334674e6d7444586c4f69363178654d3762714341387834525241654a366533632f6c53304a4e637454453951366a59644a552f454544522b740a5557756e374d644767456952427268462b68412b4c544458422b54346a743967364c467676674169702f42715358747a4975787565577079513173454c4d67470a7075372f72676439716631564d45485765747842664d2b7a41714c5447305345452b544d70584545566f2b47382b6251595a6f7633656a5a55525a49534a336c0a75774944415141420a2d2d2d2d2d454e44205055424c4943204b45592d2d2d2d2d0a";
  try {
    // Criptografar a senha antes de enviar o objeto
    objeto.password = await encryptPassword(objeto.password, publicKey);
    console.log(objeto);
    const { data } = await API.post<CreateUserResponse>(
      "https://ms-users-y0ix.onrender.com/users",
      objeto
    );
    return data;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error:', error.message);
      if (error.response) {
        console.error('Response data:', error.response.data);
        console.error('Response status:', error.response.status);
        return {
          status: error.response.status,
          message: error.response.data.message || error.message,
        };
      }
    } else {
      console.error('Unexpected error:', error);
    }
  }
}

export async function getUser(objeto: User): Promise<User | undefined> {
  try {
    console.log(objeto);
    const { data } = await API.get<User[]>(
      "https://ms-users-y0ix.onrender.com/users"
    );

    // Encontrar o usuário pelo email
    const usuarioEncontrado = data.find(user => user.email === objeto.email);
    const private_key = "2d2d2d2d2d424547494e2050524956415445204b45592d2d2d2d2d0a4d494945767749424144414e42676b71686b6947397730424151454641415343424b6b776767536c41674541416f494241514331373362304a6952446e5a4a650a6b77694b644a6d356c754970473544562b4a566d595a6e474c33514a55613664675a6d673243344f43526d6b57754658313055776874364a76544f4f6d3442730a2b6148757a2f6c454d7535777a686656774f6b67544975724e52686b4941704f44472f3742666f65556a75574669744e702f66626672703470424e4c34452f650a46715247432b6738344538776a6669413261304e6555364c725846347a74756f49447a4868464542346e7037647a2b564c516b3179314d543144714e68306c540a3851514e483631526136667378306141534a454775455836454434744d4e63483550694f3332446f73572b2b41434b6e3847704a65334d6937473535616e4a440a577751737941616d37762b75423332702f56557751645a36334546387a374d436f744d6252495154354d796c635152576a34627a357442686d692f64364e6c520a466b68496e65573741674d424141454367674542414b6a696c61576d456c7642316246394135796a434742444d3857394651484c4d38524b4c5a6a5054414f710a6b3145616b5358434231353444426d4a553031625135723856322b38396a4d58486d774b66737455753673584c456743794256676367664e686f6c7a544355460a715173796548436f35376c6c31484a4b4f67426f5036693952785065477875414b694f624750723836715134424d717076316938742b756541382b645059784a0a787153777a5a2b6c417944534c6e7131494d3146444559313374424b2f764f55744a4a69416371434e684c4674486d6644365147474455784675754d616d43560a58535734362f485974704d667250484356735a7a52694b7a6b41675037716e49776a6d4b442b636779787a4d706845703067504f6777736f6e4c6a75703633790a563543367857772b6d7073764e43355365346d7a6230436d61634c374d472f3346345963716464504d434543675945413841692f49572b65316e6b47394731470a7a78664644316d46764e74452b61754e4e533566474d324b5a5a454b41426f736b49724d653437695936503663323767754d695a6936775746714643755337760a7753445a4f6d7555425372544573595465474637634b523951307235595831684b446a736c4f71596e33306233584e53317a6a714235586f42516c54324361680a5a67765065315a47507245585877335977743658474e43392b7563436759454177676c736b357471645379637045672b737350474277734b4547563179694e530a462b4d6f4276662b2b39464d6435465a48464771776962712f62782b6f5a6e354e4e2b6372784d317031673473744471455a7236514152785266587831336f550a5359466f4f766b33523261516b414a2f476676547a6f57626c4d36626561342f77474f67427039713135496636634142362f693238376133694f6f426266472b0a39587766763155706d41304367594245784c7939663555714c524a70424d57386e7a713934784146773278486533624250622f52413149624e79702b5451466e0a6839783971626f43676742484167557636346a5345304e6779474b745731306c48357763754b56337459557a59377841534f31736f444f6a43392f57706d306e0a634f6557346e3948636a694267594443574850304b476149797474536d66367a6c62366a763176777168766742372b4b564f7446474d6a5645514b42675143680a50792b706f70666664416c67524746474d59635a5230552f78764552344452536759553739553943655059777a75726371386c5a75766e426a716b314a6a32410a674f733257714a56784f797050512b6e506345452f69776231587a366367723134734a356236314f65703962375a63755171594c6b2b427330783146433163540a54446371436354434444375641366b564c6754726c3059435532534974304c587769536e33642f4936514b42675144667163735556457a7433666550316a475a0a373647635a346541623645346b696754716a426b7245383336503146375564792f7063346f4d5659414a442b4a2b567a2f72733543454f4d6d51792f4578474d0a4c52726963676a473144694f6769777a394f54477a3463714535524a30785a552f38667664735043534c4c74317662376978562f6a75505444546c306c2b59660a74586e546c57706655347058423571484438674f5238373636673d3d0a2d2d2d2d2d454e442050524956415445204b45592d2d2d2d2d0a";
    if (usuarioEncontrado) {
      // Desencriptar a senha do banco de dados
      const decryptedPassword = await decryptPassword(usuarioEncontrado.password, private_key);
      // Verificar se a senha fornecida pelo usuário bate com a desencriptada
      if (decryptedPassword === objeto.password) {
        return usuarioEncontrado;
      }
    }

    return undefined;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error:', error.message);
      if (error.response) {
        console.error('Response data:', error.response.data);
        console.error('Response status:', error.response.status);
      }
    } else {
      console.error('Unexpected error:', error);
    }
  }
}

export function saveLoggedInUser(user: User) {
  localStorage.setItem('loggedInUser', JSON.stringify(user));
}

export function getLoggedInUser(): User | null {
  const userString = localStorage.getItem('loggedInUser');
  return userString ? JSON.parse(userString) : null;
}

export function logout() {
  localStorage.removeItem('loggedInUser');
}

export async function sendConfirmation(objeto: Email): Promise<CreateUserResponse | undefined> {
  try {
    console.log(objeto);
    const { data } = await API.post<CreateUserResponse>(
      "https://email-service-pzxm.onrender.com/email/send",
      objeto
    );
    return data;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error:', error.message);
      if (error.response) {
        console.error('Response data:', error.response.data);
        console.error('Response status:', error.response.status);
      }
    } else {
      console.error('Unexpected error:', error);
    }
  }
}

export async function sendPitch(objeto: Email): Promise<CreateUserResponse | undefined> {
  try {
    console.log(objeto);
    const { data } = await API.post<CreateUserResponse>(
      "https://email-service-pzxm.onrender.com/email/send",
      objeto
    );
    return data;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error:', error.message);
      if (error.response) {
        console.error('Response data:', error.response.data);
        console.error('Response status:', error.response.status);
      }
    } else {
      console.error('Unexpected error:', error);
    }
  }
}