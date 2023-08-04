import { Inter } from "next/font/google";
import Image from "next/image";
const inter = Inter({
    subsets: ['latin'],
    weight: '400'
})
function MoHeaderLink(props) {
    return (
        <div style={styles.container}>
            <a
                style={styles.link}
                className={inter.className}
                href={props.href}>{props.text}
            </a>
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
        color: '#000',
    },
    container: { 
        display: 'flex',
        alignItems: 'center'
    },
    svg: {
        marginLeft: '8px'
    }
}