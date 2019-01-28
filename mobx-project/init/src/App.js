/**
 * 1.我是mobx的页面呢
 */
import React, { Component } from 'react';
import logo from './logo.svg';
// 引入装饰器
import {observer,inject} from 'mobx-react';
// inject 获取组件的数据 注入到里面，如果有多个，把模块的名字加到后面
// 这里面就要下载装饰器
@inject('count')
@observer
import './App.css';

class App extends Component {
  mounted() {
      console.log(this.count,'----打印count')
  },
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
