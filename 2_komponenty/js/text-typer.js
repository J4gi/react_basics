import React from 'react';

let i=0;
class TextTyper extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      text: this.props.text[0],
    }
  };

  componentDidMount(){
    this.intervalId = setInterval( () => {
      i++;
      this.setState({
        text: this.state.text.concat(this.props.text[i]),
      });
      if (i===this.props.text.length-1) {
        clearInterval(this.intervalId);
      } 
    }, 1000);
  }

  componentWillUnmount(){
    clearInterval(this.intervalId);
  }

  render(){
    return <h1>{i}s.: {this.state.text}</h1>
  }
}

export default TextTyper;