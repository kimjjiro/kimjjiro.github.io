import React from 'react';
import { Container, Row, Col, Badge, Card } from 'react-bootstrap';
import { Link } from 'gatsby';
import PostListStyle from './PostList.module.css';

class PostList extends React.Component<{}, {}> {
  render() {
    
    return (
      <Container className={PostListStyle.PostListContainer}>
          {this.props.data.allMarkdownRemark.edges.map((node, index) => (
            <Link key={index} to={node.node.fields.slug}>
              <Card className={PostListStyle.Post}>
                <Card.Header >
                  {node.node.frontmatter.language}
                </Card.Header>
                <Card.Body>
                  <Card.Title>
                      {node.node.frontmatter.title}
                  </Card.Title>
                  <Card.Text>
                    {node.node.frontmatter.date}
                  </Card.Text>
                  {node.node.frontmatter.tag}
                </Card.Body>
              </Card>
            </Link>
          ))}
      </Container>
    )
  }
}

export default PostList;