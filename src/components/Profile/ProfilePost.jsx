import { Link } from 'react-router';
import postImageOne from '../../assets/articles/post-1.jpg';
import postImageTwo from '../../assets/articles/post-2.jpg';
import postImageThree from '../../assets/articles/post-3.jpg';
import postImageFour from '../../assets/articles/post-4.jpg';
import postImageFive from '../../assets/articles/post-5.jpg';
import postImageSix from '../../assets/articles/post-6.jpg';

export default function ProfilePost() {
  return (
    <>
      <section>
        <h3 className="font-semibold text-lg mb-4">Posts</h3>
        {/* <!-- Photo Grid --> */}
        <div className="grid grid-cols-3 gap-1">
          {/* <!-- Grid Item 1 --> */}
          <Link to="/post-details">
            <div className="relative">
              <img
                src={postImageOne}
                alt="Post"
                className="w-full grid-image"
              />
            </div>
          </Link>

          {/* <!-- Grid Item 2 --> */}
          <a href="./post-details.html">
            <div className="relative">
              <img
                src={postImageTwo}
                alt="Post"
                className="w-full grid-image"
              />
            </div>
          </a>

          {/* <!-- Grid Item 3 --> */}
          <a href="./post-details.html">
            <div className="relative">
              <img
                src={postImageThree}
                alt="Post"
                className="w-full grid-image"
              />
            </div>
          </a>

          {/* <!-- Grid Item 4 --> */}
          <a href="./post-details.html">
            <div className="relative">
              <img
                src={postImageFour}
                alt="Post"
                className="w-full grid-image"
              />
            </div>
          </a>

          {/* <!-- Grid Item 5 --> */}
          <a href="./post-details.html">
            <div className="relative">
              <img
                src={postImageFive}
                alt="Post"
                className="w-full grid-image"
              />
            </div>
          </a>

          {/* <!-- Grid Item 6 --> */}
          <a href="./post-details.html">
            <div className="relative">
              <img
                src={postImageSix}
                alt="Post"
                className="w-full grid-image"
              />
            </div>
          </a>
        </div>
      </section>
    </>
  );
}
