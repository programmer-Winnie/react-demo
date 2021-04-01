import { BrowserRouter as Router, Link, Route, RouteComponentProps } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* 使用 Link 组件来跳转 */}
      <Router>
        <div>
          <Link to="/"> 首页 </Link>
          <Link to="/news"> 新闻页 </Link>
          <Link to="/about"> 介绍页 </Link>
        </div>
        <Route path="/about" component={About} />
        <Route path="/custom" component={Custom} />
      </Router>
    </div>
  );
}

function About() {
  return (<div>关于页</div>)
}

function Custom() {
  return (<div>自定义页面</div>)
}

export default App;
