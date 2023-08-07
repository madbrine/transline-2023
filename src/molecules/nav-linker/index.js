import { Inter } from "next/font/google"

const inter = Inter({
    subsets: ['latin'],
    weight: '400'
})

function MoNavLinker(props) {
    return (
        <div style={styles.container}>
            <div style={styles.line} />
            <div style={styles.bar}>
                <div className={inter.className}>
                    <a style={styles.text}>Главная</a>
                </div>
                <div style={styles.icon}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M6.66656 4.00012L5.72656 4.94012L8.7799 8.00012L5.72656 11.0601L6.66656 12.0001L10.6666 8.00012L6.66656 4.00012Z" fill="#161616" />
                    </svg>
                </div>
                <div className={inter.className}>
                    <a style={styles.text}>{props.text2}</a>
                </div>

                {/* 
                <div style={styles.icon}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M6.66656 4.00012L5.72656 4.94012L8.7799 8.00012L5.72656 11.0601L6.66656 12.0001L10.6666 8.00012L6.66656 4.00012Z" fill="#161616" />
                    </svg>
                </div> 
                */}
            </div>
        </div>
    )
}
export default MoNavLinker
const styles = {
    container: {
        marginLeft: '60px',
        marginRight: '60px',
    },
    line: {
        marginTop: '60px',
        marginBottom: '40px',
        width: '100%',
        height: '1px',
        backgroundColor: '#e3e3e3',
    },
    bar: {
        display: 'flex',
        textAlign: 'center',
        height: '20px'
    },
    text: {
        marginRight: '6px',
    },
    icon: {
        marginRight: '16px',
        display: 'flex',
        alignItems: 'center',
    }
}