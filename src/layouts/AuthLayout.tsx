import React from 'react';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
    return (
        <div className='h-full w-full'>
            <Outlet />
        </div>
    );
}

export default AuthLayout;