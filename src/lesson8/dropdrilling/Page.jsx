import React from 'react'
import Layout from './Layout'

function Page() {
    const user={name:"ahmed"};
  return (
    <Layout username={user.name}/>
  )
}

export default Page