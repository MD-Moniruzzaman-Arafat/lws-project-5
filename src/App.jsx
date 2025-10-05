import { Route, Routes } from 'react-router';
import './App.css';
import Root from './Root/Root';
import PostFeeds from './components/PostFeeds/PostFeeds';
import CreatePostPage from './pages/CreatePostPage';
import HomePage from './pages/HomePage';
import NotificationsPage from './pages/NotificationsPage';
import PostDetailsPage from './pages/PostDetailsPage';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<HomePage />} />
          <Route path="/post-feed" element={<PostFeeds />} />
          <Route path="/create-post" element={<CreatePostPage />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/post-details" element={<PostDetailsPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
