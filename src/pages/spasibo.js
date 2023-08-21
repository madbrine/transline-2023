import CoFooter from "@/compnents/footer";
import CoHeader from "@/compnents/header";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({
    subsets: ['latin'],
    weight: '400'
})

function Spasibo() {
    return (
        <>
            <Head>
                <title>Transline</title>
                <meta name="description" content="Благодарим вас за заявку" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={inter.className}>
                <CoHeader />
                <div className='spasibo-container'>
                    <h1>Спасибо!</h1>
                    <div className='spasibo-text'>
                        <p className='text-1'>Мы изучим ваш</p>
                        <p>запрос и свяжемся с вами в</p>
                        <p>ближайшие время!</p>
                    </div>
                </div>
                <div className="line" />
                <CoFooter />
            </main>
        </>
    )
}

export default Spasibo;