import NotificationHeader from './NotificationHeader';
import ThisWeekNotification from './ThisWeekNotification';
import TodayNotification from './TodayNotification';
import YesterdayNotification from './YesterdayNotification';

export default function Notifications() {
  return (
    <>
      <div className="notifications-container">
        <NotificationHeader />
        <div className="notifications-list">
          <TodayNotification />
          <YesterdayNotification />
          <ThisWeekNotification />
        </div>
      </div>
    </>
  );
}
