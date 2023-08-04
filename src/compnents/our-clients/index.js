import MoBlockHeader from "@/molecules/block-header";
import MoBlockLine from "@/molecules/block-line";
import s from "./styles.module.css"

function CoOurClients() {
    return (
        <div>
            <MoBlockLine text="Наши клиенты" />
            <MoBlockHeader text="Наши клиенты" />
            <div className={s['container']}>
                <div className={s['scroll-bar']}>
                    <div className={s['clients-card']}></div>
                    <div className={s['clients-card']}></div>
                    <div className={s['clients-card']}></div>
                    <div className={s['clients-card']}></div>
                    <div className={s['clients-card']}></div>
                    <div className={s['clients-card']}></div>
                    <div className={s['clients-card']}></div>
                    <div className={s['clients-card']}></div>
                    <div className={s['clients-card']}></div>
                    <div className={s['clients-card']}></div>
                    <div className={s['clients-card']}></div>
                    <div className={s['clients-card']}></div>
                </div>
                <div className={s['back-to-top-container']}>
                    <button className={s['button-to-top']}></button>
                </div>
            </div>
        </div>
    )
}
export default CoOurClients;