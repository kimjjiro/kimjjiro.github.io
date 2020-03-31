import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { IoIosSearch } from 'react-icons/io';
import navbarStyle from './Navbar.module.css';

const Navbar: React.FunctionComponent<{}> = (props) => {
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

    const menu = [
        {
            link: "/posts",
            text: "POSTS"
        },
        {
            link: "/about",
            text: "ABOUT"
        }
    ];

    return (
        <div className={navbarStyle.NavbarContainer}>
            <Link to="/">
                {data.site.siteMetadata.title}
            </Link>
            <ul className={navbarStyle.NavbarLinkUl}>
                {menu.map((item, index) => (
                    <li key={index} className={navbarStyle.NavbarLinkLi}>
                        <Link to={item.link}>
                            {item.text}
                        </Link>
                    </li>
                ))}
                <li className={navbarStyle.NavbarLinkLi}>
                    <Link to="/search">
                        <IoIosSearch />
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;