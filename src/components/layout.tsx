import React from "react";
import { useStaticQuery, Link, graphql } from "gatsby";
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

class Layout extends React.Component<{}, {}> {
    render() {
        return (
            <div>
                <Navbar />
                { this.props.children }
                <Footer />
            </div>
        )
    }
}

export default Layout;