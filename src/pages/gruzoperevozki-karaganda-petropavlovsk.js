import CoFooter from "@/compnents/footer";
import CoHeader from "@/compnents/header";
import CoHeaderV2 from "@/compnents/header-v2";
import CoSubmitApplication from "@/compnents/submit-application";
import TplPage from "@/compnents/tpl-pages";
import MoBlockHeaderH1 from "@/molecules/block-header-h1";
import MoNavLinker from "@/molecules/nav-linker";
import Head from "next/head";


function GruzoperevozkiKaragandaPetropavlovsk() {
    return (
        <>
            <Head>
                <title>Грузоперевозки между Карагандой и Петропавловском с Transline</title>
                <meta name="description" content="Transline предлагает профессиональные грузоперевозки по маршруту Караганда-Петропавловск. Надежная и быстрая доставка грузов наших клиентов - наш приоритет." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <CoHeaderV2 />
                <div className='tpl-margin-h'>
                    <MoBlockHeaderH1 text='Грузоперевозки Караганда-Петропавловск' />
                    <MoNavLinker
                        text2="Грузоперевозки Караганда-Петропавловск"
                        link2="/gruzoperevozki-karaganda-petropavlovsk"
                    />
                </div>
                <TplPage
                    title='О грузоперевозке по маршруту Караганда-Петропавловск'
                    text1='Компания Transline предлагает качественные услуги по грузоперевозкам на маршруте Караганда-Петропавловск. Этот маршрут является одним из самых популярных направлений для перевозки грузов.'
                    text2='Мы предоставляем услуги перевозки грузов различных типов и объемов. Наша компания оснащена современными транспортными средствами, которые позволяют нам доставлять грузы быстро и безопасно.'
                    text3='Мы гарантируем своим клиентам своевременную доставку грузов, а также полную сохранность их товаров. Все наши водители прошли профессиональное обучение и имеют большой опыт работы в данной сфере, что обеспечивает высокий уровень безопасности во время перевозки грузов.'
                    text4='Таким образом, если вам нужна надежная и качественная компания для перевозки грузов по маршруту Караганда-Петропавловск, обращайтесь к нам. Мы гарантируем своевременную и безопасную доставку вашего груза в любую точку маршрута.'
                />
                <CoSubmitApplication />
                <CoFooter />
            </main>
        </>
    )
}
export default GruzoperevozkiKaragandaPetropavlovsk;