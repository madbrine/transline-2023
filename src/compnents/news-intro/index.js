import MoBlockHeader from "@/molecules/block-header";
import s from "./styles.module.css";
import { Inter } from "next/font/google";
import MoNavLinker from "@/molecules/nav-linker";
import NewsPage from "../news-page";
import CoSubmitApplication from "../submit-application";

const inter = Inter({
    subsets: ['latin'],
    weights: '400'
})

function NewsIntro() {
    return (
        <div className={inter.className}>
            <div className={s['margin-block']}>
                <MoBlockHeader text="Новости" />
                <MoNavLinker
                    text2="Новости"
                    link2="/news"
                />
                <div className={s['container']}>
                    <NewsPage />
                </div>
                <CoSubmitApplication />
            </div>
        </div>
    )
}

export default NewsIntro;