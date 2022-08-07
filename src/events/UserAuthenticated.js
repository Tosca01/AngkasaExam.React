import React, { createContext } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const user = {
        name: 'John Doe',
    };

    return (
        <UserContext.Provider value={{user}}>
            {children}
        </UserContext.Provider>
    );
}