import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ResponseStatus } from '../models/responsestatus';
import AuthService from '../services/Auth.service';
import Persiapan from '../services/Persiapan.service';

const NoUjian = () => {
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
      <div className="flex flex-col justify-center items-center mt-4">
      <p className="text-xl font-semibold mt-4">
        Ujian tidak ditemukan
      </p>
      <img src="images/notfound.svg" className="md:w-1/2 lg:w-1/2 w-full" />
        Kamu tidak memiliki jadwal ujian yang aktif
        <a onClick={handleLogout} className="btn btn-blue hover:bg-blue-400 my-4">Logout</a>
      </div>
    </div>
  )
}

const Home = () => {
  const [state, setState] = useState({
    status: null,
    pelaksanaan: null
  })

  const persiapanService = new Persiapan();

  useEffect(() => {
    const persiapanService = new Persiapan();
    let data;

    persiapanService.getUjianAktif().then(response => {
      setState(response);
    })

  });

  if(state.pelaksanaan == null) {
    return <NoUjian />
  }

  return (
      <div className="card">
        
        </div>
  );
}

export default Home;