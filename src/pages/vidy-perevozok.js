import CoFooter from "@/compnents/footer";
import CoHeaderV2 from "@/compnents/header-v2";
import ServicesIntro from "@/compnents/services-intro";
import Head from "next/head";

function VidyPerevozok() {
  return (
    <>
      <Head>
        <title>Услуги Transline</title>
        <meta name="description" content="Услуги и виды перевозок" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <CoHeaderV2 />
        <ServicesIntro />
        <CoFooter />
      </main>
    </>
  );
}
export default VidyPerevozok;
