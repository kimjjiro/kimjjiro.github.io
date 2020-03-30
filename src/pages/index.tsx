import * as React from "react";
import { Link } from 'gatsby';
import Layout from '../components/layout';

class Index extends React.Component<{}, {}> {
    render () {
        return (
            <Layout>
                <Link to="/about">About</Link>
                <h1>Hello Gatsby!</h1>
                <p>What a world.</p>
                <img src="https://source.unsplash.com/random/400x200" alt="" />
            </Layout>
        )
    }
}

export default Index;
