import React from 'react';
import { matchPath, useLocation } from 'react-router-dom';

const RenderedComponent = () => {
    return (
        <div>
            <div className="flex w-full justify-between bottom-0 bg-white py-2 border-t shadow-sm">
                <div className="ml-3">
                    <p className="hidden" id="number"></p>
                    <p className="hidden" id="type"></p>
                    <button className="px-3 py-2 border border-gray-700 rounded text-gray-700 hover:border-gray-500 hover:text-gray-600 focus:outline-none
                        text-xs md:text-base lg:text-base">
                        <i className="fas fa-long-arrow-alt-left mr-1"></i> Sebelumnya
                    </button>
                </div>
                <div>
                    <div className="px-3 py-2 bg-yellow-600 rounded cursor-pointer text-white hover:bg-yellow-500 text-xs md:text-base lg:text-base">
                        <input type="checkbox" name="ragu" id="ragu" className="mx-1" /><i className="fas fa-question mr-1"></i> Ragu-ragu
                    </div>
                </div>
                <div className="mr-3">
                    <button className="btn-next text-xs md:text-base lg:text-base cursor-pointer" id="next-button">
                         Next <i className="fas fa-long-arrow-alt-right ml-1"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}

const EmptyComponent = () => {
    return (
        <div className="hidden">No components</div>
    )
}

const ButtonAction = () => {
    const isMatch = matchPath('/ujian', useLocation().pathname);

    if(isMatch) {
        return <RenderedComponent />;
    } else {
        return <EmptyComponent />;
    }
    
}

export default ButtonAction;