import { Routes, Route } from 'react-router-dom';
import Contents from '../components/Contents';
import Home from './Home';
import Chest from '../data/Chest.json';
import Abs from '../data/Abs.json';
import Back from '../data/Back.json';
import Leg from '../data/Leg.json';
import Spine from '../data/Spine.json';
import Shoulder from '../data/Shoulder.json';

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/chest/:id"
        element={
          <div>
            <h1>俯卧撑! 锻炼胸肌和肱三头肌</h1>
            <Contents contents={Chest} />
          </div>
        }
      />
      <Route
        path="/abs/:id"
        element={
          <div>
            <h1>举腿! 锻炼腹肌</h1>
            <Contents contents={Abs} />
          </div>
        }
      />
      <Route
        path="/back/:id"
        element={
          <div>
            <h1>引体! 锻炼背部</h1>
            <Contents contents={Back} />
          </div>
        }
      />
      <Route
        path="/leg/:id"
        element={
          <div>
            <h1>深蹲! 锻炼大腿</h1>
            <Contents contents={Leg} />
          </div>
        }
      />
      <Route
        path="/spine/:id"
        element={
          <div>
            <h1>下腰! 锻炼脊椎</h1>
            <Contents contents={Spine} />
          </div>
        }
      />
      <Route
        path="/shoulder/:id"
        element={
          <div>
            <h1>倒立! 锻炼肩膀</h1>
            <Contents contents={Shoulder} />
          </div>
        }
      />
    </Routes>
  );
}
