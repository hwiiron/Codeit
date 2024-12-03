import Head from 'next/head';
import QRCodeList from '@/components/QRCodeList';
import Button from '@/components/Button';
import Link from '@/components/Link';
import styles from '@/styles/QRCodeListPage.module.css';

export default function QRCodeListPage() {
  const qrCodes = [];

  return (
    <>
      <Head>
        <title>QRCode 만들기 - Shortit</title>
      </Head>
      <div className={styles.page}>
        <header className={styles.header}>
          <h1 className={styles.title}>QRCode 만들기</h1>
          <Button as={Link} href="/qrcodes/new">
            새로 만들기
          </Button>
        </header>
        <QRCodeList items={qrCodes} />
      </div>
    </>
  );
}
