import { User } from "@/shared/types/user.types"
import { useAppDispatch } from "./useAppDispatch"
import { useAppSelector } from "./useAppSelector"
import { clearUser, setUser } from "@/redux/reducers/userSlice"

export const useAuth = () => {
    const dispatch = useAppDispatch()
    const user = useAppSelector(state => state.user.user)

    const login = (userData: User) => {
        localStorage.setItem('user', JSON.stringify(userData))
        dispatch(setUser(userData))
    }

    const logout = () => {
        localStorage.removeItem('user')
        dispatch(clearUser())
    }

    return {user, login, logout}
}