import Head from "next/head";
import SertifikatyIntro from "@/compnents/sertifikaty-intro";
import CoHeaderV2 from "@/compnents/header-v2";
import CoFooterV2 from "@/compnents/footer-v2";

export default function Sertifikaty() {
  return (
    <>
      <Head>
        <title>Сертификаты Transline</title>
        <meta name="description" content="Сертификаты нашей компании" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <CoHeaderV2 />
        <SertifikatyIntro />
        <CoFooterV2 />
      </main>
    </>
  );
}
