import React from 'react'
import { Route, Switch, Link } from 'react-router-dom'

import Test1 from './components/test1.js'
import Test2 from './components/test2.js'
import Test3 from './components/test3.js'
import Test4 from './components/test4.js'
import Test5 from './components/test5.js'
import Test6 from './components/test6.js'
import Test7 from './components/test7.js'
import Test8 from './components/test8.js'

export default () => (
  <div>
    <div className="nav">
      <Link to="/test1">useState 保存组件状态</Link>&nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to="/test2">useEffect 处理副作用</Link>&nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to="/test3">useContext 减少组件层级</Link>&nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to="/test4">useReducer</Link>&nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to="/test5">useCallback 记忆函数</Link>&nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to="/test6">useRef 保存引用值</Link>&nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to="/test7">useImperativeHandle 透传 Ref</Link>&nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to="/test8">useLayoutEffect 同步执行副作用</Link>&nbsp;&nbsp;|&nbsp;&nbsp;
    </div>
    <Switch>
      <Route path="/test1" component={Test1} />
      <Route path="/test2" component={Test2} />
      <Route path="/test3" component={Test3} />
      <Route path="/test4" component={Test4} />
      <Route path="/test5" component={Test5} />
      <Route path="/test6" component={Test6} />
      <Route path="/test7" component={Test7} />
      <Route path="/test8" component={Test8} />
    </Switch>
  </div>
)