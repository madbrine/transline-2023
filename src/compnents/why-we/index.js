const { default: MoBlockHeader } = require("@/molecules/block-header");
const { default: MoBlockLine } = require("@/molecules/block-line");
import { Inter } from "next/font/google";
import s from "./styles.module.css";

const inter = Inter({
    subsets: ['latin'],
    weight: '400'
})

function CoWhyWe() {
    return (
        <div>
            <MoBlockLine text="Почему мы?" />
            <MoBlockHeader text="Почему мы?" />
            <div className={s['container']}>
                <div className={s['reasons-scrollbar']}>
                    <div className={s['reason-card']}></div>
                    <div className={s['reason-card']}></div>
                    <div className={s['reason-card']}></div>
                    <div className={s['reason-card']}></div>
                    <div className={s['reason-card']}></div>
                    <div className={s['reason-card']}></div>
                    <div className={s['reason-card']}></div>
                </div>
                <div className={inter.className}>
                    <div className={s['line-scrollbar']}>
                        <div className={s['vert-line']}>
                            <a>0%</a>
                        </div>
                        <div className={s['horiz-line']} />
                        <div className={s['vert-line']}>
                            <a>0%</a>
                        </div>
                        <div className={s['horiz-line']} />
                        <div className={s['vert-line']}>
                            <a>0%</a>
                        </div>
                        <div className={s['horiz-line']} />
                        <div className={s['vert-line']}>
                            <a>0%</a>
                        </div>
                        <div className={s['horiz-line']} />
                        <div className={s['vert-line']}>
                            <a>0%</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CoWhyWe;