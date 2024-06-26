import axios from "axios";


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
    to: string, 
    subject: string, 
    text: string
}

// Defina a interface para a resposta do servidor
interface CreateUserResponse {
    usuario: User;
}

interface GetUsersResponse {
    usuarios: User[];
}

export async function createUser(objeto: User): Promise<CreateUserResponse | undefined> {
    try {
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

        // Verificar se o usuário com o email e senha fornecidos existe no array de usuários
        const usuarioEncontrado = data.find(user =>
            user.email === objeto.email && user.password === objeto.password
        );

        return usuarioEncontrado;
    }
         catch (error: any) {
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