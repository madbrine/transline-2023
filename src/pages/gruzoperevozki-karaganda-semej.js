import CoFooter from "@/compnents/footer";
import CoHeaderV2 from "@/compnents/header-v2";
import CoSubmitApplication from "@/compnents/submit-application";
import TplPage from "@/compnents/tpl-pages";
import MoBlockHeaderH1 from "@/molecules/block-header-h1";
import MoNavLinker from "@/molecules/nav-linker";
import Head from "next/head";

function GruzoperevozkiKaragandaSemej() {
  return (
    <>
      <Head>
        <title>Грузоперевозки между Карагандой и Семей с Transline</title>
        <meta
          name="description"
          content="Transline предлагает профессиональные грузоперевозки по маршруту Караганда-Семей. Надежная и быстрая доставка грузов наших клиентов - наш приоритет."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <CoHeaderV2 />
        <div className="tpl-margin-h">
          <MoBlockHeaderH1 text="Грузоперевозки Караганда-Семей" />
          <MoNavLinker
            text2="Грузоперевозки Караганда-Семей"
            link2="/gruzoperevozki-karaganda-semej"
          />
        </div>
        <TplPage
          title="О грузоперевозке по маршруту Караганда-Семей"
          text1="Компания Transline рада предложить своим клиентам услуги по грузоперевозке по маршруту Караганда-Семей. Этот маршрут является одним из наиболее востребованных среди наших клиентов, поскольку он связывает два важных города Казахстана, расположенных на востоке страны."
          text2="Мы осуществляем грузоперевозки любой сложности и объема на данном маршруте, используя для этого современный парк транспортных средств и опытных водителей. Предоставляются различные виды транспорта для грузоперевозок, включая фуры, контейнеровозы и платформы."
          text3="Наша компания понимает, насколько важно для наших клиентов, чтобы их грузы были доставлены вовремя и в сохранности. Поэтому мы предлагаем максимально комфортные условия для перевозки грузов, обеспечивая надежность и безопасность наших услуг."
          text4="Сотрудничество с компанией Transline – это не только качественная и надежная грузоперевозка, но и индивидуальный подход к каждому клиенту, учет его потребностей и желаний, а также гибкость в условиях сотрудничества."
        />
        <CoSubmitApplication />
        <CoFooter />
      </main>
    </>
  );
}
export default GruzoperevozkiKaragandaSemej;
