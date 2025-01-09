import classNames from 'classnames';
import styles from './Loading.module.css';

function Loading({ className, variant = '', title = '', description = '' }) {
  return (
    <div className={classNames(styles.loading, styles[variant], className)}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
    </div>
  );
}

export default Loading;
