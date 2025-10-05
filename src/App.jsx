import { Route, Routes } from 'react-router';
import './App.css';
import Root from './Root/Root';
import PostFeeds from './components/PostFeeds/PostFeeds';
import CreatePostPage from './pages/CreatePostPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<HomePage />} />
          <Route path="/post-feed" element={<PostFeeds />} />
          <Route path="/create-post" element={<CreatePostPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
