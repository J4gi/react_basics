import React from 'react';
import ReactDOM from 'react-dom';
import people from './people';

document.addEventListener('DOMContentLoaded', function(){
  const divs =  people.map((person) =>
    displayPerson(person));
    function displayPerson(person) {
      return(
        <div className="person">
          <img src= { person.avatar }></img>
          <div className='info'>
            <h1>{ person.title + ' ' + person.name + ' ' + person.surname }</h1>
            <p>{ person.bio }</p>
          </div>
        </div>)
    }
    ReactDOM.render(divs, document.getElementById('app'));
  });