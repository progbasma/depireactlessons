import React from 'react'
import Layout from './Layout'
import { createContext } from 'react';

export const Usercontext=createContext();
export const Themecontext=createContext();

const user={name:"ahmed"};
const theme={name:"dark"};
function Page4() {
  return (
    <Themecontext.Provider value={theme}>
    <Usercontext.Provider value={user}>
      <Layout/>
    </Usercontext.Provider>
    </Themecontext.Provider>
  )
}

export default Page4