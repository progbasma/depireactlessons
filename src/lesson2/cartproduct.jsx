import React, { Component } from 'react';
class Cartproduct extends Component {
    state = {
        id:this.props.product.id,
        name:this.props.product.name,
        price:this.props.product.price,
        quantity:this.props.product.quantity

      } 
    addquantity(){
       return ()=>this.setState({quantity:this.state.quantity+1});
    }
    minusquantity(){
       return ()=>this.setState({quantity:this.state.quantity-1});
    }
    deletcproduct(){
      
    }

    render() { 
        return (
            <tr key={this.state.name}>
                <td>{this.state.name}</td>
                <td>{this.state.price}</td>
                <td><button onClick={this.addquantity()}>+</button></td>
                <td>{this.state.quantity}</td>
                <td><button onClick={this.minusquantity()}>-</button></td>
                <td> <button className='btn ' onClick={this.deletcproduct()}><i className='fa fa-trash'></i></button> </td>
                
            </tr>
        );
    }
}
 
export default Cartproduct;