import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// render メソッド
// 1. 第 1 引数に渡された React コンポーネントを DOM にレンダリングす
// 2. 第 2 引数で指定された HTML 要素に上書きする
ReactDOM.render(
  // 厳格モードを有効にする
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // public/index.html の <div id="root"></div> に対応
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
