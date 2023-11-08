import CoFooter from "@/compnents/footer";
import CoHeaderV2 from "@/compnents/header-v2";
import CoSubmitApplication from "@/compnents/submit-application";
import TplPage from "@/compnents/tpl-pages";
import MoBlockHeaderH1 from "@/molecules/block-header-h1";
import MoNavLinker from "@/molecules/nav-linker";
import Head from "next/head";

function GruzoperevozkiAlmatyTaraz() {
  return (
    <>
      <Head>
        <title>Грузоперевозки между Алматой и Таразом с Transline</title>
        <meta
          name="description"
          content="Transline предлагает профессиональные грузоперевозки по маршруту Алмата - Тараз. Надежная и быстрая доставка грузов наших клиентов - наш приоритет."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <CoHeaderV2 />
        <div className="tpl-margin-h">
          <MoBlockHeaderH1 text="Грузоперевозки Алматы-Тараз" />
          <MoNavLinker
            text2="Грузоперевозки Алматы-Тараз"
            link2="/gruzoperevozki-almaty-taraz"
          />
        </div>
        <TplPage
          title="О грузоперевозке по маршруту Алматы - Тараз"
          text1="Компания Transline предлагает услуги по грузоперевозке по маршруту Алматы - Тараз. Наша компания имеет богатый опыт в перевозке грузов любой сложности и обеспечивает надежную доставку в срок."
          text2="Мы предлагаем гибкие условия для перевозки грузов, включая различные типы транспорта, такие как грузовые автомобили, железнодорожные вагоны и контейнеры. Наша команда профессиональных логистов разработает оптимальный маршрут и выберет наиболее подходящий вид транспорта для вашего груза."
          text3="Если вам нужна надежная и профессиональная компания для перевозки груза по маршруту Алматы - Тараз, обращайтесь к нам. Мы готовы предложить оптимальное решение для вашего бизнеса и обеспечить высокое качество обслуживания по конкурентоспособной цене."
        />
        <CoSubmitApplication />
        <CoFooter />
      </main>
    </>
  );
}
export default GruzoperevozkiAlmatyTaraz;
