import { Inter } from "next/font/google";

const inter = Inter({
    subsets: ["latin"],
    weight: "400",
})
function MoBlockLine(props) {
    return(
        <div style={styles.container} className={inter.className}>
            {props.text}
            <div style={styles.line}/>
        </div>
    )
}
export default MoBlockLine;

const styles ={
    container: {
        marginLeft: '60px',    
        marginRight: '60px',    
        marginTop: '100px',
        marginBottom: '100px',
        color: '#666',
        display: 'flex',
        alignItems: 'center',
    },
    line: {
        marginLeft: '30px',
        flex: 1,
        height: 1,
        backgroundColor: '#e3e3d3',
    }
}