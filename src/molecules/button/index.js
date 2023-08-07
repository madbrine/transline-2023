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
                <button style={props.blue ? styles.buttonBlue : styles.buttonWhite}
                    onClick={props.onClick}>
                    {props.text}
                </button>
                :
                <a style={props.blue ? styles.buttonBlue : styles.buttonWhite}
                    href={props.href}
                    className={s['a-button']}>
                    {props.text}
                </a>
            }
        </div>
    )
}
export default MoButton;

const styles = {
    buttonBlue: {
        backgroundColor: '#00ACCD',
        color: 'white',
        padding: '10px 18px',
        borderRadius: 10,
        border: 'none',
        cursor: 'pointer',
        fontSize: '17px',
    },
    buttonWhite: {
        background: 'none',
        color: '#161616',
        padding: '9px 17px',
        border: 'solid 1px #E3E3E3',
        borderRadius: 10,
        cursor: 'pointer',
        fontSize: '17px',
    }
}