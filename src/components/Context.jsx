import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [isRightClose,setIsRightClose] = useState(false);
    const [isLeftClose,setIsLeftClose] = useState(false);

    return (
        <AuthContext.Provider value={{ isRightClose,setIsRightClose,isLeftClose,setIsLeftClose }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const authContextValue = useContext(AuthContext);
    if (!authContextValue) {
        throw new Error("useAuth used outside of the Provider");
    }
    return authContextValue;
};