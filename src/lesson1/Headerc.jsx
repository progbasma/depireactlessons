import React, { Component } from 'react';

class Headerc extends Component {
    state = { 
        name:"basma",
        age:35
     } 
    render() { 
        return (
            <div>
                <h2 className='text-info'>welcome  {this.state.name} in  header component</h2>
            </div>
        );
    }
}
 
export default Headerc;