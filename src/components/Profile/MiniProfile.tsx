import * as React from 'react';
import { Link } from 'gatsby';
import { IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io';
import { Container, Row, Col } from 'react-bootstrap';
import miniProfileStyle from './MiniProfile.module.css';

class MiniProfile extends React.Component<{}, {}> {
    links = [
        {
            name: "Instagram", 
            link: "https://instagram.com",
            icon: <IoLogoInstagram size="1.5rem"/>
        }, 
        {
            name: "LinkedIn", 
            link: "https://linkedin.com",
            icon: <IoLogoLinkedin size="1.5rem"/>
        }, 
        {
            name: "Github", 
            link: "https://github.com/kimjjiro",
            icon: <IoLogoGithub size="1.5rem"/>
        }
    ];

    render() {
        return (
            <Container className={miniProfileStyle.MiniProfileContainer}>
                <Row>
                    <Col className={miniProfileStyle.MiniProfileImageContainer} style={ {background: "black", width: "200px", height: "200px", display: "flex"} }>
                        {/* 이미지 추가 */}
                    </Col>
                    <Col className={miniProfileStyle.MiniProfileDescContainer}>
                        <div>
                            <h2>
                                Hi
                            </h2>
                            <p>
                                I'm Jiiro
                            </p>
                        </div>
                        <ul className={miniProfileStyle.Links}>
                            {this.links.map((node, index) => (
                                <li key={index} className={miniProfileStyle.Link}>
                                    <a href={node.link} >
                                        {node.icon}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default MiniProfile;