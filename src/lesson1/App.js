import React, { Component } from 'react';
class App extends Component {
  state = { 
    names:["youssef","ahmed","mohamed"],
    count:2
   
   } 
 
 /* constructor(){
    super();
    this.changecount=this.changecount.bind(this);
   }  */
   
   checknames(){
    return this.state.names.length===0?"empty array":this.state.names.map((name)=><li key={name}>{name}</li>)
   }
   checkcount(){
    return this.state.names.length===0?"text-danger":"text-success"
   }
  
   changecount(){
    
   
  return(()=>{this.setState({count:this.state.count+1})}) 
    
   }

  render() { 
    return (
      <div>
        <ul className={this.checkcount()} style={{"backgroundColor":"lightgray","padding":"10px"}}>
          {this.checknames()}
        </ul>
        <button className='btn btn-primary' onClick={this.changecount()}>click {this.state.count}</button>

      </div>
    );
  }
}
 
export default App;