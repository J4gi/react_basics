import React from 'react';
import ReceiptHeader from './receipt-header'
import ReceiptItems from './receipt-items'
import ReceiptFooter from './receipt-footer'


class Receipt extends React.Component {
  render(){
    return(
      <table>
        <ReceiptHeader />
        <ReceiptItems items={this.props.items} />
        <ReceiptFooter items={this.props.items} />
      </table>
    );
  }
}


export default Receipt;