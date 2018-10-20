import React, { Component } from 'react';
import RadioGroup from './components/drawer/radio';
import Drawer from './components/drawer';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            position: 'left',
            visible: false
        }
    }

    showDrawer = () => {
      this.setState({
        visible:true
      });
    }

    onChange = (event) => {
      this.setState({
        position:event.target.value,
        visible: false
      });
    }

    onClose = (event) => {
      this.setState({
        visible: false
      });
    }

    render() {
        return (
            <div className="row">
              <RadioGroup
                position={this.state.position}
                onChange={this.onChange}
                isButtonClicked={this.showDrawer}/>
              {this.state.visible &&
              <Drawer
                position={this.state.position}
                onClose={this.onClose}>
              <h1 className="h1">This is a crazy world!</h1>
              <h2 className="h1">This is a crazy world!</h2>
              <h3 className="h1">This is a crazy world!</h3>
              </Drawer>
            }
            </div>
        );
    }
}

export default App;
