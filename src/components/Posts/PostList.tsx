import React from 'react';
import { Link } from 'gatsby';

class PostList extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <ul>
          {this.props.data.allMarkdownRemark.edges.map((node, index) => (
            <li key={index}>
              <Link to={node.node.fields.slug}>
                {node.node.frontmatter.title} - {node.node.frontmatter.date}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default PostList;