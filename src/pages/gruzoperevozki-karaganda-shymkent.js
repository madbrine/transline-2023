import CoFooter from "@/compnents/footer";
import CoHeaderV2 from "@/compnents/header-v2";
import CoSubmitApplication from "@/compnents/submit-application";
import TplPage from "@/compnents/tpl-pages";
import MoBlockHeaderH1 from "@/molecules/block-header-h1";
import MoNavLinker from "@/molecules/nav-linker";
import Head from "next/head";

function GruzoperevozkiKaragandaShymkent() {
  return (
    <>
      <Head>
        <title>Грузоперевозки между Карагандой и Шымкентом с Transline</title>
        <meta
          name="description"
          content="Transline предлагает профессиональные грузоперевозки по маршруту Караганда-Шымкент . Надежная и быстрая доставка грузов наших клиентов - наш приоритет."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <CoHeaderV2 />
        <div className="tpl-margin-h">
          <MoBlockHeaderH1 text="Грузоперевозки Караганда-Шымкент" />
          <MoNavLinker
            text2="Грузоперевозки Караганда-Шымкент"
            link2="/gruzoperevozki-karaganda-shymkent"
          />
        </div>
        <TplPage
          title="О грузоперевозке по маршруту Караганда-Шымкент"
          text1="Компания Transline рада предложить своим клиентам качественные услуги по грузоперевозке по маршруту Караганда-Шымкент. Мы осуществляем грузоперевозки любой сложности и объема на этом маршруте, используя для этого современный парк транспортных средств и опытных водителей. Наша компания предлагает различные виды транспорта для грузоперевозок, включая фуры, контейнеровозы и платформы."
          text2="Мы понимаем, насколько важно для наших клиентов, чтобы их грузы были доставлены вовремя и в сохранности. Поэтому мы предлагаем максимально комфортные условия для перевозки грузов, обеспечивая надежность и безопасность наших услуг."
          text3="Сотрудничество с компанией Transline – это не только качественная и надежная грузоперевозка, но и индивидуальный подход к каждому клиенту, учет его потребностей и желаний, а также гибкость в условиях сотрудничества. Мы всегда готовы предложить оптимальные решения и наилучшие цены на грузоперевозки по маршруту Караганда-Шымкент."
        />
        <CoSubmitApplication />
        <CoFooter />
      </main>
    </>
  );
}
export default GruzoperevozkiKaragandaShymkent;
