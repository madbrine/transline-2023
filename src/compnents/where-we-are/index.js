import MoBlockHeader from "@/molecules/block-header";
import MoBlockLine from "@/molecules/block-line";
import s from './styles.module.css';

function CoWhereWeAre() {
    return(
        <div>
            <MoBlockLine text="Регионы"/>
            <MoBlockHeader text="Где базируемся?"/>
            <div className={s['container']}>

            </div>
        </div>
    )
}
export default CoWhereWeAre;