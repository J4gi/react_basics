import React from 'react';


class ReceiptFooter extends React.Component {
  render(){

    let result = 0
    this.props.items.forEach((item) => {
      result += item.count*item.price;
    })

    return(
      <tfoot>
        <tr>
          <td>
            RAZEM
          </td>
          <td>
            -
          </td>
          <td>
            -
          </td>
          <td>
            {result}
          </td>
        </tr>
      </tfoot>
    );
  }
}


export default ReceiptFooter;