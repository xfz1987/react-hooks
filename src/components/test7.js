/**
 * useImperativeHandle
 *   通过 useImperativeHandle 用于让父组件获取子组件内的索引
 *
 * 没什么卵用
 */

import React, { useRef, useEffect, useImperativeHandle, forwardRef } from 'react'

const ChildInputComponent = (props, ref) => {
  const inputRef = useRef(null)

  useImperativeHandle(ref, () => inputRef.current)

  return <input type="text" name="child input" ref={inputRef} />

}

const ChildInput = forwardRef(ChildInputComponent)


export default () => {
  const inputRef = useRef(null)
  
  useEffect(() => {
    inputRef.current.focus()
  }, [])

  return (
    <div>
      <ChildInput ref={inputRef} />
    </div>
  )
}

// 通过这种方式，父组件可以获得子组件的 input 的 DOM 节点