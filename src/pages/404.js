import CoFooter from "@/compnents/footer";
import CoHeader from "@/compnents/header";
import CoOurServices from "@/compnents/our-services";
import CoSubmitApplication from "@/compnents/submit-application";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({
    subsets: ['latin'],
    weight: '300'
})
function MultimodalnyeGruzoperevozki() {
    return (
        <>
            <Head>
                <title>Transline</title>
                <meta name="description" content="Страница не найдена" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={inter.className}>
                <CoHeader />
                {/* global.css */}
                <div className="not-found-container">
                    <h1 style={{
                    fontSize: '128px',
                    marginRight: 64,
                    }}>
                        404 
                    </h1>
                    <h1>Страница не найдена</h1>
                </div>
                <CoOurServices withoutHeader/>
                <CoSubmitApplication />
                <CoFooter />
            </main>
        </>
    )
}
export default MultimodalnyeGruzoperevozki;