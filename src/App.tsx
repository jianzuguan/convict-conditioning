import { Routes, Route, Link, useParams, HashRouter } from 'react-router-dom';
import AllRoutes from './routes';
import './App.css';

function App() {
  return (
    <HashRouter>
      <div>
        <h1>囚徒健身</h1>

        <ul>
          <li>
            <Link to="/chest">俯卧撑</Link>
          </li>
          <li>
            <Link to="/leg">深蹲</Link>
          </li>
          <li>
            <Link to="/back">引体向上</Link>
          </li>
          <li>
            <Link to="/abs">举腿</Link>
          </li>
          <li>
            <Link to="/erector-spinae">下腰</Link>
          </li>
          <li>
            <Link to="/shoulder">倒立撑</Link>
          </li>
        </ul>

        <AllRoutes />
      </div>
    </HashRouter>
  );
}

function Child() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { id } = useParams();

  return (
    <div>
      <h3>ID: {id}</h3>
    </div>
  );
}

export default App;
