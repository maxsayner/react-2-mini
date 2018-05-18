import React, { Component } from 'react';

// Components
import EditToggle from './components/EditToggle';
import ColorChanger from './components/ColorChanger';
import SizeChanger from './components/SizeChanger';
import FamilyChanger from './components/FamilyChanger';
import TextContainer from './components/TextContainer';

class App extends Component {
  constructor(props) {
  super(props);

  this.state = {
    fontColor: 'black',
    fontSize: 12,
    fontFamily: 'monospace',
    allowEdit: 'true'
    }

  }

  updateColor = color => {
    this.setState({ fontColor: color })
  }

  updateSize = size => {
    this.setState({ fontSize: size })
  }

  updateFamily = family => {
    this.setState({ fontFamily: family })
  }

  updateEditStatus = status => {
    this.setState({ allowEdit: status })
  }

  render() {
    return (
      <div>
        <div className="headerBar">
          < EditToggle update={this.updateEditStatus} allowEdit={this.state.allowEdit}/>
          < ColorChanger update={this.updateColor} allowEdit={this.state.allowEdit}/>
          < SizeChanger update={this.updateSize} allowEdit={this.state.allowEdit}/>
          < FamilyChanger update={this.updateFamily} allowEdit={this.state.allowEdit}/>
        </div>
        <div className="textArea">
          <TextContainer
           fontColor={this.state.fontColor}
           fontSize={this.state.fontSize}
           fontFamily={this.state.fontFamily} />
        </div>
      </div>
    )
  }
}

export default App;
