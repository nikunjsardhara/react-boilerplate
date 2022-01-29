import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
const LoggedOutLayout = () => {
    return <><div>
        <Header />
    </div>
        <Outlet />
    </>;
};

export default LoggedOutLayout;
