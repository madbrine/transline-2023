import CoFooter from "@/compnents/footer";
import CoHeader from "@/compnents/header";
import NewsIntro from "@/compnents/news-intro";
import Head from "next/head";

function News() {
    return (
        <>
            <Head>
                <title>Новости Transline</title>
                <meta name="description" content="Новости по грузоперевозкам" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <CoHeader />
                <NewsIntro />
                <CoFooter />
            </main>
        </>
    )
}
export default News;