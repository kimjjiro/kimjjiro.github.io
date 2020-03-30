import React from 'react';

class Posts extends React.Component<{}, {}> {
    state = {
        title: ''
    }

    changeTitle = (e : any) => {
        this.setState({
            title: e.target.value
        });
    }

    clearTitle = () => {
        this.setState({
            title: ""
        });
    }

    render() {
        return (
            <div>
                <div>제목 : {this.state.title}</div>
                <input 
                    placeholder="제목"
                    value={this.state.title}
                    onChange={this.changeTitle} />
                <button onClick={this.clearTitle}>Clear</button>
            </div>
        )
    }
}

export default Posts;