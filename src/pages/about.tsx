import * as React from 'react';
import Header from '../components/header';
import { graphql } from "gatsby"

export default ( {data} ) => (
    <div style={{color: `teal`}}>
        <Header headerText="About" />
        <p>{data.site.siteMetadata.title}</p>
    </div>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`