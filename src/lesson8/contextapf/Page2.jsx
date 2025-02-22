import React from 'react'
import Layout from './Layout'
import { createContext } from 'react';

export const Usercontext=createContext();
const user={name:"ahmed"};
function Page2() {
  return (
    <Usercontext.Provider value={user}>
      <Layout/>
    </Usercontext.Provider>
  )
}

export default Page2