import React from 'react';
import ReactDOM from 'react-dom';
import TextTyper from './text-typer'


document.addEventListener('DOMContentLoaded', function(){
  
  class App extends React.Component {
    render(){
      return(
        <ul>
          <TextTyper text = {this.props.text} />
        </ul>
      )
    }
  }
    ReactDOM.render(<App text = 'Hello' />, document.getElementById('app'));

});