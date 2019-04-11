import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './app.js'

render(
  <Router>
    <App />
  </Router>,
  document.getElementById('app')
)

if (module.hot) {
  module.hot.dispose(function () {
    // 模块即将被替换时
    console.log('module will be replaced')
  })

  module.hot.accept(function () {
    // 模块或其依赖项之一刚刚更新时
    console.log('module update')
  })
}