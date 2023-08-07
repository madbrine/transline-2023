import MoBlockHeader from "@/molecules/block-header";
import MoNavLinker from "@/molecules/nav-linker";
import s from "./styles.module.css"
function NewsIntro() {
    return (
        <div style={{ marginTop: '188px' }}>
            <MoBlockHeader text="Новости" />
            <MoNavLinker link2="/news" text2="Новости" />
            <div style={{
                marginTop: '100px',
                display: 'flex',
            }}
            >
                <div className={s['left-margin']}>

                </div>
                <div className={s['news-container']}>
                    <div className={s['news-row']}>
                        <div>
                            <div className={s['photo']}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NewsIntro;