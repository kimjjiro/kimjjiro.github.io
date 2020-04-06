import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import footerStyle from './Footer.module.css';
import { useStaticQuery, graphql } from 'gatsby';

const Footer: React.FunctionComponent<{}> = (props) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    description
                }
            }
        }
    `);
         
    const desc = data.site.siteMetadata.description;

    return (
        <div className={footerStyle.FooterContainer}>
            <Container>
                <Row>
                    <Col>
                        {desc}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer;