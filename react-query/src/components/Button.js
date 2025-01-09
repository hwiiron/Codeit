import classNames from 'classnames';
import styles from './Button.module.css';

function Button({ className, ...restProps }) {
  return (
    <button {...restProps} className={classNames(styles.button, className)} />
  );
}

export default Button;
