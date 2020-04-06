import React from 'react';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import { Link } from 'gatsby';
import PostListStyle from './PostList.module.css';

class PostList extends React.Component<{}, {}> {
  render() {
    
    return (
      <Container className={PostListStyle.PostListContainer}>
          {this.props.data.allMarkdownRemark.edges.map((node, index) => (
            <Link key={index} to={node.node.fields.slug}>
              <Row className={PostListStyle.Post}>
                  <Col>
                    {node.node.frontmatter.title}
                  </Col>
                  <Col className={PostListStyle.PostDate}>
                    {node.node.frontmatter.date}
                  </Col>
              </Row>
            </Link>
          ))}
      </Container>
    )
  }
}

export default PostList;