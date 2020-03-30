import React from 'react';
import { IoIosSearch } from 'react-icons/io';

class Header extends React.Component<{}, {}> {
    render () {
        return (
            <header className="App-Header">
                <div className="Header-Wrapper">
                    <div className="Header-Logo">
                        <a href="/">
                            Jiirog
                        </a>
                    </div>
                    <div className="Header-Nav">
                        <ul className="Header-Nav-Ul">
                            <li className="Header-Nav-Ul-Li">
                                <a href="/posts">
                                    Posts
                                </a>
                            </li>
                            <li className="Header-Nav-Ul-Li">
                                <a href="/about">
                                    About
                                </a>
                            </li>
                        </ul>
                        <button className="Header-Nae-Search">
                            <IoIosSearch size="1.5em"/>
                        </button>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;