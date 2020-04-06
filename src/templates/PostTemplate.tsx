import React from 'react';
import Layout from '../components/Layout';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { Container, Row, Col} from 'react-bootstrap';
import { graphql } from 'gatsby';

class PostTemplate extends React.Component<{}, {}> {
    render() {
        const posts = this.props.data.markdownRemark

        return (
            <Layout>
                <Container>
                    <Row>
                        <h1>{posts.frontmatter.title}</h1>
                    </Row>
                    <Row>
                        <p>{posts.frontmatter.date}</p>
                    </Row>
                    <Row>
                        <ReactMarkdown source={posts.html} escapeHtml={false} />
                    </Row>
                </Container>
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