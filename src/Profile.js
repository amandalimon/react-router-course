import React from 'react';
import { useAuth } from './auth';

function Profile() {
    const auth = useAuth();

    return (
        <>
            <h1>Perfil</h1>
            <p>Bienvenide, {auth.user.username}!</p>
        </>
    );
}

export { Profile }