import user from '../../assets/users/user-1.png';

export default function YesterdayNotification() {
  return (
    <>
      <div className="px-4 py-3 border-b border-gray-100">
        <h2 className="text-base font-semibold">Yesterday</h2>
      </div>

      {/* <!-- Story Like Notification --> */}
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
            <span className="font-semibold">lisa_travel</span> liked your story.
          </p>
          <p className="text-xs text-gray-500 mt-1">1d</p>
        </div>
        <div className="w-11 h-11 rounded overflow-hidden border-2 border-gray-300">
          <img
            src={user}
            alt="Story thumbnail"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* <!-- Comment Reply Notification --> */}
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
            <span className="font-semibold">anna_fitness</span> replied to your
            comment: "Thanks for the tip!"
          </p>
          <p className="text-xs text-gray-500 mt-1">1d</p>
        </div>
        <div className="w-11 h-11 rounded overflow-hidden">
          <img src={user} alt="Post thumbnail" className="post-thumbnail" />
        </div>
      </div>
    </>
  );
}
