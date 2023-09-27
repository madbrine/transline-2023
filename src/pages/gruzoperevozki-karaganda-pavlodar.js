import CoFooter from "@/compnents/footer";
import CoHeader from "@/compnents/header";
import CoHeaderV2 from "@/compnents/header-v2";
import CoSubmitApplication from "@/compnents/submit-application";
import TplPage from "@/compnents/tpl-pages";
import MoBlockHeaderH1 from "@/molecules/block-header-h1";
import MoNavLinker from "@/molecules/nav-linker";
import Head from "next/head";


function GruzoperevozkiKaragandaPavlodar() {
    return (
        <>
            <Head>
                <title>Грузоперевозки между Карагандой и Павлодаром с Transline</title>
                <meta name="description" content="Transline предлагает профессиональные грузоперевозки по маршруту Караганда-Павлодар. Надежная и быстрая доставка грузов наших клиентов - наш приоритет." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <CoHeaderV2 />
                <div className='tpl-margin-h'>
                    <MoBlockHeaderH1 text='Грузоперевозки Караганда-Павлодар' />
                    <MoNavLinker
                        text2="Грузоперевозки Караганда-Павлодар"
                        link2="/gruzoperevozki-karaganda-pavlodar"
                    />
                </div>
                <TplPage
                    title='О грузоперевозке по маршруту Караганда-Павлодар'
                    text1='Компания Transline предоставляет качественные услуги по грузоперевозкам по всей территории Казахстана, включая маршрут Караганда-Павлодар. Этот маршрут представляет собой важное направление для транспортировки грузов различного типа, включая строительные материалы, продукты питания, текстильные изделия и другие товары.'
                    text2='Наша компания имеет широкий парк грузовых автомобилей, которые способны перевозить грузы любой сложности и объема.'
                    text3='Наши профессиональные водители обладают богатым опытом и знаниями в области грузоперевозок, что позволяет им обеспечивать безопасность и сохранность грузов на протяжении всего маршрута. Мы также обеспечиваем своевременную доставку грузов и строго придерживаемся согласованных графиков.'
                    text4='Мы стремимся предоставлять нашим клиентам высококачественные услуги, что является нашим главным приоритетом. Свяжитесь с нами, чтобы получить дополнительную информацию о наших услугах по грузоперевозкам на маршруте Караганда-Павлодар.'
                />
                <CoSubmitApplication />
                <CoFooter />
            </main>
        </>
    )
}
export default GruzoperevozkiKaragandaPavlodar;