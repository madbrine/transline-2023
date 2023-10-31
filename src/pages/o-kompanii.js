import CoAboutCompanyScreen from "@/compnents/about-company-screen";
import CoAboutCompanyScreenV2 from "@/compnents/about-company-screen-v2";
import CoFooter from "@/compnents/footer";
import CoHeader from "@/compnents/header";
import CoHeaderV2 from "@/compnents/header-v2";
import Head from "next/head";

function OKompanii() {
  return (
    <>
      <Head>
        <title>Крупнейшая логистическая компания Центральной Азии</title>
        <meta name="description" content="О компании" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <CoHeaderV2 />
        <CoAboutCompanyScreenV2 />
        <CoFooter />
      </main>
    </>
  );
}
export default OKompanii;
