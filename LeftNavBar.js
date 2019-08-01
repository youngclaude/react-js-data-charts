import React, {Component} from 'react';

export class LeftNavBar extends Component {
    render(){
        return(
            <div className='collection' style={navBarStyles}>
                <a href="/" className="collection-item">Home</a>
                <a href="/line" className="collection-item">Line Chart</a>
                <a href="/Bar" className="collection-item">Bar</a>
                <a href="/horizontal-bar" className="collection-item">Horizontal Bar</a>
            </div>
        );
    }
}

const styles = navBarStyles => ({
    root: {
        color: '#000',
        position: 'fixed',
        width: '15%'

    }
});

const navBarStyles = {
    color: '#000',
  position: 'fixed',
  width: '15%'
};

export default(LeftNavBar);

