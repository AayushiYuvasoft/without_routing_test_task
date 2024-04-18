import React, { useEffect, useState } from 'react'
import Login from '../Login/login'
import Dashboard from '../Dashboard/Dashboard'
import PageLoader from '../../Components/Loader/Loader';
import Layout from '../../Components/Layout/Layout';
import { useSelector } from 'react-redux';

const MainView = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const { isAuth } = useSelector((state) => {
        return {
          isAuth: state.auth?.isAuth,
        };
      });

      useEffect(() => {
        if (isAuth?.token) {
          setIsLoggedIn(true);
          setIsLoading(false);
        } else {
          setIsLoggedIn(false);
          setIsLoading(false);
        }
      }, [isAuth?.token]);

  return (
    <div>
        {
            isLoading ?
            <PageLoader />
            :
            isLoggedIn ?
            <Layout>
               <Dashboard /> 
            </Layout>
            :
            <Login />
        }
    </div>
  )
}

export default MainView