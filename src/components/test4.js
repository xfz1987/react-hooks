/**
 * useReducer
 *   这个 Hooks 在使用上几乎跟 Redux/React-Redux 一模一样，唯一缺少的就是无法使用 redux 提供的中间件
 *   
 *   useReducer之所以没有采用Redux的逻辑是因为React认为state的默认值可能是来自于函数组件的props
 *   function Example({initialState = 0}) {
        const [state, dispatch] = useReducer(reducer, { count: initialState });
        // 省略...
     }

     第三个参数initialization是用来初始化状态，当useReducer初始化状态时，会将第二个参数initialState传递initialization函数，
     initialState函数返回的值就是state的初始状态，这也就允许在reducer外抽象出一个函数专门负责计算state的初始状态。例如:
     const initialization = (initialState) => ({ count: initialState })

     function Example({initialState = 0}) {
       const [state, dispatch] = useReducer(reducer, initialState, initialization);
       // 省略...
     }
 */
import React, { useReducer } from 'react'

const initialState = { count: 0 }

// reducer(state, action)
const reducer = ({ count }, { type, payload }) => {
  switch (type) {
    case 'increment':
      return { count: count + payload }
    case 'decrement':
      return { count: count - payload }
    default:
      throw new Error()
  }
}

export default () => {
  const { 0: state, 1: dispatch } = useReducer(reducer, initialState)
  
  return (
    <>
      Count: {state.count} <br />
      <button onClick={() => dispatch({ type: 'increment', payload: 5 })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement', payload: 5 })}>-</button>
    </>
  )
}


// demo
// const TodosDispatch = React.createContext(null);

// function TodosApp() {
//   // Tip: `dispatch` won't change between re-renders
//   const [todos, dispatch] = useReducer(todosReducer, initialState);

//   return (
//     <TodosDispatch.Provider value={dispatch}>
//       <DeepTree todos={todos} />
//     </TodosDispatch.Provider>
//   );
// }