import React, { Component, createContext, CSSProperties } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About'
import Login from './pages/Login';
import './App.css';
import './extension.css';
import Exam from './pages/Exam';
import Finished from './pages/Finished';
import ExamLayout from './layouts/ExamLayout';
import AuthLayout from './layouts/AuthLayout';
import AuthGuard from './guard/AuthGuard';

export interface IGlobal {
  sidebarOpen: boolean;
  setSidebarState: (state: boolean) => void;
}

export const GlobalContext = createContext<IGlobal | any>({} as IGlobal | any);
const Provider = GlobalContext.Provider;

export default class App extends Component { 
  state = {
    sidebarOpen: false,
    dropdownOpen: false,
    isLogged: false,
    username: '',
    nis: '',
    loading: false,
  }

  //#region Set State
  setSidebarState = (state: boolean) => {
    this.setState({
      sidebarOpen: state
    });
  }

  setNisState = (nis: string) => {
    this.setState({
      nis: nis
    });
  }

  setUsernameState = (username: string) => {
    this.setState({
      username: username
    })
  }

  setLogged = (isLogged: boolean) => { 
    this.setState({
      isLogged: isLogged
    });
  }

  setDropdownOpen = (state: boolean) => {
    this.setState({
      dropdownOpen: state
    })
  }

  setLoading = (state: boolean) => {
    this.setState({
      loading: state
    })
  }
  // #endregion

  componentDidMount() {
    const setSidebar = (state: boolean) => {
      this.setSidebarState(state);
    }

    const setDropdown = (state: boolean) => {
      this.setDropdownOpen(state);
    }

    document.addEventListener('click', function(event:any) {
      let sidebar = document.querySelector('.sidebar');
      let dropdownNav = document.querySelector('.dropdown-menu');

      if(!event.target.matches('#daftarsoal') && !event.target.matches('.sidebar') && 
      !sidebar?.contains(event.target)) {
        setSidebar(false);
      }

      if(!event.target.matches('.dropdown-menu') && !event.target.matches('#toggleBtn') &&
      !dropdownNav?.contains(event.target)) {
        setDropdown(false);
      }
    });
  }

  render() { 
    const providerValue = [
      this.state,
      this.setSidebarState,
      this.setLogged,
      this.setUsernameState,
      this.setDropdownOpen,
      this.setLoading
    ];

    return (
      <Provider value={providerValue}>
        <Routes>
          <Route element={<AuthGuard />}>
            <Route path="/" element={<ExamLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/ujian" element={<Exam />} />
              <Route path='/selesai' element={<Finished />} />
            </Route>
          </Route>
         
          <Route path="/auth" element={<AuthLayout />}>
            <Route path="/auth/login" element={<Login />} />
          </Route>
        </Routes>
      </Provider>
    );
  }
}
