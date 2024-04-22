import React from 'react';
import { useAuth } from './auth';

function LogoutPage() {
    const auth = useAuth();
    
    const logout = (e) => {
        e.preventDefault(); 
        auth.logout();
    }

    return (
        <>
            <h1>Log out</h1>

            <form onSubmit={logout}>
                <label>Esperamos verte pronto por aquí!!!</label>
                
                <button type="submit">Adiós</button>
            
            </form>
        </>
    );
}

export {LogoutPage}