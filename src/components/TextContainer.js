import React, { Component } from 'react';

export default class TextContainer extends Component {
  constructor() {
    super()
    this.state = {
      text: ''
    }
  }

  updateText= (e) => {
    this.setState({
      text: e.target.value
    })
  }

  render() {
    let { fontFamily, fontSize, fontColor } = this.props
    return (
      <div className="textContainer">
        <textarea 
           style={{ color: fontColor, fontFamily: fontFamily, fontSize: fontSize }  }
          onChange={this.updateText}
          value={this.state.text} 
          placeholder='Start typing your thoughts here!'
          cols="90"
          rows="30">
        </textarea>
      </div>
    )
  }
}




