import MoBlockHeader from "@/molecules/block-header";
import MoBlockLine from "@/molecules/block-line";
import VanishDiv from "@/molecules/vanish-div";
import { Inter } from "next/font/google";
import Image from "next/image";
import { useState, useRef } from "react";
import s from './styles.module.css';
import photoAbout1 from '../../assets/about1.webp';
import photoAbout2 from '../../assets/truck-1.webp';
import photoAbout3 from '../../assets/about2.webp';
import photoAbout4 from '../../assets/truck-2.webp';

const inter = Inter({
    subsets: [
        'latin'
    ],
    weight: '400',
})
const interM = Inter({
    subsets: [
        'latin'
    ],
    weight: '500',
})
function CoAboutCompanyV2() {
    const containerRef = useRef(null);
    const [isDragging, setDragging] = useState(false);
    const [startX, setStartX] = useState(null);
    const [prevScrollPos, setPrevScrollPos] = useState(0);

    const handleMouseDown = (e) => {
        e.preventDefault();
        if (!isDragging) {
            setDragging(true);
            setStartX(e.pageX);
        }
    };

    const handleMouseUp = () => {
        if (isDragging) {
            setDragging(false);
            setPrevScrollPos(containerRef.current.scrollLeft);
        }
    };

    const handleMouseMove = (e) => {
        if (isDragging) {
            const x = e.pageX - startX;
            containerRef.current.scrollLeft = prevScrollPos - x;
        }
    };

    return (
        <div className={inter.className}>
            <MoBlockLine text={'О компании'} />
            <MoBlockHeader text={'О компании'} />
            <div className={s['container']}>
                <div
                    ref={containerRef}
                    className={s['photos-container']}
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                    style={{
                        cursor: isDragging ? 'grabbing' : 'grab',
                    }}
                >
                    <Image
                        src={photoAbout1}
                        className={s['image']}
                    />
                    <Image
                        src={photoAbout2}
                        className={s['image']}
                    />
                    <Image
                        src={photoAbout3}
                        className={s['image']}
                    />
                    <Image
                        src={photoAbout4}
                        className={s['image']}
                    />
                </div>
                <div className={s['about-company']}>
                    <span className={s['reasons']}>Преимущества</span>
                    <div className={s['advantages']}>
                        <a className={s['read-more']} href="/o-kompanii">Читать больше</a>
                        <div className={s['text']}>
                            <p>Мы организуем надежные и безопасные транспортные решения для отечественных компаний и за рубежом. Наша команда профессионалов может предоставить индивидуальные решения для удовлетворения ваших уникальных потребностей и гарантировать своевременную доставку вашего груза по востребованным маршрутам.</p>
                            <div className={s['point-1']}>
                                <span>100 млн</span>
                                <div className={s['line']} />
                                <span className={s['point-text-1']}>Страхование груза на 100 млн тенге</span>
                            </div>
                            <div className={s['point-pos']}>
                                <div className={s['point-2']}>
                                    <span>350+</span>
                                    <div className={s['line']} />
                                    <span className={s['point-text-2']}>Единиц собственного транспорта</span>
                                </div>
                                <div className={s['point-2']}>
                                    <span>16 лет</span>
                                    <div className={s['line']} />
                                    <span className={s['point-text-2']}>Бережно доставляем ваш груз</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default CoAboutCompanyV2;