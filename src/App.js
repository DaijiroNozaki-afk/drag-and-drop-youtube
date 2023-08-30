import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DragAndDrop from './pages/DragAndDrop';
import VerticalList from './pages/VerticalList';
import AppLayout from './components/AppLayout';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route path="draganddrop" element={<DragAndDrop />} />
            <Route path="verticallist" element={<VerticalList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
