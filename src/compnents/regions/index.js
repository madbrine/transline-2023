import MoBlockHeader from "@/molecules/block-header";
import MoBlockLine from "@/molecules/block-line";
import s from './styles.module.css';

function CoRegions() {
    return(
        <div>
            <MoBlockLine text="Регионы"/>
            <MoBlockHeader text="Регионы"/>
            <div className={s['container']}>

            </div>
        </div>
    )
}
export default CoRegions;