import React, { CSSProperties, useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { BarLoader } from 'react-spinners';
import { GlobalContext } from '../App';

const GlobalLoader = () => {
    const value = useContext(GlobalContext);

    const {0: state, 5:setLoading} = value;
    
    
    const loadingStyles: CSSProperties = {
        display: "block",
        margin: "auto",
        borderColor: "red",
    }

    if(state.loading) {
        return (
            <div className={"h-full w-100 items-center " + (state.loading ? 'flex' : 'hidden')}>
                <BarLoader loading={state.loading} cssOverride={loadingStyles} color="#3498db" />
            </div>
        )
    }

    return (
        <Outlet />
    )
}

export default GlobalLoader;