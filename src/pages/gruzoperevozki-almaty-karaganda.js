import CoFooter from "@/compnents/footer";
import CoHeaderV2 from "@/compnents/header-v2";
import CoSubmitApplication from "@/compnents/submit-application";
import TplPage from "@/compnents/tpl-pages";
import MoBlockHeaderH1 from "@/molecules/block-header-h1";
import MoNavLinker from "@/molecules/nav-linker";
import Head from "next/head";

function GruzoperevozkiAlmatyKaraganda() {
  return (
    <>
      <Head>
        <title>Грузоперевозки между Алматой и Карагандой с Transline</title>
        <meta
          name="description"
          content="Transline предлагает профессиональные грузоперевозки по маршруту Алмата - Караганда. Надежная и быстрая доставка грузов наших клиентов - наш приоритет."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <CoHeaderV2 />
        <div className="tpl-margin-h">
          <MoBlockHeaderH1 text="Грузоперевозки Алматы-Караганда" />
          <MoNavLinker
            text2="Грузоперевозки Алматы-Караганда"
            link2="/gruzoperevozki-almaty-karaganda"
          />
        </div>
        <TplPage
          title="О грузоперевозке по маршруту Алматы - Караганда"
          text1="Мы рады предложить нашим клиентам компанию Transline для грузоперевозок по маршруту Алматы-Караганда."
          text2="Наша компания специализируется на качественных и надежных перевозках грузов, как внутри страны, так и за ее пределами. Мы предлагаем широкий спектр услуг, включая автомобильные, железнодорожные и мультимодальные перевозки."
          text3="Когда дело доходит до грузоперевозок по маршруту Алматы-Караганда, мы можем гарантировать быструю и безопасную доставку вашего груза. Наши опытные водители и профессиональные логисты обеспечивают полную поддержку нашим клиентам на всех этапах перевозки. Мы также обладаем собственным парком грузовиков и вагонов, что позволяет нам контролировать качество наших услуг и обеспечивать своевременную доставку грузов."
          text4="Если вам нужна надежная компания для грузоперевозок по маршруту Алматы-Караганда, обратитесь к нам в компанию Transline. Мы гарантируем быструю, надежную и безопасную доставку ваших грузов."
        />
        <CoSubmitApplication />
        <CoFooter />
      </main>
    </>
  );
}
export default GruzoperevozkiAlmatyKaraganda;
