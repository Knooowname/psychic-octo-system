import { BrowserRouter, Outlet, Route, Routes } from 'react-router'
import './App.css'
import { Header } from './components/Header/Header'
import { HomePage } from './pages/HomePage/HomePage'
import { GenresPage } from './pages/GenresPage/GenresPage'
import { CurrentMoviePage } from './pages/CurrentMoviePage/CurrentMoviePage'
import { Account } from './pages/Account/AccountPage'
import { Footer } from './components/Footer/Footer'
import { MovieForSpecificGenreList } from './components/MoviesForSpecificGenreList/MoviesForSpecificGenreList'
import { LoginForm } from './components/LoginForm/LoginForm'
import { RegisterModal } from './components/RegisterModal/RegisterModal'
import { AuthModal } from './components/AuthModal/AuthModal'
import { useAppSelector } from './store/hooks/hooks'
import { SuccessRegister } from './components/SuccessRegister/SuccessRegister'
import { TrailerModal } from './components/TrailerModal/TrailerModal'
import { useWindowWidth } from './hooks/useWindowWidth'
import { MobileHeader } from './mobile/components/MobileHeader/MobileHeader'

function App() {

  const modal = useAppSelector(state => state.modal)

  const width = useWindowWidth()

  return (
      <BrowserRouter>
      {width <= 450 ? <MobileHeader/> : <Header/>}
      <Outlet/>
      {modal.isOpen && modal.modalType === 'register' && <RegisterModal/>}
      {modal.isOpen && modal.modalType === 'auth' && <AuthModal/>}
      {modal.isOpen && modal.modalType === 'success' && <SuccessRegister/>}
      {modal.isOpen && modal.modalType === 'trailer' && <TrailerModal/>}

      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/genres' element={<GenresPage/>}/>
        <Route path='/genres/:genre' element={<MovieForSpecificGenreList/>}/>
        <Route path='/account' element={<Account/>}/>
        <Route path='/movie/:movieId' element={<CurrentMoviePage/>}/>
        <Route path='/auth' element={<LoginForm/>}/>
        <Route path='/:trailerYouTubeId' element={<TrailerModal/>}/>
      </Routes>
    
      <Footer/>
    </BrowserRouter>
  )
}

export default App
