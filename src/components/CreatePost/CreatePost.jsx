import PostDetails from './PostDetails';
import UploadImage from './UploadImage';

export default function CreatePost() {
  return (
    <>
      <div className="upload-container flex flex-col md:flex-row">
        {/* <!-- Left Side - Image Preview --> */}
        <UploadImage />

        {/* <!-- Right Side - Post Details --> */}
        <PostDetails />
      </div>
    </>
  );
}
