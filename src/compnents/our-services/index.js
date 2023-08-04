import MoBlockHeader from "@/molecules/block-header";
import MoBlockLine from "@/molecules/block-line";
import s from './styles.module.css';

function CoOurServices() {
    return(
        <div>
            <MoBlockLine text="Услуги" />
            <MoBlockHeader text="Наши услуги" getFormButton/>
            <div className={s['container']}>
                <div className={s['wrap-container']}>
                    <div className={s['wrap-item-white']}></div>
                    <div className={s['wrap-item']}></div>
                    <div className={s['wrap-item']}></div>
                    <div className={s['wrap-item']}></div>
                    <div className={s['wrap-item']}></div>
                    <div className={s['wrap-item']}></div>
                    <div className={s['wrap-item']}></div>
                    <div className={s['wrap-item-white']}></div>
                    <div className={s['wrap-item']}></div>
                    <div className={s['wrap-item']}></div>
                    <div className={s['wrap-item-white']}></div>
                    <div className={s['wrap-item-white']}></div>
                </div>
            </div>
        </div>
    )
}
export default CoOurServices;