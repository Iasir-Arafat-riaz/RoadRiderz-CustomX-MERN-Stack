import React, { createContext } from 'react';
import { useFirebase } from '../hooks/useFirebase';

export const AuthContex = createContext()

const AuthProvider = ({children}) => {
    const allContent =useFirebase()
    return (
        <AuthContex.Provider value={allContent}>
            {children}
            
        </AuthContex.Provider>
    );
};

export default AuthProvider;