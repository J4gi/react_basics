import React from 'react';
import ReactDOM from 'react-dom';
import animals from './animals.js';

document.addEventListener('DOMContentLoaded', function(){
   
  ReactDOM.render(<div>
    Łączna ilość zwierząt: {animals.length}.
    <br/>
    Zwierzęta: {
      animals.join(', ')
    }
  </div>,
  document.getElementById('app'))

    // ReactDOM.render(<h1>Przywitanie z react</h1>, document.getElementById('app'));
});