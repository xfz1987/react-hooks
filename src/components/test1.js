/**
 * useState 保存组件状态
 * 在类组件中，我们使用 this.state 来保存组件状态，并对其修改触发组件重新渲染
 * 而在 hooks 中，通过 useState 来帮我们保存组件的状态
 * 
 * ƒunction useState(initialState) {
    var dispatcher = resolveDispatcher();
    return dispatcher.useState(initialState);
   }
 * useState是react自带的一个hook函数，它的作用就是用来声明状态变量。
 * useState这个函数接收的参数是我们的状态初始值（initial state），
 * 它返回了一个数组，这个数组的第[0]项是当前当前的状态值，第[1]项是可以改变状态值的方法函数
 * useState 返回数组的第二个参数(setter)，可传任意类型的变量，或者一个接收 state 旧值的 function，其返回值作为 state 新值
 *
 * react规定我们必须把hooks写在函数的最外层，不能写在ifelse等条件语句当中，来确保hooks的执行顺序一致
 */
import React, { useState } from 'react'

export default () => {
  // const [count, setCount] = useState(0)
  // 数组解构性能开销很大，建议使用下标或对象解构
  // const { 0: count, 1: setCount } = useState(0)
  // const { 0: fruit, 1: setFruit } = useState('banana')
  // const { 0: todos, 1: setTodos } = useState([{ text: 'learn Hooks' }])
 

  const { 0: obj, 1: setObject } = useState({
    count: 0,
    name: 'alife'
  })

  const { 0: todos, 1: setTodos } = useState([{ text: 'learn Hooks' }])
  

  const changeTodo = () => {
    const newTodo = { text: 'Use Hooks' }
    setTodos([...todos, newTodo])
  }
  
  return (
    <div>
      <p>Count: { obj.count }</p>
      <button onClick={() => setObject({...obj, count: obj.count + 1})}>+</button>
      <button onClick={() => setObject({...obj, count: obj.count - 1})}>-</button>
      <hr/>
      <ul>
      {todos.map((todo,index) => <li key={index}>{todo.text}</li>)}
      </ul>
      <button onClick={() => changeTodo()}>Click me</button>
    </div>
  )
}

