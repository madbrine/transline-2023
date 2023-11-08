import CoFooter from "@/compnents/footer";
import CoSubmitApplication from "@/compnents/submit-application";
import Head from "next/head";
import CoHeaderV2 from "@/compnents/header-v2";
import AvtoperevozkiIntroV2 from "@/compnents/perevozki-avto-v2";
import FormGetConsult from "@/compnents/form-get-consult";
import CoBlockServicesV2 from "@/compnents/block-services-v2";
import { useRef } from "react";
import CoFooterV2 from "@/compnents/footer-v2";

function AvtomobilnyeGruzoperevozki() {
  const formRef = useRef(null);

  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Head>
        <title>Автомобильные грузоперевозки по Казахстану и СНГ</title>
        <meta
          name="description"
          content="Автомобильные грузоперевозки по Казахстану и СНГ. У нас самый большой автопарк в Центральной Азии. Мы так же осуществляем авто перевозки с Пакистана Ирана и Афганистана"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <CoHeaderV2 whiteText />
        <AvtoperevozkiIntroV2 scrollToForm={scrollToForm} />
        <CoBlockServicesV2 />
        <FormGetConsult formRef={formRef} />
        <CoFooterV2 />
      </main>
    </>
  );
}
export default AvtomobilnyeGruzoperevozki;
