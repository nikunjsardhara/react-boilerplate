import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
const LoggedOutLayout = () => {
    return <><div>
        <Header />
    </div>
        <Outlet />
        <Footer />
    </>;
};

export default LoggedOutLayout;
