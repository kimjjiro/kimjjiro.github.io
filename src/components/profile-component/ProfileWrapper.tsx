import React from 'react';

class ProfileWrapper extends React.Component<{}, {}> {
    render() {
        return (
            <ul className="Profile-Links">
                { this.props.children }
            </ul>
        )
    }
}

export default ProfileWrapper;