import * as React from 'react';
import containerStyles from './container.module.css';

class Container extends React.Component<{}, {}> {
    render() {
        return (
            <div className={containerStyles.container}>
                {this.props.children}
            </div>
        );
    }
}

export default Container;