// 此组件定义 应用的布局和内容
import React from 'react';
import './App.css';  // 引入CSS文件


// 负责渲染应用UI
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello, Welcome to My Simple React App!</h1>
        <p>This is a basic example of a React project structure.</p>
      </header>
    </div>
  );
}

//export default 允许导出模块的某个值，其他文件就可以引用这个导出
export default App;
