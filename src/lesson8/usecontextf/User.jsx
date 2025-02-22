import React, { useContext } from 'react'
import { Themecontext, Usercontext } from './Page4'


function User() {
  const user=useContext(Usercontext);
  const theme=useContext(Themecontext);
  return (
           
            <>
            <div>{user.name} from use context</div>
            <div>{theme.name} from use context</div>
            </>
        
       
    
  )
}

export default User