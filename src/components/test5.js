/**
 * useCallback
 *
 * 在类组件中，我们经常犯下面这样的错误
 * class App {
    render() {
      return <div>
        <SomeComponent style={{ fontSize: 14 }} doSomething={ () => { console.log('do something') }} />
      </div>
    }
  }
  这样写有什么坏处呢？一旦 App 组件的 props 或者状态改变了就会触发重渲染，即使跟 SomeComponent 组件不相关，由于每次 render 都会产生新的 style 和 doSomething，所以会导致 SomeComponent 重新渲染，
  倘若 SomeComponent 是一个大型的组件树，这样的 Virtual Dom 的比较显然是很浪费的，
  解决的办法也很简单，将参数抽离成变量
  const fontSizeStyle = { fontSize: 14 }
  class App {
    doSomething = () => {
      console.log('do something');
    }
    render() {
        return <div>
            <SomeComponent style={fontSizeStyle} doSomething={ this.doSomething }  />
        </div>;
    }
  }
  
  在类组件中，我们还可以通过 this 这个对象来存储函数，
  而在函数组件中没办法进行挂载了。所以函数组件在每次渲染的时候如果有传递函数的话都会重渲染子组件

  function App() {
    const handleClick = () => {
      console.log('Click happened')
    }
    return <SomeComponent onClick={handleClick}>Click Me</SomeComponent>
  }

  使用 useCallback(fn, array),数组中的每一项一旦值或者引用发生改变，useCallback 就会重新返回一个新的记忆函数提供给后面进行渲染
  这样只要子组件继承了 PureComponent 或者使用 React.memo 就可以有效避免不必要的 VDOM 渲染
 */

import React, { useCallback } from 'react'

function SomeComponent({ onClick }) {
  return (
    <div onClick={() => onClick()}>
      click me
    </div>
  )
}

export default () => {
  const memoizedHandleClick = useCallback(() => {
    console.log('Click happened')
  }, []); // 空数组代表无论什么情况下该函数都不会发生改变
  
  return <SomeComponent onClick={memoizedHandleClick}>Click Me</SomeComponent>;
}
