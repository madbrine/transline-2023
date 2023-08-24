import CoFooter from "@/compnents/footer";
import CoHeader from "@/compnents/header";
import CoSubmitApplication from "@/compnents/submit-application";
import TplPage from "@/compnents/tpl-pages";
import MoBlockHeaderH1 from "@/molecules/block-header-h1";
import MoNavLinker from "@/molecules/nav-linker";
import Head from "next/head";


function GruzoperevozkiKaragandaKyzylorda() {
    return (
        <>
            <Head>
                <title>Грузоперевозки между Карагандой и Кызылордой с Transline</title>
                <meta name="description" content="Transline предлагает профессиональные грузоперевозки по маршруту Караганда-Кызылорда . Надежная и быстрая доставка грузов наших клиентов - наш приоритет." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <CoHeader />
                <div className='tpl-margin-h'>
                    <MoBlockHeaderH1 text='Грузоперевозки Караганда-Кызылорда' />
                    <MoNavLinker
                        text2="Грузоперевозки Караганда-Кызылорда"
                        link2="/gruzoperevozki-karaganda-kyzylorda"
                    />
                </div>
                <TplPage
                    title='О грузоперевозке по маршруту Караганда-Кызылорда'
                    text1='Компания Transline предлагает услуги грузоперевозки по маршруту Караганда-Кызылорда, который протянулся на протяжении более 800 километров. Этот маршрут - один из самых популярных для перевозки грузов в Южный Казахстан.'
                    text2='Мы заботимся о том, чтобы ваш груз был доставлен вовремя и в целости и сохранности. Мы используем современную технику и обученный персонал, чтобы гарантировать безопасность вашего груза во время транспортировки.'
                    text3='Команда профессионалов компании Transline обеспечивает качественную перевозку грузов на дальние расстояния. Мы гарантируем своевременную доставку грузов и предоставляем нашим клиентам возможность отслеживания груза на протяжении всего маршрута.'
                    text4='Наша компания предлагает услуги по перевозке самых разных грузов: от строительных материалов и тяжелой техники до продуктов питания и медикаментов. Мы готовы предоставить вам гибкие цены и условия нашей работы, чтобы удовлетворить ваши потребности.'
                    text5='При выборе компании Transline вы получаете надежного партнера для перевозки ваших грузов. Мы всегда готовы предоставить профессиональную поддержку и консультацию, чтобы сделать ваше сотрудничество с нами максимально комфортным.'
                />
                <CoSubmitApplication />
                <CoFooter />
            </main>
        </>
    )
}
export default GruzoperevozkiKaragandaKyzylorda;