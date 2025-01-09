import Container from '../components/Container';
import Loading from '../components/Loading';
import styles from './LoadingPage.module.css';

function LoadingPage() {
  return (
    <Container className={styles.container}>
      <Loading title='로딩 중입니다...' description='조금만 기다려주세요.' />
    </Container>
  );
}

export default LoadingPage;
