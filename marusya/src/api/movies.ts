import { API_URL } from "./API_URL";
import { MovieSchema } from "./MovieSchema";

export async function getMovies(): Promise<MovieSchema[]> {
    const response = await fetch(`${API_URL}/movie`)
    const data = await response.json()
    return data
}

export async function getMoviesCount(count: number): Promise<MovieSchema[]> {
    const response = await fetch(`${API_URL}/movie?count=${count}`)
    const data = response.json()
    return data
}

export async function getMoviesPage(page: number): Promise<MovieSchema[]> {
    const response = await fetch(`${API_URL}/movie?page=${page}`)
    const data = response.json()
    return data
}

export async function getMoviesTitle(title: string): Promise<MovieSchema[]> {
    const response = await fetch(`${API_URL}/movie?title=${title}`)
    const data = response.json()
    return data
}

export async function getMoviesGenre(genre: string): Promise<MovieSchema[]> {
    const response = await fetch(`${API_URL}/movie?genre=${genre}`)
    const data = response.json()
    return data
}

export async function getTop10Movies(): Promise<MovieSchema[]> {
    const response = await fetch(`${API_URL}/movie/top10`)
    const data = await response.json()
    return data
}

export async function getGenres(): Promise<string[]>  {
    const response = await fetch(`${API_URL}/movie/genres`)
    const data = await response.json()
    return data
}

export async function getMovieById(id: MovieSchema['id']): Promise<MovieSchema> {
    const responce = await fetch(`${API_URL}/movie/${id}`)
    const data = await responce.json()
    return data
}

export async function getRandomMovie(): Promise<MovieSchema> {
    const response = await fetch(`${API_URL}/movie/random`)
    const data = await response.json()
    return data
}