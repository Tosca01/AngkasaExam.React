import React from 'react';
import { matchPath, useLocation } from 'react-router-dom';
import { GlobalContext } from '../App';
import './Header.css';

const ButtonDaftarSoal = () => {
    const isMatch = matchPath('/ujian', useLocation().pathname);

    if(isMatch) {
        return (
            <GlobalContext.Consumer>
                {
                    value => {
                        const  [state, setSidebarState] = value;

                        return (
                            <button id="daftarsoal" className="px-3 py-1 mr-2 bg-blue-500 text-white rounded shadow inline-flex items-center menu 
                            text-sm hover:bg-blue-400 focus:outline-none" onClick={() => setSidebarState(true)}>
                                <i className="fas fa-bars mr-2 btn-icon"></i>
                                Daftar Soal
                            </button>
                        )
                    }
                }
            </GlobalContext.Consumer>
        );
    }
    
    return (
        <div></div>
    )
}

const Header = () => {

    return (
        <nav className="flex items-center justify-between flex-wrap bg-white border-b shadow-sm">
            <div className="flex items-center flex-shrink-0 text-gray-900 mr-6 pl-4 py-2">
                <div className="bg-logo"></div>
                <span className="font-semibold text-lg tracking-tight ml-2"></span>
            </div>
            <div className="block md:hidden lg:hidden">
                <button className="flex items-center px-3 py-2 mr-2 border rounded text-teal-200 border-teal-400 hover:text-gray-400 hover:border-white burger">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                </button>
            </div>
            <div className="w-full md:w-auto lg:w-auto md:flex lg:flex items-center hidden" id="extend-nav">
                <ul className="flex mr-3">
                    <li className="dropdown z-40">
                        <button id="toggleBtn" className="flex px-3 py-2 m-auto font-semibold text-sm
                            text-gray-700 hover:text-gray-900 focus:outline-none items-center">
                            <img src="/images/user.svg" alt=""
                            className="w-8 h-8 rounded-full object-cover" />
                            <span className="ml-2">Mohammad Arfan Maulana</span>
                        </button>
                        <ul className="dropdown-menu w-48 absolute md:right-0 lg:right-0 bg-white shadow hidden text-gray-700 rounded">
                            <li>
                                <a className="w-full rounded-t hover:bg-gray-400 py-2 px-6 block whitespace-no-wrap" href="{{ route('ujian.account') }}">Profile</a>
                            </li>
                            <li>
                                <a className="w-full rounded-b hover:bg-gray-400 py-2 px-6 block whitespace-no-wrap" href="{{ route('logout') }}">Logout</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            
                <ButtonDaftarSoal />
            </div>
        </nav>  
    );
}

export default Header;