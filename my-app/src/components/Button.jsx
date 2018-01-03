import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import App from '../App';

class Button extends Component {

  changeColor() {
    console.log('color', this.color);
    this.props.onChangeColor(this.color.value);
  }

  render() {
    let {color, Active, onClick} = this.props;

    return (

        <div
            onClick={() => this.changeBackground(color)}
            className={color + [Active === color ? ' active' : '']}
        />

    );
  }
}

Button.propTypes = {
  // props
  color: PropTypes.array.isRequired
};


export default connect(
    state => ({
      color: state.color
    }),
    dispatch => ({
      onChangeColor: (color) => {
        dispatch({type: 'ACTIVE_COLOR',color});
      }
    })
)(Button);
