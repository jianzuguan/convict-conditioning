import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Chest from './Chest';
import Abs from './Abs';
import Back from './Back';
import Leg from './Leg';
import Spine from './Spine';
import Shoulder from './Shoulder';

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chest/:id" element={<Chest />} />
      <Route path="/abs/:id" element={<Abs />} />
      <Route path="/back/:id" element={<Back />} />
      <Route path="/leg/:id" element={<Leg />} />
      <Route path="/spine/:id" element={<Spine />} />
      <Route path="/shoulder/:id" element={<Shoulder />} />
    </Routes>
  );
}
