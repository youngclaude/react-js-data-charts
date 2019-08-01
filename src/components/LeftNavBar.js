import React, {Component} from 'react';
import injectSheet  from 'react-jss';

export class LeftNavBar extends Component {
    render(){
        const { classes } = this.props;
        return(
            //<div className='collection' style={navBarStyles}>
            <div className={'collection '+ classes.navBarStyles }>
                <a href="/" className="collection-item">
                    <span className={classes.navSpanStyle + ' center'}>Home/ Overview</span>
                </a>
                <a href="/line" className="collection-item">
                    <i className="material-icons">insert_chart</i>
                    Line Chart
                </a>
                <a href="/Bar" className="collection-item">
                    <i className="material-icons">bar_chart</i>
                    <span>Bar</span>
                </a>
                <a href="/horizontal-bar" className="collection-item">
                    <i className="material-icons">bar_chart</i>
                    <span>Horizontal Bar</span>
                </a><a href="/pie" className="collection-item">
                    <i className="material-icons">bar_chart</i>
                    <span>Pie</span>
                </a>
            </div>
        );
    }
}

const style = {
    navBarStyles: {
        color: '#000',
        position: 'fixed',
        width: '20%',
       '& a': {
            fontFamily: 'Sanserif',
           color: '#efe'
        }
   },
   navSpanStyle: {
       verticalAlign: 'middle'
   }
};

/*
const navBarStyles = {
    color: '#000',
  position: 'fixed',
  width: '15%'
};
*/

export default injectSheet(style)(LeftNavBar);

