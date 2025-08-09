import { z } from "zod";
import { API_URL } from "./API_URL";
import { User } from "./UserSchema";

export async function userLogin({email, password}: {email: string, password: string}): Promise<void> {
    try {
        return await fetch(`${API_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
            }),
            credentials: "include",
        }).then(() => undefined)
    } catch (error) {
        console.log(error);
        throw new Error(`${error}`);
    }
}

// Посмотреть ТЗ к финальной работе, там глянуть про кроссдоменные запросы, в запросе на logout нужно куда-то всадить включение cockie
export async function userLogout():Promise<void> {
    return await fetch(`${API_URL}/auth/logout`, {
        credentials: 'include',
    }).then(() => undefined)
}

export const registerUserSchema = z.object({
    email: z.string(),
    password: z.string(),
    name: z.string(),
    surname: z.string(),
})

export type RegisterUser = z.infer<typeof registerUserSchema>

export async function userRegister({...params}: RegisterUser): Promise<void> {
    try {
        return await fetch(`${API_URL}/user`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ...params,
            }),
            credentials: 'include',
        }).then(() => undefined)
    } catch (error) {
        throw new Error(`${error}`);
        
    }
}

export async function getProfile(): Promise<User> {
    try {
        const response = await fetch(`${API_URL}/profile`, {
            credentials: 'include',
        })
        const data = await response.json()
        return data
    } catch (error) {
        throw new Error(`${error}`);
    }
}