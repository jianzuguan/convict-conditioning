import { Link, useParams, HashRouter, BrowserRouter } from 'react-router-dom';
import AllRoutes from './routes';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>囚徒健身</h1>

        <ul>
          <li>
            <Link to="/back">引体向上</Link>
          </li>
          <li>
            <Link to="/leg">深蹲</Link>
          </li>
          <li>
            <Link to="/chest">俯卧撑</Link>
          </li>
          <li>
            <Link to="/abs">举腿</Link>
          </li>
          <li>
            <Link to="/spine">下腰</Link>
          </li>
          <li>
            <Link to="/shoulder">倒立撑</Link>
          </li>
        </ul>

        <AllRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
