/**
 * useRef
 *   useRef 跟 createRef 类似，都可以用来生成对 DOM 对象的引用
 *
 *   useRef 返回的值传递给组件或者 DOM 的 ref 属性，就可以通过 ref.current 值访问组件或真实的 DOM 节点，从而可以对 DOM 进行一些操作，比如监听事件等等
 *   当然 useRef 远比你想象中的功能更加强大，useRef 的功能有点像类属性，或者说您想要在组件中记录一些值，并且这些值在稍后可以更
 *   利用 useRef 就可以绕过 Capture Value 的特性。可以认为 ref 在所有 Render 过程中保持着唯一引用，因此所有对 ref 的赋值或取值，拿到的都只有一个最终状态，而不会在每个 Render 间存在隔离
 *
 */

import React, { useState, useRef } from 'react'

export default () => {
  const { 0: name, 1: setName} = useState('Nate')
  const nameRef = useRef()
  
  const submitButton = () => setName(nameRef.current.value)

  return (
    <div className="App">
      <p>{name}</p>
      <div>
        <input ref={nameRef} type="text" />
        <button type="button" onClick={submitButton}>
          Submit
        </button>
      </div>
    </div>
  );}