import { API_URL } from "./API_URL"
import { MovieSchema } from "./MovieSchema";
import { User } from "./UserSchema";

export async function getFavorites(): Promise<MovieSchema[]> {
    try {
        const response = await fetch(`${API_URL}/favorites`, {
            credentials: 'include'
        })
        const data = await response.json()
        return data
    } catch (error) {
        throw new Error(`${error}`);
    }
}

export async function setFavoritesMovie(id: string): Promise<User> {
    try {
        return await fetch(`${API_URL}/favorites`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id,
            }),
            credentials: 'include',
        }).then((res) => res.json())
    } catch (error) {
        throw new Error(`${error}`)
    }
}

export async function deleteFavoritesMovie(movieId: string): Promise<User> {
    try {
        return await fetch(`${API_URL}/favorites/${movieId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                movieId
            }),
            credentials: 'include',
        }).then((res) => res.json())
    } catch (error) {
        throw new Error(`${error}`)
    }
}