import React from 'react';
import ReceiptItem from './receipt-item'


class ReceiptItems extends React.Component {
  render(){

    let rows = this.props.items.map( (row, index) => {
      return <ReceiptItem item = { row }/>
    })

    return(
      <tbody>
        { rows }
      </tbody>
    );
  }
}


export default ReceiptItems;