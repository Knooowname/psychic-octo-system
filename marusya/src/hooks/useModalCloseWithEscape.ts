import { useEffect } from "react"
import { useAppDispatch } from "../store/hooks/hooks"
import { closeModal } from "../store/slices/modalSlice"
import { useNavigate } from "react-router"


export const useModalCloseWithEscape = (modalName: 'register' | 'auth' | 'success' | 'trailer') => {
  const dispatch = useAppDispatch()
  const nav = useNavigate()

  useEffect(() => {
    function handleCloseModal (event: KeyboardEvent) {
      if (event.code === 'Escape') {
        if(modalName === 'trailer') {
          dispatch(closeModal('trailer'))
          nav(-1)
        }
        dispatch(closeModal(modalName))
      }
      // event.code === 'Escape' ? dispatch(closeModal(modalName)) : null
    }

    document.addEventListener('keydown', handleCloseModal)
    return () => document.removeEventListener('keydown', handleCloseModal)
  }, [])
}