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
     
     addquantity=(product)=>
    {
        //clone
        const products=[...this.state.products];
        const index=products.indexOf(product);
        products[index]={...products[index]};
        //edit
        products[index].quantity++;
        //set state

        this.setState({products});

    }
     minusquantity=(product)=>
    {
        //clone
        const products=[...this.state.products];
        const index=products.indexOf(product);
        products[index]={...products[index]};
        //edit
        products[index].quantity--;
        //set state

        this.setState({products});

    }
     
    
     deleteproduct=(product)=>{
        //clone
        //edit
        const newproducts=this.state.products.filter((p)=>p.id!==product.id);
        //delete
        this.setState({products:newproducts});
        //لو الاسمين زي بعض بنشيل الكولون والاسم التاني 
        //this.setState({products});


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
                            <Cartproduct product={product} key={product.id} onDelete={this.deleteproduct} onIncrement={this.addquantity}  onDecrement={this.minusquantity}   />
                        )}
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}
export default Shoppingcart;