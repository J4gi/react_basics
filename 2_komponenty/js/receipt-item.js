import React from 'react';


class ReceiptItem extends React.Component {
  render(){    
    return (
    <tr>
      <td>{this.props.item.name}</td>
      <td>{this.props.item.price}</td>
      <td>{this.props.item.count}</td>
      <td>{this.props.item.count*this.props.item.price}</td>
    </tr>
    );
}
}


export default ReceiptItem;