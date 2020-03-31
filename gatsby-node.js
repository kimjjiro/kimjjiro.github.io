const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === `MarkdownRemark`) {
        const slug = createFilePath({ node, getNode, basePath: `pages` })
        createNodeField({
        node,
        name: `slug`,
        value: slug,
        })
    }
}

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    const postTemplate = path.resolve(`./src/templates/PostTemplate.tsx`)

    await graphql(`
    query {
        allMarkdownRemark {
            edges {
                node {
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
        }
    }
  `).then((result) => {
    if (result.errors) {
        throw result.errors
    }

    const posts = result.data.allMarkdownRemark.edges

    posts.forEach(({ node }) => {
        createPage({
            path: node.fields.slug,
            component: postTemplate,
            context: {
                // Data passed to context is available
                // in page queries as GraphQL variables.
                slug: node.fields.slug,
            },
        })
    })

    return null
  })
}