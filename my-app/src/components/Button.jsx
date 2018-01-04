import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../App.css';

class Button extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeColor: 'black'
    };

    this.changeColor = this.changeColor.bind(this)
  }

  changeColor() {

    this.setState({
      activeColor: this.color // activeColor: ?
    });

    let { color } = this.props;
    console.log('color', color);
    this.props.onChangeColor( color );
  }

  render() {
    let { color } = this.props;
    let { activeColor } = this.state;

    return (
        <div
            onClick={this.changeColor}
            className={color + [activeColor === color ? ' active' : '']}
        />
    );
  }
}

Button.propTypes = {
  // props
  color: PropTypes.string.isRequired
};


export default connect(
    state => ({
      activeColor: state.activeColor
    }),
    dispatch => ({
      onChangeColor: (color) => {
        dispatch({type: 'ACTIVE_COLOR',color});
      }
    })
)(Button);
