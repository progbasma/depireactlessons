import React, { Component } from 'react';
class Cartproduct extends Component {
    state = {
       /*  id:this.props.product.id,
        name:this.props.product.name,
        price:this.props.product.price,
        quantity:this.props.product.quantity */

      } /* 
    addquantity(){
       return ()=>this.setState({quantity:this.props.product.quantity+1});
    }
    minusquantity(){
       return ()=>this.setState({quantity:this.props.product.quantity-1});
    }
    deletcproduct(){
      
    } */

    render() { 
        return (
            <tr key={this.props.product.name}>
                <td>{this.props.product.name}</td>
                <td>{this.props.product.price}</td>
                <td><button onClick={()=>this.props.onIncrement(this.props.product)}>+</button></td>
                <td>{this.props.product.quantity}</td>
                <td><button onClick={()=>this.props.onDecrement(this.props.product)}>-</button></td>
                <td> <button className='btn ' onClick={()=>this.props.onDelete(this.props.product)}><i className='fa fa-trash'></i></button> </td>
            </tr>
        );
    }
}
 
export default Cartproduct;