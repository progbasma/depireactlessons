import React, { Component } from 'react';
class Footerc extends Component {
    state = { 
        name:"youssef"
     } 
    render() { 
        return (
            <h2> welcome { this.state.name} in Footer</h2>
        );
    }
}
 
export default Footerc;

