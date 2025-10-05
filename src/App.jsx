import { Route, Routes } from 'react-router';
import './App.css';
import Root from './Root/Root';
import PostFeeds from './components/PostFeeds/PostFeeds';
import CreatePostPage from './pages/CreatePostPage';
import EditProfilePage from './pages/EditProfilePage';
import HomePage from './pages/HomePage';
import NotificationsPage from './pages/NotificationsPage';
import PostDetailsPage from './pages/PostDetailsPage';
import ProfilePage from './pages/ProfilePage';
import RegisterPage from './pages/RegisterPage';

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
          <Route path="/edit-profile" element={<EditProfilePage />} />
        </Route>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<RegisterPage />} />
      </Routes>
    </>
  );
}

export default App;
