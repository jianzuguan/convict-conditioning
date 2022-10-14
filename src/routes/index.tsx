import { Routes, Route } from 'react-router-dom';
import Chest from './Chest';
import Abs from './Abs';

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/chest" element={<Chest />} />
      <Route path="/abs" element={<Abs />} />
    </Routes>
  );
}
