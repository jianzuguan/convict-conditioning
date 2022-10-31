import { Link, HashRouter } from 'react-router-dom';
import AllRoutes from './routes';
import './App.css';

function App() {
  return (
    <HashRouter>
      <div>
        <a href="/convict-conditioning">
          <h1>囚徒健身</h1>
        </a>
        <Link to="/toc">目录</Link>
        <ul>
          <li>
            <Link to="/back/0">引体向上</Link>
          </li>
          <li>
            <Link to="/leg/0">深蹲</Link>
          </li>
          <li>
            <Link to="/chest/0">俯卧撑</Link>
          </li>
          <li>
            <Link to="/abs/0">举腿</Link>
          </li>
          <li>
            <Link to="/spine/0">下腰</Link>
          </li>
          <li>
            <Link to="/shoulder/0">倒立撑</Link>
          </li>
        </ul>

        <AllRoutes />
      </div>
    </HashRouter>
  );
}

export default App;
