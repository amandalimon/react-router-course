import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from './auth';

function Menu() {
    const auth = useAuth();

    return (
        <nav>
            <ul>
                {routes.map(route => {
                    if (route.private && !auth.user) return null;
                    if (route.text === 'Login' && auth.user) return null;

                    return (
                        <li key={route.to}>
                            <NavLink
                                to={route.to}
                                style={({ isActive }) => ({
                                    color: isActive ? 'palevioletred' : 'thistle'
                                })}>
                                {route.text}
                            </NavLink>
                        </li>
                    )
                })}
            </ul>
        </nav >
    );
}

const routes = [];
routes.push({
    to: '/',
    text: 'Home',
    private: false,
});
routes.push({
    to: '/blog',
    text: 'Blog',
    private: false,
});
routes.push({
    to: '/profile',
    text: 'Profile',
    private: true,
});
routes.push({
    to: '/log-in',
    text: 'Login',
    private: false,
});
routes.push({
    to: '/log-out',
    text: 'Logout',
    private: true,
});

export { Menu }
