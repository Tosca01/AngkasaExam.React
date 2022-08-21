import React, { CSSProperties, useContext } from 'react';
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

    return (
        <div className="h-full w-100 flex items-center">
            <BarLoader loading={state.loading} cssOverride={loadingStyles} color="#3498db" />
        </div>
    )
}

export default GlobalLoader;