import * as React from 'react';
import footerStyle from './Footer.module.css';

class Footer extends React.Component<{}, {}> {
    render () {
        return (
            <div className={footerStyle.FooterContainer}>
                Footer
            </div>
        )
    }
}

export default Footer;