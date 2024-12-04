import Head from "next/head";
import QRCodeForm from "@/components/QRCodeForm";
import styles from "@/styles/QRCodeCreatePage.module.css";
import { useRouter } from "next/router";
import axios from "@/lib/axios";

export default function QRCodeCreatePage() {
  const router = useRouter();

  async function handleSubmit(values) {
    await axios.post("/qrcodes/", values);
    router.push("/qrcodes/");
  }

  return (
    <>
      <Head>
        <title>새 QRCode 추가 - Shortit</title>
      </Head>
      <div className={styles.page}>
        <h1 className={styles.title}>새 QRCode 추가</h1>
        <QRCodeForm onSubmit={handleSubmit} />
      </div>
    </>
  );
}
