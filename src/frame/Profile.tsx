import React from 'react';
import {
    IoLogoInstagram,
    IoLogoGithub,
    IoLogoLinkedin,
  } from "react-icons/io";
import ProfileWrapper from '../components/profile-component/ProfileWrapper';

class Profile extends React.Component<{}, {}> {
    Links: any[] = [
        {
            icon: <IoLogoInstagram />,
            url: "",
            tooltip: "Instagram"
        },
        {
            icon: <IoLogoLinkedin />,
            url: "",
            tooltip: "LinkedIn"
        },
        {
            icon: <IoLogoGithub />,
            url: "https://github.com/kimjjiro",
            tooltip: "Github"
        }
    ];

    styles = {
        // height: '1000px'
    };
      
    render () {
        return (
            <section className="App-Profile" style={this.styles}>
                <ProfileWrapper>
                    {this.Links.map((item, index) => (
                        <li key={index}>
                            <a href={item.url}>
                                {item.icon || 'icon'}
                            </a>
                        </li>
                    ))}
                </ProfileWrapper>
            </section>
        )
    }
}

export default Profile;