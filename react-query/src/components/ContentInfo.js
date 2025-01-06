import UserInfo from './UserInfo';
import styles from './ContentInfo.module.css';

function formateDate(timestamp) {
  const fullDate = new Date(timestamp);
  const date = fullDate.getDate();
  const month = fullDate.getMonth() + 1;
  const year = fullDate.getFullYear();
  let hours = fullDate.getHours();
  let minutes = fullDate.getMinutes();
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;

  return `${year}-${month}-${date} ${hours}:${minutes}`;
}

function ContentInfo({ user, updatedTime }) {
  return (
    <div className={styles.info}>
      <UserInfo name={user.name} photo={user.photo} />
      <div className={styles.date}>{formateDate(updatedTime)}</div>
    </div>
  );
}

export default ContentInfo;
