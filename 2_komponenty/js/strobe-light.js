import React from 'react';


  class StrobeLight extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        style: {
          width: 500,
          height: 50,
          backgroundColor: 'white',
        }
      }
    }

    shift(){
      let backgroundColor = (this.state.style.backgroundColor === 'white') ? this.props.color: 'white';
      this.setState({
        style: {
          width: 500,
          height: 50,
          backgroundColor: backgroundColor,
        }
      });
    }

    componentDidMount(){
      this.intervalId = setInterval( () =>
      {this.shift()},
      this.props.frequency);
    }

     componentWillUnmount(){
      clearInterval(this.intervalId);
    }


    render(){
      return(
        <div style = {this.state.style} ></div>
      )
    }
  }

  export default StrobeLight;