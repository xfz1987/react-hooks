/**
 * useContext 减少组件层级
 *
 * useContext 是 React 帮你封装好的，用来处理多层级传递数据的方式
 * 在以前组件树种，跨层级祖先组件想要给孙子组件传递数据的时候，除了一层层 props 往下透传之外，我们还可以使用 React Context API 来帮我们做这件事
 *
 * 
 */

import React, { useState, useEffect, createContext, useContext, Context } from 'react'

const colorContext = createContext('gray')

function Bar() {
  const color = useContext(colorContext)
  return <div>{color}</div>
}

function Foo() {
  return <Bar />
}

const CurrentUser = createContext()

function HeaderBar() {
  const user = useContext(CurrentUser) || {}
  
  return (
    <header>
      Welcome back, {user.name}!
    </header>  
  )
}

export default () => {
  const { 0: user, 1: setUser } = useState()
  
  const getUser = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ name: 'xfz', age: 30 })
      }, 2000)
    })
  }

  useEffect(() => {
    async function fetchData() {
      const data = await getUser()
      setUser(data)
    }
    fetchData()
  }, [])
  
  return (
    <div>
      <colorContext.Provider value={'red'}>
        <Foo />
      </colorContext.Provider>
      <hr/>
      {/*<CurrentUser.Provider value={{ name: 'xfz', age: 30 }}>*/}
      <CurrentUser.Provider value={user}>
        <HeaderBar />
      </CurrentUser.Provider>
    </div>
  )
}