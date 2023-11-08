import CoBlockServicesV2 from "@/compnents/block-services-v2";
import CoFooterV2 from "@/compnents/footer-v2";
import FormGetConsult from "@/compnents/form-get-consult";
import CoHeaderV2 from "@/compnents/header-v2";
import NegabaritnyeIntroV2 from "@/compnents/perevozki-negabaritnye-v2";
import Head from "next/head";
import { useRef } from "react";

function NegabaritnyeGruzoperevozki() {
  const formRef = useRef(null);

  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Head>
        <title>Перевозка негабаритных грузов по Казахстану и СНГ</title>
        <meta
          name="description"
          content="Специализированная логистическая компания предлагает профессиональные решения для перевозки негабаритных грузов в Казахстане и СНГ. Наш опыт и экспертиза позволяют эффективно организовать перевозку грузов любых размеров и характеристик, обеспечивая их безопасность и надежность доставки."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <CoHeaderV2 whiteText />
        <NegabaritnyeIntroV2 scrollToForm={scrollToForm} />
        <CoBlockServicesV2 />
        <FormGetConsult formRef={formRef} />
        <CoFooterV2 />
      </main>
    </>
  );
}
export default NegabaritnyeGruzoperevozki;
