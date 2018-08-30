import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
   const frameColor = prompt('Podaj kolor ramki');
   let element;

  if (frameColor!=='red' && frameColor!=='green' && frameColor!=='blue') {
    element = <div id='app'>Nieprawidłowy kolor</div>
  }else{
    const style = {
      width: 100,
      height: 100,
      borderWidth: 5,
      borderStyle: 'solid',
      borderColor: frameColor
    }
    element = <div id='app' style={ style }></div>
  }

    ReactDOM.render(element, document.getElementById('app'));
});