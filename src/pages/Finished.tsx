import React from 'react';
import { ResponseStatus } from '../models/responsestatus';
import AuthService from '../services/Auth.service';
import { useNavigate } from 'react-router-dom';

const Finished = () => { 
    const authService = new AuthService;
    const navigate = useNavigate();

    const handleLogout = () => {
        authService.logout().then(response => {
            if(response.status === ResponseStatus.Success) {
                navigate('/auth/login');
            }
        });
    }

    return (
        <div className="card">
            <div className="card-body">
                <div className="flex flex-col justify-center items-center mt-4">
                    <p className="text-lg font-semibold">
                        Ujian telah selesai, semoga nilai kamu memuaskan. 
                        Jangan lupa untuk terus belajar dirumah 
                    </p>
                    <img src="images/book.svg" alt="" className="md:w-1/2 lg:w-1/2 w-full" />
                    "Barang siapa bersungguh-sungguh, maka dia akan mendapatkan kesuksesan."
                    <a onClick={handleLogout} className="btn btn-blue hover:bg-blue-400 my-4">Logout</a>
                </div>
               
            </div>
        </div>
    )
}

export default Finished;