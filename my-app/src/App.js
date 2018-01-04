import React, { Component } from 'react';
import Button from './components/Button';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bgColor: 'black',
      Active: 'black'
    };

    this.changeBackground = this.changeBackground.bind(this)
  }
  changeBackground(color) {

    this.setState({
      Active: color,
      Animation: true
    });

    setTimeout(()=>{
      this.setState({
        bgColor: color,
        Animation: false

      })
    },500)
  }

  render() {
    let { bgColor, Active, Animation} = this.state;
    return (
        <div className="App">
          <div className="main-container" id="main-container"
               style = {{backgroundColor: bgColor}}>
            <div className={"scale-container" + [Animation ? ' animation' : '']}
                 style = {{backgroundColor: Active}}>
            </div>
          </div>

          <div className="colors-btn">
            <Button color='black'> </Button>
            <Button color='orange'> </Button>
            <Button color='green' onClick={() => this.changeBackground('green')}> </Button>
            <div className={"yellow"  + [Active==='yellow' ? ' active' : '']} onClick={() => this.changeBackground('yellow')}> </div>
            <div className={"mistyrose"  + [Active==='mistyrose' ? ' active' : '']} onClick={() => this.changeBackground('mistyrose')}> </div>
          </div>
        </div>
    );
  }
}

export default App;
