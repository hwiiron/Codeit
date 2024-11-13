import styles from './Label.module.css';

export default function Label({ className = '', children }: any) {
  const classNames = `${styles.label} ${className}`;
  return <label className={classNames}>{children}</label>;
}
