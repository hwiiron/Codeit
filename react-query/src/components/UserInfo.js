import ProfilePhoto from './ProfilePhoto';
import styles from './UserInfo.module.css';

function UserInfo({ name, photo }) {
  return (
    <div className={styles.userInfo}>
      <ProfilePhoto photo={photo} name={name} />
      <div className={styles.userName}>{name}</div>
    </div>
  );
}

export default UserInfo;
