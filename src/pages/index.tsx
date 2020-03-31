import * as React from "react";
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout';
import MiniProfile from '../components/Profile/MiniProfile';
import PostList from '../components/Posts/PostList';

class Index extends React.Component<{}, {}> {
  render() {
    return (
      <Layout>
        <MiniProfile />
        <PostList {...this.props}/>
      </Layout>
    )
  }
}

export default Index;

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD")
          }
        }
      }
    }
  }
`