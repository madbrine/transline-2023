import CoFooter from "@/compnents/footer";
import CoHeader from "@/compnents/header";
import CoHeaderV2 from "@/compnents/header-v2";
import CoSubmitApplication from "@/compnents/submit-application";
import TplPage from "@/compnents/tpl-pages";
import MoBlockHeaderH1 from "@/molecules/block-header-h1";
import MoNavLinker from "@/molecules/nav-linker";
import Head from "next/head";


function GruzoperevozkiAlmatyEkibastuz() {
    return (
        <>
            <Head>
                <title>Грузоперевозки между Алматой и Экибастузом c Transline</title>
                <meta name="description" content="Transline предлагает профессиональные грузоперевозки по маршруту Алмата - Экибастуз. Надежная и быстрая доставка грузов наших клиентов - наш приоритет." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <CoHeaderV2 />
                <div className='tpl-margin-h'>
                    <MoBlockHeaderH1 text='Грузоперевозки Алматы-Экибастуз' />
                    <MoNavLinker
                        text2="Грузоперевозки Алматы-Экибастуз"
                        link2="/gruzoperevozki-almaty-ekibastuz"
                    />
                </div>
                <TplPage
                    title='О грузоперевозке по маршруту Алматы - Экибастуз'
                    text1='Компания Transline предлагает качественные услуги по грузоперевозке по маршруту Алматы - Экибастуз. Мы имеем богатый опыт в перевозке грузов любого объема и типа, и готовы предложить нашим клиентам надежное и высококачественное обслуживание.'
                    text2='Мы гарантируем своевременную доставку груза, используя самые современные технологии и оптимальный маршрут. Наша команда профессионалов сделает все возможное, чтобы груз был доставлен точно в срок.'
                    text3='Мы предлагаем различные виды транспорта для перевозки грузов, включая грузовые автомобили и контейнеры. Мы также обеспечиваем услуги по погрузке и разгрузке груза, что обеспечивает максимальный уровень безопасности и минимизирует риски повреждения вашего груза.'
                    text4='Transline всегда стремится предоставлять клиентам лучшие услуги по конкурентоспособной цене. Если вам нужна надежная и профессиональная компания для перевозки груза по маршруту Алматы - Экибастуз, обращайтесь к нам. Мы готовы разработать оптимальное решение для ваших потребностей и обеспечить высокое качество обслуживания.'
                />
                <CoSubmitApplication />
                <CoFooter />
            </main>
        </>
    )
}
export default GruzoperevozkiAlmatyEkibastuz;