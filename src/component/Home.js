import React from 'react';
import {Carousel,Button} from 'react-bootstrap';
import {NavLink} from 'react-router-dom'
class Home extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                {localStorage.getItem('userType') === 'A' &&
                <div><Button active> <NavLink to='/studList'>Student List</NavLink></Button>
                    <Button active> <NavLink to='/gallary'>Gallary</NavLink></Button>

                    <Button active> <NavLink to='/eventList'>Event List</NavLink></Button>
                    <Button active> <NavLink to='/logout'>Logout</NavLink></Button></div>
                }
                {
                    localStorage.getItem('userType') === 'S' &&
                    <div>
                        <Button active> <NavLink to='/gallary'>Gallary</NavLink></Button>

                        <Button active> <NavLink to='/eventList'>Event List</NavLink></Button>
                        <Button active> <NavLink to='/logout'>Logout</NavLink></Button></div>
                }
                <Carousel interval={1000}>
                    <Carousel.Item>
                        <img width={1600} height={500} alt="1500x500" src={require('../images/Untitled1.png')} />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={1600} height={500} alt="1500x500" src={require('../images/Untitled.png')} />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={1600} height={500} alt="1500x500" src={require('../images/Untitled2.png')} />

                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}
export default Home;