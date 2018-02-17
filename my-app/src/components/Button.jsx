import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../App.css';

class Button extends Component {
  constructor(props) {
    super(props);

    this.onChangeColor = this.onChangeColor.bind(this);
  }

  onChangeColor() {
    let {
      color, activeColor, animation,
      setActiveColor, setBgColor, setAnimation
    } = this.props;

    if (!animation && color !== activeColor) {
    setActiveColor(color);
    setAnimation(true);

      setTimeout(() => {
        setBgColor(color);
        setAnimation(false);
      }, 500)
    }
  }


  render() {
    let { color, animation, activeColor } = this.props;

    return (
        <div
            onClick={this.onChangeColor}
            className={
              'btn ' +
              color +
              [activeColor === color ? ' active' : ''] +
              [animation ? ' cursor-default' : '']
            }
        />
    );
  }
}

Button.propTypes = {
  // props
  color: PropTypes.string.isRequired,

  //redux
  activeColor: PropTypes.string.isRequired,
  animation: PropTypes.bool.isRequired,

  //actions
  setActiveColor: PropTypes.func.isRequired,
  setBgColor: PropTypes.func.isRequired,
  setAnimation: PropTypes.func.isRequired
};

export default connect(
    state => ({
      activeColor: state.activeColor,
      animation: state.animation
    }),
    dispatch => ({
      setActiveColor: color => {
        dispatch({ type: 'SET_ACTIVE_COLOR', color});
      },
      setBgColor: color => {
        dispatch({ type: 'SET_BG_COLOR', color});
      },
      setAnimation: payload => {
        dispatch({ type: 'SET_ANIMATION', payload});
      }
    })
)(Button);
