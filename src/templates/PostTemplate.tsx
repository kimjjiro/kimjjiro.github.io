import React from 'react';
import Layout from '../components/Layout'
import { graphql } from 'gatsby';

class PostTemplate extends React.Component<{}, {}> {
    render() {
        console.log(this.props);
        const posts = this.props.data.markdownRemark

        return (
            <Layout>
                <h1>{posts.frontmatter.title}</h1>
                <p>{posts.frontmatter.date}</p>
                <div dangerouslySetInnerHTML={{__html: posts.html}}>
                </div>
            </Layout>
        )
    }
}

export default PostTemplate;

export const pageQuery = graphql`
    query postQuery($slug: String!) {
        markdownRemark(fields: {slug: {eq: $slug}}) {
            id
            fields {
                slug
            }
            html
            frontmatter {
                title
                date(formatString: "YYYY-MM-DD")
            }
        }
    }
`