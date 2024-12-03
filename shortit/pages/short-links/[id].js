import Head from 'next/head';
import ShortLinkForm, { ShortLinkFormType } from '@/components/ShortLinkForm';
import styles from '@/styles/ShortLinkEditPage.module.css';

export default function ShortLinkEditPage() {
  return (
    <>
      <Head>
        <title>주소 수정하기 - Shortit</title>
      </Head>
      <div className={styles.page}>
        <h1 className={styles.title}>수정하기</h1>
        <ShortLinkForm type={ShortLinkFormType.Edit} />
      </div>
    </>
  );
}
