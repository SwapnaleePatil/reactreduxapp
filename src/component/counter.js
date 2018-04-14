import React from 'react';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    handleCount = () => {
        this.setState((state)=>{ return ({count : state.count + 1})});
        this.setState((state)=>{ return ({count : state.count + 1})});
        this.setState((state)=>{ return ({count : state.count + 1})});
    }
    render() {
        return (
            <div>
                <br/>
                <FloatingActionButton onClick={() => {
                    this.handleCount(this.state.count)
                }}>
                    <ContentAdd/>
                </FloatingActionButton>
                <br/>
                <h3>{this.state.count}</h3>
            </div>
        )
    }
}

export default Counter;