import CoFooter from "@/compnents/footer";
import CoHeaderV2 from "@/compnents/header-v2";
import CoSubmitApplication from "@/compnents/submit-application";
import TplPage from "@/compnents/tpl-pages";
import MoBlockHeaderH1 from "@/molecules/block-header-h1";
import MoNavLinker from "@/molecules/nav-linker";
import Head from "next/head";

function GruzoperevozkiAlmatyAktobe() {
  return (
    <>
      <Head>
        <title>Грузоперевозки между Алматой и Актобе c Transline</title>
        <meta
          name="description"
          content="Transline предлагает профессиональные грузоперевозки по маршруту Алмата - Актобе. Надежная и быстрая доставка грузов наших клиентов - наш приоритет."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <CoHeaderV2 />
        <div className="tpl-margin-h">
          <MoBlockHeaderH1 text="Грузоперевозки Алматы-Актобе" />
          <MoNavLinker
            text2="Грузоперевозки Алматы-Актобе"
            link2="/gruzoperevozki-almaty-aktobe"
          />
        </div>
        <TplPage
          title="О грузоперевозке по маршруту Алматы-Актобе"
          text1="Компания Transline рада предложить профессиональные услуги по грузоперевозке по маршруту Алматы-Актобе. Мы осуществляем доставку различных грузов, включая сборные и негабаритные грузы, по всему маршруту с высокой степенью надежности и точности."
          text2="Наша компания имеет большой опыт в грузоперевозках и полностью готова обеспечить безопасность и качество перевозки грузов от Алматы до Актобе. Мы предоставляем широкий спектр услуг по грузоперевозке, включая различные виды транспорта и решения для грузов с особыми требованиями."
          text3="Мы понимаем, что для успешной грузоперевозки нужно иметь четкий план и своевременное выполнение. Мы гарантируем нашим клиентам высокий уровень сервиса, эффективность и надежность нашей работы."
          text4="Если вам нужна грузоперевозка по маршруту Алматы-Актобе, обращайтесь к нам в компанию Transline. Наши специалисты окажут всю необходимую помощь и подберут оптимальное решение для вашей грузоперевозки."
        />
        <CoSubmitApplication />
        <CoFooter />
      </main>
    </>
  );
}
export default GruzoperevozkiAlmatyAktobe;
