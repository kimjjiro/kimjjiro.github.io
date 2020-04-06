import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { IoIosSearch } from 'react-icons/io';
import { Navbar as BootstrapNavbar, Nav } from 'react-bootstrap';
// import navbarStyle from './Navbar.module.css';

const Navbar: React.FunctionComponent<{}> = (props) => {
    const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                title
                description
                menu {
                    link
                    text
                  }
            }
        }
    }
    `);

    const title = data.site.siteMetadata.title;
    const menu = data.site.siteMetadata.menu;
    
    return (
        <BootstrapNavbar bg="light">
            <BootstrapNavbar.Brand href="/">
                {data.site.siteMetadata.title}
            </BootstrapNavbar.Brand>
            <BootstrapNavbar.Collapse className="justify-content-end">
                <Nav>
                    {menu.map((item, index) => (
                        <Nav.Link key={index} href={item.link}>
                            {item.text}
                        </Nav.Link>
                    ))}
                    <Nav.Link href="/">
                        <IoIosSearch />
                    </Nav.Link>
                </Nav>
            </BootstrapNavbar.Collapse>
        </BootstrapNavbar>
    )
}

export default Navbar;