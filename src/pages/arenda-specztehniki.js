import ArendaTehnikiIntroV2 from "@/compnents/arenda-tehniki-v2";
import CoBlockServicesV2 from "@/compnents/block-services-v2";
import CoFooterV2 from "@/compnents/footer-v2";
import FormGetConsult from "@/compnents/form-get-consult";
import CoHeaderV2 from "@/compnents/header-v2";
import Head from "next/head";
import { useRef } from "react";

function ArendaSpecztehniki() {
  const formRef = useRef(null);

  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Head>
        <title>Аренда спецтехники в Казахстане</title>
        <meta
          name="description"
          content="Спецтехника используется для перевозки военной, строительной, дорожной, коммунальной, горнодобывающей и сельскохозяйственной техники, негабаритных, сверхтяжелых и нестандартных грузов. Наша компания одна из первых в Казахстане, кто начал предоставлять такую услугу для клиентов."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <CoHeaderV2 whiteText />
        <ArendaTehnikiIntroV2 scrollToForm={scrollToForm} />
        <CoBlockServicesV2 />
        <FormGetConsult formRef={formRef} />
        <CoFooterV2 />
      </main>
    </>
  );
}
export default ArendaSpecztehniki;
