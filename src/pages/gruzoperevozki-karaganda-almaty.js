import CoFooter from "@/compnents/footer";
import CoHeaderV2 from "@/compnents/header-v2";
import CoSubmitApplication from "@/compnents/submit-application";
import TplPage from "@/compnents/tpl-pages";
import MoBlockHeaderH1 from "@/molecules/block-header-h1";
import MoNavLinker from "@/molecules/nav-linker";
import Head from "next/head";

function GruzoperevozkiKaragandaAlmaty() {
  return (
    <>
      <Head>
        <title>Грузоперевозки между Карагандой и Алматой с Transline</title>
        <meta
          name="description"
          content="Transline предлагает профессиональные грузоперевозки по маршруту Караганда-Алматы. Надежная и быстрая доставка грузов наших клиентов - наш приоритет."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <CoHeaderV2 />
        <div className="tpl-margin-h">
          <MoBlockHeaderH1 text="Грузоперевозки Караганда-Алматы" />
          <MoNavLinker
            text2="Грузоперевозки Караганда-Алматы"
            link2="/gruzoperevozki-karaganda-almaty"
          />
        </div>
        <TplPage
          title="О грузоперевозке по маршруту Караганда-Алматы"
          text1="Маршрут из Караганды в Алматы - это один из самых важных и популярных маршрутов для компании Transline. Караганда является крупным промышленным городом, в то время как Алматы - крупнейший город Казахстана и центр деловой активности. Именно поэтому многие компании стремятся перевозить свой груз между этими двумя городами."
          text2="Компания Transline предлагает широкий выбор грузовых автомобилей, которые могут перевезти различные типы грузов. Независимо от того, является ли ваш груз крупногабаритным или необходимо соблюдать строгое время доставки, мы готовы предложить наиболее эффективное решение для вас."
          text3="Мы понимаем, что грузоперевозки - это ответственное дело, поэтому мы уделяем особое внимание безопасности груза во время перевозки. Все наши водители проходят обучение и имеют большой опыт работы, что позволяет им грамотно и безопасно перевозить грузы на маршруте Караганда-Алматы."
          text4="Кроме того, мы предлагаем конкурентные цены на наши услуги грузоперевозок, что делает нашу компанию привлекательным выбором для клиентов, которые ищут надежного партнера для своих грузоперевозок."
        />
        <CoSubmitApplication />
        <CoFooter />
      </main>
    </>
  );
}
export default GruzoperevozkiKaragandaAlmaty;
