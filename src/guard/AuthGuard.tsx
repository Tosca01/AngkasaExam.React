import React, { useContext, useEffect, useState, CSSProperties } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { GlobalContext } from "../App";
import AuthService from "../services/Auth.service";
import GlobalLoader from "../components/GlobalLoader";

const AuthGuard = () => {
    const navigate = useNavigate();
    const [isLoading, setLoading] = useState(true);
    const [state, , setLogged, setUsername] = useContext(GlobalContext);

    const authService = new AuthService();

    useEffect(() => {
        if(isLoading && !state.isLogged) {
            authService.isLogged().then((response:any) => {
                if(response == null || response == undefined || response == "") {
                    setLogged(false);
                } else {
                    setLogged(true);

                    const setName = () => {
                        setUsername(response.nama);
                    }

                    setName();
                }

                setLoading(false);
            }, (error:any) => {
                console.error(error);
                setLoading(false);

                navigate('/auth/login');
            });

        }

    });
  
    return (
        isLoading ? <GlobalLoader />: (state.isLogged) ? <Outlet /> : <Navigate to="/auth/login" />
    )
}

export default AuthGuard;