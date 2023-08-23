import { Inter } from "next/font/google";
import s from './styles.module.css';
import MoBlockLine from "@/molecules/block-line";
import CoBlockServices from "../add-block-services";

const inter = Inter({
    subsets: ['latin'],
    weights: '400'
})

export default function TplPage(props) {
    return (
        <div className={inter.className}>
            <div className={s['container']}>
                <div className={s['h1']}>{props.title}</div>
                <p>{props.text1}</p>
                <p>{props.text2}</p>
                <p>{props.text3}</p>
                <p>{props.text4}</p>
                <p>{props.text5}</p>
                <p>{props.text6}</p>
                <p>{props.text7}</p>
                <p>{props.text8}</p>
                <p>{props.text9}</p>
                <p>{props.text10}</p>
                <p>{props.text11}</p>
                <p>{props.text12}</p>
                <p>{props.text13}</p>
                <p>{props.text14}</p>
            </div>
            <MoBlockLine text="Другие услуги" />
            <CoBlockServices />
        </div>
    )
}