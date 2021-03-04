import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Link, Route } from 'wouter';

const App = () => (
  <div>
    <h1>demo-span</h1>

    <div>
      <Link href="/">
        <a href="/">首页</a>
      </Link>
      <Link href="/about">
        <a href="/about">关于</a>
      </Link>
    </div>

    <Route path="/">
      <h2>首页</h2>
    </Route>

    <Route path="/about">
      <h2>关于</h2>
    </Route>
  </div>
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
