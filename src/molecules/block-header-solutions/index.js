import { Inter } from "next/font/google";
import s from './styles.module.css'

const interM = Inter({
    subsets: ["latin"],
    weight: '500'
})
const inter = Inter({
    subsets: ["latin"],
    weight: '400'
})

function MoBlockHeaderSolutions(props) {
    return (
        <div className={s['container']}>
            <div
                className={inter.className}
                id={s['h1_style']}
            >
                {props.text}
            </div>
            <button onClick={props.scrollToForm}>Получить консультацию</button>
        </div>
    )
}
export default MoBlockHeaderSolutions;