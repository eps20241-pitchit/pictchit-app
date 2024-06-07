import axios from "axios";

const API = axios.create({
    timeout: 5000
});

// Defina a interface para o objeto de usuário
interface User {
    name: string;
    email: string;
    password: string;
    // Adicione outros campos conforme necessário
}

// Defina a interface para a resposta do servidor
interface CreateUserResponse {
    usuario: User;
}

export async function createUser(objeto: User): Promise<CreateUserResponse | undefined> {
    try {
        console.log(objeto);
        const { data } = await API.post<CreateUserResponse>(
            "http://localhost:3001/users",
            objeto
        );
        return data;
    } catch (error) {
        console.error(error);
    }
}

    