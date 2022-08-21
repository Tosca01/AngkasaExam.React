import React, {useContext, useState} from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { GlobalContext } from '../App';
import { ResponseStatus } from '../models/responsestatus';
import Auth from '../services/Auth.service'

const Login = () => {
    const navigate = useNavigate();
    const [nis, setNis] = useState('');
    const [password, setPassword] = useState('');

    const [state, ,setLogged] = useContext(GlobalContext);

    const authService: Auth = new Auth();

    //#region  HandleState
    const handleNisChange = (event: any) => {
        setNis(event.target.value);
    }

    const handlePasswordChange = (event: any) => {
        setPassword(event.target.value);
    }

    //#endregion

    const handleLogin = (event:any) => {
        event.preventDefault();

        authService.login(nis, password).then(response => {
            if(response.data.status == ResponseStatus.Success) {
                const setuser = () => {
                    setLogged(true)
                }

                setuser();

                navigate('/');
            }
        })
    }

    return (
        <div className="h-full flex items-center">
            <div className="md:w-1/2 h-full flex justify-center bg-gray-100">
                <img src="/images/book_login.svg" className="w-4/5" />
            </div>
             <div className="md:w-1/2 h-full flex flex-col px-12 justify-center bg-white">
                <h1 className="text-4xl font-bold">Selamat Datang</h1>
                <p className="text-gray-500 mt-1">Silahkan login untuk mengerjakan ujian</p>
                <form onSubmit={handleLogin}>
                    <div className="group-form flex flex-col mt-6">
                        <label htmlFor="nis" className="text-gray-500">Nomor induk siswa</label>
                        <input type="text" className="border border-gray-400 focus:border-blue-500 outline-none p-2 text-sm mt-1.5 rounded" id="nis" 
                        placeholder="NIS kamu" value={nis} onChange={handleNisChange} />
                    </div>
                    <div className="group-form flex flex-col mt-4">
                        <label htmlFor="password" className="text-gray-500">Password</label>
                        <input type="password" className="border border-gray-400 focus:border-blue-500 outline-none p-2 text-sm mt-1.5 rounded" id="password" 
                        placeholder="Password kamu" value={password} onChange={handlePasswordChange} />
                    </div>
                    <button className="p-2 bg-blue-600 text-white rounded-lg mt-4 w-full">Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;