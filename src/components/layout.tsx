import * as React from 'react';
import './layout.css';

class Layout extends React.Component<{}, {}> {
    render () {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

export default Layout;
