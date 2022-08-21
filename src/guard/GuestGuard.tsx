import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { GlobalContext } from '../App';

const GuestGuard = () => {
    const [state] = useContext(GlobalContext);

    return (
        state.isLogged == false ? <Outlet /> : <Navigate to="/" />
    );
}

export default GuestGuard();