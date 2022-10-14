import { Routes, Route } from 'react-router-dom';
import Chest from './Chest';

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/chest" element={<Chest />} />
    </Routes>
  );
}
