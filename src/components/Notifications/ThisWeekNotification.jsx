import user from '../../assets/users/user-1.png';

export default function ThisWeekNotification() {
  return (
    <>
      <div className="px-4 py-3 border-b border-gray-100">
        <h2 className="text-base font-semibold">This Week</h2>
      </div>

      {/* <!-- Multiple Comments Notification --> */}
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
            <span className="font-semibold">tom_artist</span> and{' '}
            <span className="font-semibold">3 others</span> commented on your
            photo.
          </p>
          <p className="text-xs text-gray-500 mt-1">3d</p>
        </div>
        <div className="w-11 h-11 rounded overflow-hidden">
          <img src={user} alt="Post thumbnail" className="post-thumbnail" />
        </div>
      </div>

      {/* <!-- Like on Comment Notification --> */}
      <div className="notification-item flex items-center p-4 border-b border-gray-100">
        <div className="w-11 h-11 rounded-full overflow-hidden mr-3">
          <img
            src={user}
            alt="User avatar"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 mr-3">
          <p className="text-sm">
            <span className="font-semibold">maria_design</span> liked your
            comment: "Love this aesthetic!"
          </p>
          <p className="text-xs text-gray-500 mt-1">6d</p>
        </div>
        <div className="w-11 h-11 rounded overflow-hidden">
          <img src={user} alt="Post thumbnail" className="post-thumbnail" />
        </div>
      </div>

      {/* <!-- Padding at bottom for scroll --> */}
      <div className="h-20"></div>
    </>
  );
}
