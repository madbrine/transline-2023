import Head from 'next/head'
import CoHeader from '@/compnents/header'
import CoIntro from '@/compnents/intro'
import CoAboutCompany from '@/compnents/about-company'
import CoNews from '@/compnents/news'
import CoSubmitApplication from '@/compnents/submit-application'
import CoFooter from '@/compnents/footer'
import CoBlockServices from '@/compnents/add-block-services'
import MoBlockHeader from '@/molecules/block-header'
import MoBlockLine from '@/molecules/block-line'
import VanishDiv from '@/molecules/vanish-div'

export default function Home() {
  return (
    <>
      <Head>
        <title>Крупнейшая логистическая компания в Центральной Азии</title>
        <meta name="description" content="Крупнейшая логистическая компания в Центральной Азии. Надежные автоперевозки по Казахстану, СНГ и миру. Оптимизируем грузоперевозки для бизнеса любого масштаба. Быстрая и безопасная доставка с гарантированным качеством." />
        <meta name="viewport" content="width=device-width, minimum-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{ overflowX: 'hidden', width: '100vw' }}>
        <CoHeader />
        <div style={{ display: 'none' }}>
          <a href='/arenda-avtokrana-v-kazahstane'></a>
          <a href='/arenda-avtovyshki-v-kazahstane'></a>
          <a href='/arenda-manipulyatora-v-kazahstane'></a>
          <a href='/arenda-samosvalov'></a>
          <a href='/bortovye-perevozki'></a>
          <a href='/gruzoperevozki-furami'></a>
          <a href='/gruzoperevozki-iz-indii'></a>
          <a href='/gruzoperevozki-medikamentov'></a>
          <a href='/gruzoperevozki-po-gorodu'></a>
          <a href='/gruzoperevozki-po-kazahstanu'></a>
          <a href='/gruzoperevozki-v-afganistan'></a>
          <a href='/gruzoperevozki-v-iran'></a>
          <a href='/gruzoperevozki-v-tadzhikistan'></a>
          <a href='/gruzoperevozki-v-uzbekistan'></a>
          <a href='/izotermicheskie-perevozki'></a>
          <a href='/kontejnernye-perevozki-iz-avstralii-v-kazahstan'></a>
          <a href='/kontejnernye-perevozki-iz-indii-v-kazahstan'></a>
          <a href='/kontejnernye-perevozki-iz-indonezii-v-kazahstan'></a>
          <a href='/kontejnernye-perevozki-iz-malajzii-v-kazahstan'></a>
          <a href='/kontejnernye-perevozki-iz-novoj-zelandii-v-kazahstan'></a>
          <a href='/kontejnernye-perevozki-iz-o.a.e.-v-kazahstan'></a>
          <a href='/kontejnernye-perevozki-iz-pakistana-v-kazahstan'></a>
          <a href='/kontejnernye-perevozki-iz-shri-lanka-v-kazahstan'></a>
          <a href='/kontejnernye-perevozki-iz-singapura-v-kazahstan'></a>
          <a href='/kontejnernye-perevozki-iz-tajlanda-v-kazahstan'></a>
          <a href='/kontejnernye-perevozki-iz-tajvanya-v-kazahstan'></a>
          <a href='/kontejnernye-perevozki-iz-v-kazahstan'></a>
          <a href='/kontejnernye-perevozki-iz-vetnama-v-kazahstan'></a>
          <a href='/kontejnernye-perevozki-iz-yaponii-v-kazahstan'></a>
          <a href='/kontejnernye-perevozki-v-kazahstan'></a>
          <a href='/mezhdunarodnye-perevozki'></a>
          <a href='/nizkoramnye-traly'></a>
          <a href='/perevozka-dorozhnoj-tehniki'></a>
          <a href='/perevozka-emkostej'></a>
          <a href='/perevozka-nestandartnyh-gruzov'></a>
          <a href='/perevozka-selskohozyajstvennoj-tehniki'></a>
          <a href='/perevozka-specztehniki'></a>
          <a href='/perevozka-stankov'></a>
          <a href='/perevozka-stroitelnoj-tehniki'></a>
          <a href='/perevozka-voennoj-tehniki'></a>
          <a href='/refrizheratornye-perevozki'></a>
          <a href='/skladskie-uslugi'></a>
          <a href='/tamozhennoe-oformlenie-gruzov'></a>
          <a href='/tentovye-perevozki'></a>
          <a href='/astana-kyzylorda'></a>
          <a href='/gruzoperevozki-almaty-oskemen-ust-kamenogorsk'></a>
          <a href='/gruzoperevozki-almaty-shymkent'></a>
          <a href='/gruzoperevozki-astana-aktobe'></a>
          <a href='/gruzoperevozki-astana-atyrau'></a>
          <a href='/gruzoperevozki-astana-kostanaj'></a>
          <a href='/gruzoperevozki-astana-pavlodar'></a>
          <a href='/gruzoperevozki-astana-petropavlovsk'></a>
          <a href='/gruzoperevozki-astana-semej'></a>
          <a href='/gruzoperevozki-astana-taldykorgan'></a>
          <a href='/gruzoperevozki-almaty-aktau'></a>
          <a href='/gruzoperevozki-almaty-aktobe'></a>
          <a href='/gruzoperevozki-almaty-atyrau'></a>
          <a href='/gruzoperevozki-almaty-karaganda'></a>
          <a href='/gruzoperevozki-almaty-zhezkazgan'></a>
          <a href='/gruzoperevozki-astana-ekibastuz'></a>
          <a href='/gruzoperevozki-astana-oskemen'></a>
          <a href='/gruzoperevozki-astana-taraz'></a>
          <a href='/gruzoperevozki-astana-uralsk'></a>
          <a href='/gruzoperevozki-astana-zhezkazgan'></a>
          <a href='/gruzoperevozki-almaty-ekibastuz'></a>
          <a href='/gruzoperevozki-almaty-kokshetau'></a>
          <a href='/gruzoperevozki-almaty-kostanaj'></a>
          <a href='/gruzoperevozki-almaty-kyzylorda'></a>
          <a href='/gruzoperevozki-almaty-pavlodar'></a>
          <a href='/gruzoperevozki-almaty-petropavlovsk'></a>
          <a href='/gruzoperevozki-almaty-semej'></a>
          <a href='/gruzoperevozki-almaty-taldykorgan'></a>
          <a href='/gruzoperevozki-almaty-taraz'></a>
          <a href='/gruzoperevozki-almaty-uralsk'></a>
          <a href='/gruzoperevozki-astana-aktau'></a>
          <a href='/gruzoperevozki-astana-kokshetau'></a>
          <a href='/gruzoperevozki-astana-oksemen'></a>
          <a href='/gruzoperevozki-astana-shymkent'></a>
          <a href='/gruzoperevozki-karaganda-aktau'></a>
          <a href='/gruzoperevozki-karaganda-aktobe'></a>
          <a href='/gruzoperevozki-karaganda-almaty'></a>
          <a href='/gruzoperevozki-karaganda-astana'></a>
          <a href='/gruzoperevozki-karaganda-atyrau'></a>
          <a href='/gruzoperevozki-karaganda-kokshetau'></a>
          <a href='/gruzoperevozki-almaty-astana'></a>
          <a href='/gruzoperevozki-karaganda-kostanaj'></a>
          <a href='/gruzoperevozki-karaganda-kyzylorda'></a>
          <a href='/gruzoperevozki-karaganda-oskemen'></a>
          <a href='/gruzoperevozki-karaganda-pavlodar'></a>
          <a href='/gruzoperevozki-karaganda-petropavlovsk'></a>
          <a href='/gruzoperevozki-karaganda-semej'></a>
          <a href='/gruzoperevozki-karaganda-shymkent'></a>
          <a href='/gruzoperevozki-karaganda-taldykorgan'></a>
          <a href='/gruzoperevozki-karaganda-taraz'></a>
          <a href='/gruzoperevozki-karaganda-uralsk'></a>
        </div>
        <CoIntro />
        <VanishDiv>
          <MoBlockHeader text="Решения для Вашего бизнеса" />
        </VanishDiv>
        <VanishDiv>
          <MoBlockLine text="Наши решения" />
        </VanishDiv>
        <CoBlockServices />
        <CoAboutCompany />
        {/* <CoNews /> */}
        <CoSubmitApplication />
        <CoFooter />
      </main>
    </>
  )
}
