import { Link, Route, Routes, Navigate } from 'react-router-dom'
import About from "../pages/About";
import Posts from "../pages/Posts";
import { Error } from "../pages/Error";
import { PostIdPage } from '../pages/PostIdPage';
import { privateRoutes, publicRoutes } from '../router';
import { Login } from '../pages/Login';
import { useContext } from 'react';
import { AuthContext } from '../context';
import { Loader } from './UI/Loader/Loader';

export const AppRouter = () => {

    const {isAuth, isLoading} = useContext(AuthContext)

    if (isLoading) {
        return <Loader/>
    }

    return (
        isAuth 
        ? <Routes>
          {privateRoutes.map(route => 
            <Route element={route.component} path={route.path} exact={route.exact} key={route.path}/>
          )}
          <Route path='*' element={<Posts to='/posts'/>}/>
        </Routes>
        :
        <Routes>
          {publicRoutes.map(route => 
            <Route element={route.component} path={route.path} exact={route.exact} key={route.path}/>
          )}
          <Route path='*' element={<Login to='/login'/>}/>
        </Routes>
    )
}