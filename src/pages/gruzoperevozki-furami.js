import CoFooter from "@/compnents/footer";
import CoHeader from "@/compnents/header";
import CoSubmitApplication from "@/compnents/submit-application";
import TplPage from "@/compnents/tpl-pages";
import MoBlockHeaderH1 from "@/molecules/block-header-h1";
import MoNavLinker from "@/molecules/nav-linker";
import Head from "next/head";


function GruzoperevozkiFurami() {
    return (
        <>
            <Head>
                <title>Грузоперевозки фурами в Казахстане</title>
                <meta name="description" content="Грузоперевозки фурами по Казахстану" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <CoHeader />
                <div className='tpl-margin-h'>
                    <MoBlockHeaderH1 text='Грузоперевозки фурами' />
                    <MoNavLinker
                        text2="Грузоперевозки фурами"
                        link2="/gruzoperevozki-furami"
                    />
                </div>
                <TplPage
                    title='Особенности грузоперевозок фурами'
                    text1='Компания TRANSLINE осуществляет грузоперевозки с использованием фур объемом от 46 до 120 кубических метров и грузоподъемностью до 20 тонн. Благодаря большой вместительности и грузоподъемности фуры подходят для перевозки самых разных категорий грузов, в том числе и негабаритных.'
                    text2='Универсальным средством для грузоперевозок объемом от 1 до 20 тонн являются фургоны. Благодаря надежной защите груза от внешнего влияния они могут применяться для транспортировки деликатных и хрупких товаров и изделий, электронного оборудования и бытовой техники, мебели, одежды.'
                    text3='В зависимости от общей массы груза специалисты компании [[$name]] подберут для Вас соответствующий фургон из нашего автопарка от небольшой Газели до длинномерного большегруза. Вы можете заказать фургон не только для транспортировки грузов в Астане, Алматы, или их областям, но и в другие города Казахстана.'
                    text4='Так же перевозки фурами удобны в плане доставки сборных, разносортных грузов, это позволяет существенно экономить на стоимости доставки. Если все количество груза не вмещается в одну фуру, то можно дополнительно использовать прицепы и полуприцепы, таким образом, доставляя весь необходимый груз за один рейс.'
                    text5='Еще один плюс перевозки фурами – возможность осуществления погрузочно-разгрузочных работ с использованием манипуляторов. Габариты большинства фур позволяют манипуляторам и погрузчикам свободно заезжать внутрь для осуществления погрузки или разгрузки груза, что ускоряет работу и снижает стоимость услуг.'
                    text6='Большой автопарк компании позволяет организовать доставку грузов с использованием фур разного размера и объема, подбирая оптимальный вариант исходя из экономической целесообразности.'
                    text7='Многие компании и организации не имеют возможности для приобретения дорогостоящего автотранспорта – фур грузоподъемностью до 20 тонн – так как характер их потребности в грузоперевозках носит периодический характер или нет достаточной финансовой обоснованности для такой покупки. Выходом станет аренда фур грузоподъемностью до 20 для осуществления перевозок в пределах Казахстана или за границу.'
                    text8='Компания TRANSLINE предлагает фуры из собственного автопарка в аренду. Для заказа необходимо связаться с нами по телефонам в Алматы или сделать заказ на сайте, оставив свои координаты. Наши менеджеры предоставят вам максимально полную информацию относительно транспорта, находящегося в наличии, сроков исполнения заказа, а так же условиям и цене аренды.'
                />
                <CoSubmitApplication />
                <CoFooter />
            </main>
        </>
    )
}
export default GruzoperevozkiFurami;