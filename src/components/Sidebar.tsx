import React, { Component, useContext, useEffect, useRef } from 'react';
import { matchPath, useLocation } from 'react-router-dom';
import { GlobalContext } from '../App';

const EmptyComponent = () => {
    return (
        <div className="hidden">
            <h1>Empty Component</h1>
        </div>
    );
}

const useClickOutside = () => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event:any) {
            if(ref.current && !ref.current.contains(event.target)) {
                //
            }
        }

        document.addEventListener('click', handleClickOutside);

        return () =>  {
            document.removeEventListener('click', handleClickOutside);
        }
    });

    return ref;
}

const Sidebar = () => {
    const ref = useClickOutside();

    const isMatch = matchPath('/ujian', useLocation().pathname);

    if(isMatch) {
        return (
            <GlobalContext.Consumer>
                {
                    value => {
                        const  [state, setSidebarState] = value;
                        return(
                            <div ref={ref} className={"sidebar absolute flex flex-col px-3 py-2 right-0 bg-white shadow-lg " + (state.sidebarOpen ? 'd-block' : '')}>
                                <div className="flex pb-4 pt-2">
                                    <div className="flex flex-col">
                                        <h3 className="text-xl">Daftar Soal</h3>
                                        <div className="text-gray-700 text-xs" id="count">
                                            <span className="text-blue-500" id="answered">0</span> Terjawab,
                                            <span className="text-yellow-700" id="doubt">0</span> Ragu-ragu,
                                        </div>
                                    </div>
                                    <button className="ml-auto px-2 py-2 bg-transparent hover:bg-gray-100 focus:outline-none closebtn" onClick={() => setSidebarState(false)}>
                                        <i className="fas fa-times text-red-500"></i>
                                    </button>
                                </div>
                                <hr className="border border-gray-200" />
                                <div className="flex flex-wrap mt-2">
                                    {/* @if(isset($soal) && $soal != "")
                                        @foreach($soal as $item)
                                        <div className="soal border border-blue-500 cursor-pointer hover:bg-blue-200 flex w-10 h-10 m-2 rounded" data-target="{{ $item->id }}"
                                            onclick="navigate({{ $loop->index }})">
                                                <p className="m-auto">{{ $loop->index + 1 }}</p>
                                        </div>
                                        @endforeach
                                    @endif */}
                                </div>
                            </div>
                        )
                    }
                }
            </GlobalContext.Consumer>
        );
    }

    return <EmptyComponent />
}

export default Sidebar;