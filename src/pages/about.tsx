import * as React from 'react'
import { graphql } from "gatsby"
import Layout from '../components/Layout'
import MiniProfile from '../components/Profile/MiniProfile'

export default class About extends React.Component<{}, {}> {
  render() {
    const data = this.props.data;
    return (
      <Layout>
        <MiniProfile />
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