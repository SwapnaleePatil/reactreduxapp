import React from 'react';
import '../index.css'

class Logout extends React.Component{
    constructor(){
        super();
    }
    componentWillMount(){
        localStorage.removeItem('userType');
        localStorage.removeItem('token');
        this.props.history.push('/');

    }

    render(){
        return(
            <section>

            </section>
        )
    }
}
export default Logout;