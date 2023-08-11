import s from './styles.module.css';
import { Inter } from "next/font/google";
import VanishDiv from '@/molecules/vanish-div';
import MoBlockHeader from '@/molecules/block-header';
import MoNavLinker from '@/molecules/nav-linker';
import MoBlockLine from '@/molecules/block-line';

const inter = Inter({
    subsets: ['latin'],
    weights: '400'
})

function CoService(props) {
    return (
        <div className={inter.className}>
            <div className={s['margin-block']}>
                <VanishDiv>
                    <MoBlockHeader text={props.MoBlockHeader} />
                </VanishDiv>
                <VanishDiv>
                    <MoNavLinker
                        text2="Автомобильные перевозки"
                        link2="/avtomobilnye-gruzoperevozki"
                    />
                </VanishDiv>
                <div className={s['header-container']}>
                    <VanishDiv big>
                        <div className={s['header-photo']}></div>
                    </VanishDiv>
                </div>
                <VanishDiv>
                    <MoBlockLine text="Об услуге" />
                </VanishDiv>
                <div className={s['container']}>
                    <VanishDiv big>
                        <div className={s['content-block']}>
                            <div className={s['content-photo']}>
                            </div>
                            <div className={s['margin-between']} />
                            <div className={s['content-box']}>
                                <div className={s['box-header']}>
                                    {props.BoxHeader1}
                                </div>
                                {props.BoxDesc1.map((desc, key) =>
                                    <div key={key}>
                                        <a className={s['box-desc']}>{desc}</a>
                                    </div>
                                )}
                                <a className={s['box-desc']}>
                                </a>
                            </div>
                        </div>
                    </VanishDiv>
                    <VanishDiv big>
                        <div className={s['content-block']}>
                            <div className={s['content-box']}>
                                <div className={s['box-header']}>
                                    {props.BoxHeader2}
                                </div>
                                {props.BoxDesc2.map((desc, key) =>
                                    <div key={key}>
                                        <a className={s['box-desc']}>{desc}</a>
                                    </div>
                                )}
                                <a className={s['box-desc']}>
                                </a>
                            </div>
                            <div className={s['margin-between']} />
                            <div className={s['content-photo']} />
                        </div>
                    </VanishDiv>
                    <VanishDiv >
                        <div className={s['content-block']}>
                            <div className={s['content-photo']}>
                            </div>
                            <div className={s['margin-between']} />
                            <div className={s['content-box']}>
                                <div className={s['box-header']}>
                                    {props.BoxHeader3}
                                </div>
                                {props.BoxDesc3.map((desc, key) =>
                                    <div key={key}>
                                        <a className={s['box-desc']}>{desc}</a>
                                    </div>
                                )}
                                <a className={s['box-desc']}>
                                </a>
                            </div>
                        </div>
                    </VanishDiv>
                </div>
            </div>
        </div>
    )
}
export default CoService;