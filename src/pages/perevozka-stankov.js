import CoFooter from "@/compnents/footer";
import CoHeader from "@/compnents/header";
import CoSubmitApplication from "@/compnents/submit-application";
import TplPage from "@/compnents/tpl-pages";
import MoBlockHeaderH1 from "@/molecules/block-header-h1";
import MoNavLinker from "@/molecules/nav-linker";
import Head from "next/head";


function PerevozkaStankov() {
    return (
        <>
            <Head>
                <title>Перевозка станков в Казахстане</title>
                <meta name="description" content="Перевозка станков" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <CoHeader />
                <div className='tpl-margin-h'>
                    <MoBlockHeaderH1 text='Перевозка станков' />
                    <MoNavLinker
                        text2="Перевозка станков"
                        link2="/perevozka-stankov"
                    />
                </div>
                <TplPage
                    title='Особенности перевозки станков'
                    text1='Для любого промышленного предприятия, фабрики или завода перевозка станков актуальная и важная задача. Для транспортной компании же главное – обеспечить высокое качество услуги, сохранность оборудования в дороге, его демонтаж (при необходимости), погрузку, разгрузку и монтаж.'
                    text2='Погрузка и разгрузка станков (в отличие от автотехники) невозможна без применения подъемного оборудования – кранов и манипуляторов, что усложняет задачу и поднимает стоимость услуги. В целях обеспечения максимальной сохранности и облегчения самого процесса транспортировки специалисты компании TRANSLINE производят демонтаж (разборку) оборудования перед погрузкой. Все детали и крепления маркируются, что облегчает процесс монтажа после доставки груза.'
                    text3='Достаточно жесткие требования предъявляются к такелажным работам при погрузке и транспортировки. Для надежной фиксации тяжелого негабаритного груза используются цепи, тросы, костыли и другие элементы крепления. Существуют определенные правила крепления станков и аналогичного оборудования на грузовых платформах, которые требуют от исполнителя знаний и опыта. Поэтому в нашей компании такелажными работами занимаются только специалисты, прошедшие обучение.'
                    text4='Помимо прочего мы можем организовать перевозку не только отдельных станков, но и всего цеха (линии) в целом. Такая масштабная задача требует больших затрат на решение технических и организационных вопросов, так как без заранее составленного и проработанного плана, вся процедура может обернуться хаосом. Компания TRANSLINE поможет вам избежать этого и возьмет на себя не только решение задачи по осуществлению собственно перевозки, но и все сопутствующие вопросы.'
                />
                <CoSubmitApplication />
                <CoFooter />
            </main>
        </>
    )
}
export default PerevozkaStankov;