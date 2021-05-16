import React from 'react';
import Header from '../atoms/Header/Header';
import Movies from '../organisms/Movies';
import LoginPage from '../atoms/LoginPage'
import LogoutButton from './../atoms/LogoutButton'
import { useAuth0 } from '@auth0/auth0-react'
const App = () => {
    const { user, isAuthenticated } = useAuth0()
    //if (isAuthenticated)
        return (
            <div>
                <Header title="Movie Cards" />
                <div className="mt-4">
                    <Movies />
                </div>
            </div>
        );
    //else
      //  return <LoginPage />
}
export default App;