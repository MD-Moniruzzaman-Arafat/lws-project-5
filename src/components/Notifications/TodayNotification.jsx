import user from '../../assets/users/user-1.png';

export default function TodayNotification() {
  return (
    <>
      <div className="px-4 py-3 border-b border-gray-100">
        <h2 className="text-base font-semibold">Today</h2>
      </div>

      {/* <!-- Like Notification --> */}
      <div className="notification-item flex items-center p-4 border-b border-gray-100">
        <div className="relative">
          <div className="w-11 h-11 rounded-full overflow-hidden mr-3">
            <img
              src={user}
              alt="User avatar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="flex-1 mr-3">
          <p className="text-sm">
            <span className="font-semibold">john_doe</span> liked your photo.
          </p>
          <p className="text-xs text-gray-500 mt-1">2m</p>
        </div>
        <div className="w-11 h-11 rounded overflow-hidden">
          <img src={user} alt="Post thumbnail" className="post-thumbnail" />
        </div>
      </div>

      {/* <!-- Comment Notification --> */}
      <div className="notification-item flex items-center p-4 border-b border-gray-100">
        <div className="relative">
          <div className="w-11 h-11 rounded-full overflow-hidden mr-3">
            <img
              src={user}
              alt="User avatar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="flex-1 mr-3">
          <p className="text-sm">
            <span className="font-semibold">sarah_wilson</span> commented:
            "Amazing shot! 🔥"
          </p>
          <p className="text-xs text-gray-500 mt-1">5m</p>
        </div>
        <div className="w-11 h-11 rounded overflow-hidden">
          <img src={user} alt="Post thumbnail" className="post-thumbnail" />
        </div>
      </div>

      {/* <!-- Multiple Likes Notification --> */}
      <div className="notification-item flex items-center p-4 border-b border-gray-100">
        <div className="relative mr-3">
          <div className="w-11 h-11 rounded-full overflow-hidden">
            <img
              src={user}
              alt="User avatar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="flex-1 mr-3">
          <p className="text-sm">
            <span className="font-semibold">emma_jones</span> liked your photo.
          </p>
          <p className="text-xs text-gray-500 mt-1">1h</p>
        </div>
        <div className="w-11 h-11 rounded overflow-hidden">
          <img src={user} alt="Post thumbnail" className="post-thumbnail" />
        </div>
      </div>
    </>
  );
}
