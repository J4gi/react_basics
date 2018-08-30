import React from 'react';
import ReactDOM from 'react-dom';
import Receipt from "./receipt";

document.addEventListener('DOMContentLoaded', function(){
  
  class App extends React.Component {
    render(){
      return(
        <Receipt items = {this.props.items} />
      )
    }
  }
    ReactDOM.render(<App items = { items } />, document.getElementById('app'));

});

const items= [
  {
      price   :   4,
      count   :   1,
      name    :   'Ser Camembert'
  },
  {
      price   :   2,
      count   :   2,
      name    :   'Baton energetyczny'
  },
  {
      price   :   2.99,
      count   :   1,
      name    :   'Masło'
  },
  {
      price   :   1.50,
      count   :   3,
      name    :   'Woda n/gaz'
  },
  {
      price   :   3.55,
      count   :   1.56,
      name    :   'Jabłka luz'
  },
  {
      price   :   12.49,
      count   :   1,
      name    :   'Zestaw śniadaniowy MIX'
  }
];