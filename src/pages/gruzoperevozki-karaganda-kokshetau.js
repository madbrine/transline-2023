import CoFooter from "@/compnents/footer";
import CoHeader from "@/compnents/header";
import CoHeaderV2 from "@/compnents/header-v2";
import CoSubmitApplication from "@/compnents/submit-application";
import TplPage from "@/compnents/tpl-pages";
import MoBlockHeaderH1 from "@/molecules/block-header-h1";
import MoNavLinker from "@/molecules/nav-linker";
import Head from "next/head";


function GruzoperevozkiKaragandaKokshetau() {
    return (
        <>
            <Head>
                <title>Грузоперевозки между Карагандой и Кокшетау с Transline</title>
                <meta name="description" content="Transline предлагает профессиональные грузоперевозки по маршруту Караганда-Кокшетау. Надежная и быстрая доставка грузов наших клиентов - наш приоритет." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <CoHeaderV2 />
                <div className='tpl-margin-h'>
                    <MoBlockHeaderH1 text='Грузоперевозки Караганда-Кокшетау' />
                    <MoNavLinker
                        text2="Грузоперевозки Караганда-Кокшетау"
                        link2="/gruzoperevozki-karaganda-kokshetau"
                    />
                </div>
                <TplPage
                    title='О грузоперевозке по маршруту Караганда-Кокшетау'
                    text1='Компания Transline рада предложить свои услуги по грузоперевозке по маршруту Караганда-Кокшетау. Этот маршрут является одним из наиболее востребованных направлений в Казахстане, ведь Кокшетау - это один из крупнейших транспортных узлов в центральной части страны, а Караганда славится своей промышленностью и географическим расположением.'
                    text2='Компания Transline предлагает своим клиентам качественные и надежные услуги по грузоперевозкам. Мы предоставляем транспорт различных грузоподъемностей и объемов, чтобы удовлетворить потребности всех наших клиентов, независимо от размера их груза.'
                    text3='Мы понимаем, что для наших клиентов важна безопасность и своевременная доставка грузов. Поэтому мы используем только надежные и современные транспортные средства, а также профессиональных водителей с богатым опытом работы.'
                    text4='Если вы ищете надежного и качественного партнера для перевозки грузов по маршруту Караганда-Кокшетау, обратитесь к нам в компанию Transline. Мы готовы предложить вам выгодные и индивидуальные условия сотрудничества.'
                />
                <CoSubmitApplication />
                <CoFooter />
            </main>
        </>
    )
}
export default GruzoperevozkiKaragandaKokshetau;