import Container from '../components/Container';
import Warn from '../components/Warn';
import styles from './ErrorPage.module.css';

function ErrorPage() {
  return (
    <Container className={styles.container}>
      <Warn
        title="에러가 발생했습니다."
        description="잠시 후에 다시 시도해주세요."
      />
    </Container>
  );
}

export default ErrorPage;
