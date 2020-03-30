import React from 'react';
import Header from '../frame/Header';
import Profile from '../frame/Profile';
import Footer from '../frame/Footer';

class Layout extends React.Component<{}, {}> {
    render() {
        return (
            <>
                <Header />
                <Profile />
                <Footer />
            </>
        )
    }
}

export default Layout;