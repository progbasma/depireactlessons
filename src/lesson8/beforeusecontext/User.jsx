import React from 'react'
import { Themecontext, Usercontext } from './Page3'

function User(props) {
  return (
   
     
    <Themecontext.Consumer >
      
      {(theme)=>(
        <Usercontext.Consumer >
          {(user)=>(
            <>
            <div>{user.name} from context</div>
            <div>{theme.name} from context</div>
            </>
          )} 
        </Usercontext.Consumer>
        
        )} 
    </Themecontext.Consumer>
    
  )
}

export default User