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

function MoBlockHeader(props) {
    return (
        <div className={s['container']}>
            <h1
                className={inter.className}
                id={s['h1_style']}
            >
                {props.text}
            </h1>
            {props.getFormButton &&
                <div className={s['border_style']}>
                    <a className={interM.className}
                        id={s['a_style']}
                        >
                        Получить консультацию
                    </a>
                </div>
            }
        </div>
    )
}
export default MoBlockHeader;