import PostDetailsAction from '../components/PostDetails/PostDetailsAction';
import PostDetailsAddComment from '../components/PostDetails/PostDetailsAddComment';
import PostDetailsComments from '../components/PostDetails/PostDetailsComments';
import PostDetailsHeader from '../components/PostDetails/PostDetailsHeader';
import PostDetailsImage from '../components/PostDetails/PostDetailsImage';

export default function PostDetailsPage() {
  return (
    <>
      <div className="max-w-6xl w-full py-10 ml-[var(--sidebar-width)] px-4">
        {/* <!-- Post Details Section --> */}
        <div className="bg-white border rounded-sm overflow-hidden mb-8 mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row">
            {/* <!-- Left Side - Post Image --> */}
            <PostDetailsImage />
            {/* <!-- Right Side - Post Info and Comments --> */}
            <div className="w-full md:w-1/2 flex flex-col">
              {/* <!-- Post Header --> */}
              <PostDetailsHeader />

              {/* <!-- Comments Section --> */}
              <PostDetailsComments />

              {/* <!-- Post Actions --> */}
              <PostDetailsAction />

              {/* <!-- Add Comment --> */}
              <PostDetailsAddComment />
            </div>
          </div>
        </div>

        {/* <!-- More Posts Section --> */}
        <div className="mb-8 mx-auto max-w-5xl">
          <h2 className="text-sm text-gray-500 font-normal mb-4">
            More posts from{' '}
            <span className="font-semibold text-black">Learn with Sumit</span>
          </h2>

          <div className="grid grid-cols-3 gap-1">
            {/* <!-- Grid Item 1 --> */}
            <a href="./post-details.html">
              <div className="relative">
                <img
                  src="./assets/articles/post-2.jpg"
                  alt="Grid image"
                  className="w-full grid-image"
                />
              </div>
            </a>

            {/* <!-- Grid Item 2 --> */}
            <a href="./post-details.html">
              <div className="relative">
                <img
                  src="./assets/articles/post-3.jpg"
                  alt="Grid image"
                  className="w-full grid-image"
                />
              </div>
            </a>

            {/* <!-- Grid Item 3 --> */}
            <a href="./post-details.html">
              <div className="relative">
                <img
                  src="./assets/articles/post-4.jpg"
                  alt="Grid image"
                  className="w-full grid-image"
                />
              </div>
            </a>

            {/* <!-- Grid Item 4 --> */}
            <a href="./post-details.html">
              <div className="relative">
                <img
                  src="./assets/articles/post-5.jpg"
                  alt="Grid image"
                  className="w-full grid-image"
                />
              </div>
            </a>

            {/* <!-- Grid Item 5 --> */}
            <a href="./post-details.html">
              <div className="relative">
                <img
                  src="./assets/articles/post-6.jpg"
                  alt="Grid image"
                  className="w-full grid-image"
                />
              </div>
            </a>

            {/* <!-- Grid Item 6 --> */}
            <a href="./post-details.html">
              <div className="relative">
                <img
                  src="./assets/articles/post-7.jpg"
                  alt="Grid image"
                  className="w-full grid-image"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
