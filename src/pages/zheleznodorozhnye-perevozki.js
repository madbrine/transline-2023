import CoFooter from "@/compnents/footer";
import CoHeader from "@/compnents/header";
import CoSubmitApplication from "@/compnents/submit-application";
import ZheleznodorozhnyeIntro from "@/compnents/perevozki-zheleznodorozhnye";
import Head from "next/head";


export default function ZheleznodorozhnyePerevozki() {
    return (
        <>
            <Head>
                <title>Железнодорожные перевозки Казахстан Китай</title>
                <meta name="description" content="Trabsline - ведущая логистическая компания в Центральной Азии. Мы перевозим груз с Китая в Казахстан по наиболее конкурентно спомобным ценам" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                {/* Яндекс Метрика */}
                <script
                    type="text/javascript"
                    dangerouslySetInnerHTML={{
                        __html: `
                (function(m,e,t,r,i,k,a){ m[i]=m[i]||function(){ (m[i].a=m[i].a||[]).push(arguments) }; m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a) }) (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym"); ym(22331872, "init", { clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true });
            `,
                    }}
                />
                <noscript>
                    <div>
                        <img src="https://mc.yandex.ru/watch/22331872" style={{ position: 'absolute', left: '-9999px' }} alt="" />
                    </div>
                </noscript>
                {/* Конец Яндекс Метрики */}

                {/* Гугл Аналитика */}
                <script
                    type="text/javascript"
                    dangerouslySetInnerHTML={{
                        __html: `
                (function(i,s,o,g,r,a,m){ i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){ 
                (i[r].q=i[r].q||[]).push(arguments) },i[r].l=1*new Date();a=s.createElement(o),
                m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
                })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
        
                ga('create', 'UA-45152189-1', 'transline.kz');
                ga('send', 'pageview');
            `,
                    }}
                />
                {/* Конец Гугл Аналитики */}

                {/* Гугл Тэг Менеджер */}
                <script
                    type="text/javascript"
                    dangerouslySetInnerHTML={{
                        __html: `
                (function(w,d,s,l,i,cid){ w[l]=w[l]||[];w.pclick_client_id=cid;w[l].push({ 'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:''; j.async=true; j.src=
                '//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-P23G9N', '85317');
            `,
                    }}
                />
                {/* Конец Гугл Тэг Менеджера */}

                {/* Гугл Тэг (gtag.js) */}
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-HPJ82XBPM0"></script>
                <script
                    type="text/javascript"
                    dangerouslySetInnerHTML={{
                        __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){
                dataLayer.push(arguments);
            }
            gtag('js', new Date());

            gtag('config', 'G-HPJ82XBPM0');
        `,
                    }}
                />
                {/* Конец Гугл Тэга */}

            </Head>
            <main>
                <CoHeader />
                <ZheleznodorozhnyeIntro />
                <CoSubmitApplication />
                <CoFooter />
            </main>
        </>
    )
}