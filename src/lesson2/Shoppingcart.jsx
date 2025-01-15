import React, { Component } from 'react';
import Cartproduct from './cartproduct';
class Shoppingcart extends Component {
    state = { 
        products:[
            {id:1,name:"burger",price:10,quantity:1},
            {id:2,name:"pizza",price:20,quantity:2},
            {id:3,name:"chicken",price:30,quantity:1},
            {id:4,name:"pasta",price:40,quantity:3},
            {id:5,name:"sushi",price:50,quantity:1},
            {id:6,name:"salmon",price:60,quantity:1},
            {id:7,name:"steak",price:70,quantity:4},
        ]
     } 
    render() { 
        return (
            <React.Fragment>
                <h2 className='text-info p-2'>Shoppingcart</h2>
                <table className='table w-50  text-center'>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Add</th>
                            <th>Quantity</th>
                            <th>Minus</th>
                            <td> delete </td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.products.map((product)=>
                            <Cartproduct product={product} key={product.id}/>
                        )}
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}
export default Shoppingcart;