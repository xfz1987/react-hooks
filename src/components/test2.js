/**
 * useEffect 处理副作用
 * 似乎有个 useState 后，函数组件也可以拥有自己的状态了，但仅仅是这样完全不够
 *
 * 函数组件能保存状态，但是对于异步请求，副作用的操作还是无能为力，
 * 所以 React 提供了 useEffect 来帮助开发者处理函数组件的副作用
 *
 *
 * useEffect 类似于 componentDidMount and componentDidUpdate
 */

// import React from 'react'

// export default class App extends React.Component {
//   state = {
//     count: 1
//   }

//   componentDidMount() {
//     const { count } = this.state
//     document.title = "componentDidMount" + count
//     this.timer = setInterval(() => {
//       this.setState(({ count }) => ({
//         count: count + 1
//       }))
//     }, 1000)
//   }
//   componentDidUpdate() {
//     const { count } = this.state
//     document.title = "componentDidMount" + count
//   }
//   componentWillUnmount() {
//     document.title = "componentWillUnmount"
//     clearInterval(this.timer)
//   }
//   render() {
//     const { count } = this.state
//     return (
//       <div>
//         Count:{count}
//         <button onClick={() => clearInterval(this.timer)}>clear</button>
//       </div>
//     )
//   }}


/**
 * 一些重复的功能开发者需要在 componentDidMount 和 componentDidUpdate 重复编写，
 * 而如果使用 useEffect 则完全不一样
 *
 * useEffect 第一个参数传递函数，可以用来做一些副作用比如异步请求，修改外部参数等行为，
 * 而第二个参数是个数组，如果数组中的值才会触发 useEffect 第一个参数中的函数
 *
 * 如果有返回值，则在组件销毁或者调用函数前调用
 *
 * 比如第一个 useEffect 中，理解起来就是一旦 count 值发生改变，则修改 documen.title 
 * 而第二个 useEffect 中数组没有传值，代表不监听任何参数变化，即只有在组件初始化或销毁的时候才会触发，
 * 用来代替 componentDidMount 和 componentWillUnmount
 *
 * 与 componentDidAmount 和 componentDidUpdate 不同之处是，effect 函数触发时间为在浏览器完成渲染之后。 
 * 如果需要在渲染之前触发，需要使用 useLayoutEffect
 *
 * 第二个参数 array 作为有条件触发情况时的条件限制
 *   如果不传，则每次 componentDidUpdate 时都会先触发 returnFunction（如果存在），再触发 effect。
 *   如果为空数组[]，componentDidUpdate 时不会触发 returnFunction 和 effect。
 *   如果只需要在指定变量变更时触发 returnFunction 和 effect，将该变量放入数组。
 *
 * 基于这个强大 Hooks，我们可以模拟封装出其他生命周期函数，比如 componentDidUpdate
 *
 * function useUpdate(fn) {
    // useRef 创建一个引用
    const mounting = useRef(true);
    useEffect(() => {
      if (mounting.current) {
        mounting.current = false;
      } else {
        fn();
      }
    });
  }
 */

import React, { useState, useEffect } from 'react'

// react规定我们必须把hooks写在函数的最外层，不能写在ifelse等条件语句当中，来确保hooks的执行顺序一致
let timer = null

export default () => {
  const { 0: count, 1: setCount } = useState(0)
  
  useEffect(() => {
    document.title = `componentDidMountcount: ${count}`
  }, [count])
  
  useEffect(() => {
    timer = setInterval(() => {
      // 可传任意类型的变量，或者一个接收 state 旧值的 function，其返回值作为 state 新值
      setCount(prevCount => prevCount + 1)
    }, 1000)

    return () => {
      document.title = 'componentWillUnmount'
      clearInterval(timer)
    }
  }, [])
  
  return (
    <div>
      Count:{count}
      <button onClick={() => clearInterval(timer)}>clear</button>
    </div>
  )
}
