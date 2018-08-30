import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
   
  const age = prompt('Podaj swój wiek');
  let divElement;

  if (age<18) {
    divElement = <div id='youth'>{age}</div>
  }else{
    divElement = <div id='adult'>{age}</div>
  }

     ReactDOM.render(divElement, document.getElementById('app'));
});