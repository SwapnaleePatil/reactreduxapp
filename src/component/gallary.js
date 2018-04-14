import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import image1 from '../images/grid-list/1.jpg'
import image2 from '../images/grid-list/2.jpg'
import image3 from '../images/grid-list/3.jpg'
import image4 from '../images/grid-list/4.jpg'
import image5 from '../images/grid-list/5.jpg'
import image6 from '../images/grid-list/6.jpg'
import image7 from '../images/grid-list/7.jpg'
import image8 from '../images/grid-list/8.jpg'
import image9 from '../images/grid-list/9.jpg'
import image10 from '../images/grid-list/10.jpg'
import image11 from '../images/grid-list/11.jpg'
import image12 from '../images/grid-list/12.jpg'
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import './gallary.css';
const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },

    gridList: {
        width: 1500,
        height: 630,


    },
    titleStyle: {
        color: 'rgb(0, 188, 212)',
    },
};

const tilesData = [
    {
        img: image1,
    },
    {
        img: image2
    },
    {
        img: image3,
    },
    {
        img: image4,
    },
    {
        img: image5,
    },
    {
        img: image6,
    },
    {
        img: image7,
    },
    {
        img: image8,
    },
    {
        img: image9,
    },
    {
        img: image10,
    },
    {
        img: image11,
    },
    {
        img: image12,
    },
];

/**
 * This example demonstrates the horizontal scrollable single-line grid list of images.
 */
class Gallary extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            imgSelected: ''
        }
    }

    render() {
        return (
            <div>
                <br/>
                <div style={styles.root}>
                    <GridList style={styles.gridList} cols={4}>
                        {tilesData.map((tile) => (
                            <GridTile
                                key={tile.img}
                                title={tile.title}
                                actionIcon={<IconButton><StarBorder color="rgb(0, 188, 212)"/></IconButton>}
                                titleStyle={styles.titleStyle}
                                titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
                            >
                                <img src={tile.img} alt="10x10" onMouseOver={() => {
                                    this.setState({imgSelected: tile.img})
                                }}/>
                            </GridTile>
                        ))}
                    </GridList>
                </div>
                <div>
                    <img src={this.state.imgSelected} className="large" alt='10x10' height='30%'
                         width='30%'/>
                </div>
            </div>
        )

    }
}
export default Gallary;