import CoBlockServicesV2 from "@/compnents/block-services-v2";
import CoFooterV2 from "@/compnents/footer-v2";
import FormGetConsult from "@/compnents/form-get-consult";
import CoHeaderV2 from "@/compnents/header-v2";
import MultimodalnyeIntro from "@/compnents/perevozki-multimodalnye";
import MultimodalnyeIntroV2 from "@/compnents/perevozki-multimodalnye-v2";
import Head from "next/head";
import { useRef } from "react";

function MultimodalnyeGruzoperevozki() {
  const formRef = useRef(null);

  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Head>
        <title>
          Мультимодальные перевозки. Китай, Индия, Юговосточная Азия
        </title>
        <meta
          name="description"
          content="Мы осуществляем междунородные мультимодальные перевозки по Восточной Азии, Индии, Пакистану, Ирану и Афганистану. Так же у нас доступны перевозки с Юговосточной Азии, Индонезии, Малайзии, Филлипинов, Австралии и Новой Зеландии "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <CoHeaderV2 whiteText />
        <MultimodalnyeIntroV2 scrollToForm={scrollToForm} />
        <CoBlockServicesV2 />
        <FormGetConsult formRef={formRef} />
        <CoFooterV2 />
      </main>
    </>
  );
}
export default MultimodalnyeGruzoperevozki;
