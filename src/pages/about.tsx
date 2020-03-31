import * as React from 'react';
import { graphql } from "gatsby"
import Layout from '../components/Layout';

export default class About extends React.Component<{}, {}> {
  render() {
    const data = this.props.data;
    return (
      <Layout>
        <p>{data.site.siteMetadata.title}</p>
        <p>t</p>
      </Layout>
    )
  }
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`