import React, { Component, createContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About'
import Login from './pages/Login';
import './App.css';
import './extension.css';
import ButtonAction from './components/ButtonAction';
import Exam from './pages/Exam';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import ExamLayout from './layouts/ExamLayout';
import AuthLayout from './layouts/AuthLayout';

export interface IGlobal {
  sidebarOpen: boolean;
  setSidebarState: (state: boolean) => void;
}

export const GlobalContext = createContext<IGlobal | any>({} as IGlobal | any);
const Provider = GlobalContext.Provider;

export default class App extends Component { 
  state = {
    sidebarOpen: false
  }

  setSidebarState = (state: boolean) => {
    this.setState({
      sidebarOpen: state
    });
  }

  componentDidMount() {
    const setSidebar = (state: boolean) => {
      this.setSidebarState(state);
    }

    document.addEventListener('click', function(event:any) {
      let sidebar = document.querySelector('.sidebar');
      if(!event.target.matches('#daftarsoal') && !event.target.matches('.sidebar') && 
      !sidebar?.contains(event.target)) {
        setSidebar(false);
      }
    });
  }

  render() { 
    return (
      <Provider value={[this.state, this.setSidebarState]}>
        <Routes>
          <Route path="/" element={<ExamLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/ujian" element={<Exam />} />
          </Route>
          <Route path="/auth" element={<AuthLayout />}>
            <Route path="/auth/login" element={<Login />} />
          </Route>
        </Routes>
      </Provider>
    );
  }
}
