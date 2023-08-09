import { Inter } from "next/font/google";
import s from './styles.module.css'

const inter = Inter({
    subsets: ["latin"],
    weight: "400",
})
function MoBlockLine(props) {
    return(
        <div id={s['container']} className={inter.className}>
            {props.text}
            <div className={s['line']}/>
        </div>
    )
}
export default MoBlockLine;