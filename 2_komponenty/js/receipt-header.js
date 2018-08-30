import React from 'react';

class ReceiptHeader extends React.Component {
  render(){
    return(
      <thead>
        <tr>
          <th>
            Nazwa
          </th>
          <th>
            Cena/1
          </th>
          <th>
            Ilość
          </th>
          <th>
            Łączna cena
          </th>
        </tr>
      </thead>
    );
  }
}


export default ReceiptHeader;