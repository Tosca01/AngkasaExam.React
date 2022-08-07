import React, { Component } from 'react';
import { Outlet, Route } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import About from '../pages/About';
import Exam from '../pages/Exam';
import Home from '../pages/Home';

const ExamLayout = () => {
    return (
        <div className="h-full">
            <Sidebar />
            <Header />
            <div className="wrapper container mx-auto">
                <Outlet />
            </div>
        </div>
    )
}

export default ExamLayout;