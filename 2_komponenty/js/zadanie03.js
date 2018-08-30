import React from 'react';
import ReactDOM from 'react-dom';
import StrobeLight from './strobe-light'


document.addEventListener('DOMContentLoaded', function(){
  
  class App extends React.Component {
    render(){
      return <StrobeLight color = 'red' frequency = {2000} />
    }
  }
    ReactDOM.render(<App />, document.getElementById('app'));

});