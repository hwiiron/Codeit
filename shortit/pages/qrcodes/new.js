import Head from 'next/head';
import QRCodeForm from '@/components/QRCodeForm';
import styles from '@/styles/QRCodeCreatePage.module.css';

export default function QRCodeCreatePage() {
  return (
    <>
      <Head>
        <title>새 QRCode 추가 - Shortit</title>
      </Head>
      <div className={styles.page}>
        <h1 className={styles.title}>새 QRCode 추가</h1>
        <QRCodeForm />
      </div>
    </>
  );
}
