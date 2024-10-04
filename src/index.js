// 应用的入口文件，它将 App.js 组件挂载到 index.html 中的 div 上
// React DOM 的 render 方法将 App 组件渲染到 root 元素上。
// JSX（JavaScript XML）在底层会被转换成 React.createElement 调用，因此需要在作用域中包含 React 库。
import React from 'react'; 
import ReactDOM from 'react-dom/client';
import App from './App';



// ReactDOM.createRoot API
// ReactDOM.createRoot 创建了一个 React 组件树的根节点
// 然后使用 root.render 来渲染组件
const root = ReactDOM.createRoot(document.getElementById('root'));

// 调用render 方法。该方法负责将 React 组件渲染到 DOM 中。
root.render(
  // 包装组件
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// react 中根节点是树的最顶层节点，通常是第一个被渲染的组件，这个组件通常是 App 组件
// 所有其他组件都是从这个根组件派生出来的