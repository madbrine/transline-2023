import { Inter } from "next/font/google";
import s from './styles.module.css';

const inter = Inter({
    subsets: ['latin'],
    weight: '500'
})
function MoButton(props) {
    return (
        <div className={inter.className}>
            {!props.href ?
                <button className={props.blue ? s['button-blue'] : s['button-white']}
                    onClick={props.onClick}>
                    {props.text}
                </button>
                :
                <a className={props.blue ? s['button-blue'] : s['button-white']}
                    href={props.href}
                    id={s['a-button']}>
                    {props.text}
                </a>
            }
        </div>
    )
}
export default MoButton;