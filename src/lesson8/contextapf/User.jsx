import React from 'react'
import { Usercontext } from './Page2'

function User(props) {
  return (
    <Usercontext.Consumer >
      {(user)=>(<div>{user.name} from context</div>)} 
    </Usercontext.Consumer>
  )
}

export default User