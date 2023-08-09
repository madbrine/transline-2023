import { Inter } from "next/font/google";

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
                style={{
                    fontSize: '112px',
                    margin: '0 0 0 0'
                }}
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
                <div style={{
                    border: 'solid 1px #999',
                    borderWidth: '1px',
                    borderColor: '#999',
                    borderRadius: '10px',
                    height: '48px'
                }}>
                    <a className={interM.className}
                        style={{
                            paddingLeft: '25px',
                            paddingRight: '25px',
                            paddingTop: '14px',
                            paddingBottom: '14px',
                            display: 'inline-block',
                        }}>
                        Получить консультацию
                    </a>
                </div>
            }
        </div>
    )
}
export default MoBlockHeader;