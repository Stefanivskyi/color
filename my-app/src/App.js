import React, { Component } from 'react';
import Button from './components/Button';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class App extends Component {

  render() {
    let { activeColor, bgColor, animation} = this.props;

    return (
        <div className="App">
          <div className="main-container"
               style = {{backgroundColor: bgColor}}
          >
            <div className={'scale-container' + [animation ? ' animation' : '']}
                 style = {{backgroundColor: activeColor}}>
            </div>
          </div>

          <div className="colors-btn">
            <Button color='black' />
            <Button color='orange' />
            <Button color='green' />
            <Button color='yellow' />
            <Button color='mistyrose' />
          </div>
        </div>
    );
  }
}

Button.propTypes = {
  //redux
  activeColor: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  animation: PropTypes.bool.isRequired,
};

export default connect(
    state => ({
      activeColor: state.activeColor,
      bgColor: state.bgColor,
      animation: state.animation
    }),
    dispatch => ({})
)(App);
