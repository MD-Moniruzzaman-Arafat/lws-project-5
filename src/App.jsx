import { Route, Routes } from 'react-router';
import './App.css';
import Root from './Root/Root';
import HomePage from './pages/HomePage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
