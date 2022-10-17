import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Chest from './Chest';
import Abs from './Abs';
import Back from './Back';
import Leg from './Leg';
import ErectorSpinae from './ErectorSpinae';

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chest" element={<Chest />} />
      <Route path="/abs" element={<Abs />} />
      <Route path="/back" element={<Back />} />
      <Route path="/leg" element={<Leg />} />
      <Route path="/erector-spinae" element={<ErectorSpinae />} />
    </Routes>
  );
}
