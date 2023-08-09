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
        <div
            style={{
                display: 'flex',
                marginLeft: '60px',
                marginRight: '60px',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
            }}>
            {!props.small ?
            <h1 
                className={inter.className}
                id={s['h1_style']}
            >
                {props.text}
            </h1>
            :
            <h1 
                className={inter.className}
                style={{
                    fontSize: '48px',
                    letterSpacing: '-1,92px',
                    lineHeight: '110%',
                    margin: '0 0 0 0'
                }}
            >
                {props.text}
            </h1>
            }
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