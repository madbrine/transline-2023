import s from './styles.module.css';
import { Inter } from "next/font/google";
import VanishDiv from '@/molecules/vanish-div';
import MoBlockHeader from '@/molecules/block-header';
import MoNavLinker from '@/molecules/nav-linker';
import MoBlockLine from '@/molecules/block-line';
import Image from 'next/image';

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
                        <div className={s['header-photo']}>
                            <Image
                                src={props.HeaderPhoto}
                                objectFit="cover"
                                layout="fill"
                                style={{ borderRadius: 21 }}
                            />
                        </div>
                    </VanishDiv>
                </div>
                <VanishDiv>
                    <MoBlockLine text="Об услуге" />
                </VanishDiv>
                <div className={s['container']}>
                        <div className={s['content-block']}>
                            <div className={s['content-photo']}>
                                <Image
                                    src={props.Photo1}
                                    objectFit="cover"
                                    layout="fill"
                                    style={{ borderRadius: 20 }}
                                />
                            </div>
                            <div className={s['margin-between']} />
                            <div className={s['content-box']}>
                                <div className={s['box-header']}>
                                    {props.BoxHeader1}
                                </div>
                                <a>

                                </a>
                                {props.BoxDesc1.map((desc, key) =>
                                    <div key={key}>
                                        <a className={s['box-desc']}>{desc}</a>
                                    </div>
                                )}
                                <a className={s['box-desc']}>
                                </a>
                            </div>
                        </div>
                        <div className={s['content-block']}>
                            <div className={s['content-box']}>
                                <div className={s['box-header']}>
                                    {props.BoxHeader2}
                                </div>
                                <div style={{
                                    marginBottom: '30px',
                                    color: '#666'
                                }}>
                                    {props.BoxPreDesc2}
                                </div>
                                {props.BoxDesc2.map((desc, key) =>
                                    <div key={key}>
                                        <a className={s['box-desc']}>{desc}</a>
                                    </div>
                                )}
                                <a style={{ color: '#666' }}>
                                    {props.BoxPostDesc2}
                                </a>
                            </div>
                            <div className={s['margin-between']} />
                            <div className={s['content-photo']}>
                                <Image
                                    src={props.Photo2}
                                    objectFit="cover"
                                    layout="fill"
                                    style={{ borderRadius: 20 }}
                                />
                            </div>
                        </div>
                        <div className={s['content-block']}>
                            <div className={s['content-photo']}>
                                <Image
                                    src={props.Photo3}
                                    objectFit="cover"
                                    layout="fill"
                                    style={{ borderRadius: 20 }}
                                />
                            </div>
                            <div className={s['margin-between']} />
                            <div className={s['content-box']}>
                                <div className={s['box-header']}>
                                    {props.BoxHeader3}
                                </div>
                                <div style={{
                                    marginBottom: '30px',
                                    color: '#666'
                                }}>
                                    {props.BoxPreDesc3}
                                </div>
                                {props.BoxDesc3.map((desc, key) =>
                                    <div key={key}>
                                        <a className={s['box-desc']}>{desc}</a>
                                    </div>
                                )}
                                <a style={{ color: '#666' }}>
                                    {props.BoxPostDesc3}
                                </a>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}
export default CoService;