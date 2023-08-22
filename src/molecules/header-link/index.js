import { Inter } from "next/font/google";
import Image from "next/image";
import s from './styles.module.css';
const inter = Inter({
    subsets: ['latin'],
    weight: '400'
})
function MoHeaderLink(props) {
    return (
        <div style={styles.container}>
            <div className={s['container']} >
                <a
                    style={styles.link}
                    className={inter.className}
                    href={props.href}>
                        {props.text}
                </a>
                {props.underLine &&
                    <div style={styles.underLine}></div>
                }
            </div>
            {props.svg &&
                <Image
                    src={props.svg}
                    alt={props.text}
                    width={24}
                    height={24}
                    style={styles.svg}
                />
            }
        </div>
    );
}
export default MoHeaderLink;

const styles = {
    link: {
        textDecoration: 'none',
        color: '#3f3f3f',
    },
    container: {
        display: 'flex',
        alignItems: 'center'
    },
    svg: {
        marginLeft: '8px'
    },
    underLine: {
        width: '100%',
        height: '1px',
        backgroundColor: '#3f3f3f',
        marginTop: '2px'
    }
}