import MoBlockHeader from "@/molecules/block-header";
import MoBlockLine from "@/molecules/block-line";
import MoNavLinker from "@/molecules/nav-linker";
import VanishDiv from "@/molecules/vanish-div";
import { motion } from "framer-motion";
import { Inter } from "next/font/google";
import Image from "next/image";
import CoNews from "../news";
import CoSubmitApplication from "../submit-application";
import CoWhyWe from "../why-we";
import s from "./styles.module.css";
import headerPhoto from "../../assets/o-kompanii.webp";
import aboutPhoto from "./about-photo.webp";
import bottom1Photo from "./bottom1.webp";
import bottom2Photo from "./bottom2.webp";
import bottom3Photo from "./bottom3.webp";
import NewsIntro from "../news-intro";
import MoBlockHeaderH1 from "@/molecules/block-header-h1";

const inter = Inter({
  subsets: ["latin"],
  weight: "400",
});

function CoAboutCompanyScreen() {
  return (
    <div className={inter.className} style={{ marginTop: "180px" }}>
      <MoBlockHeaderH1 text={"О компании"} />
      <MoNavLinker text2={"О компании"} />
      <div className={s["container"]}>
        <div className={s["header"]}>
          Крупнейшая логистическая компания Центральной Азии
        </div>
        <div className={s["header-photo"]}>
          <Image
            src={headerPhoto}
            alt="header photo"
            layout="fill"
            objectFit="cover"
            style={{ borderRadius: 15 }}
          />
        </div>
        <div className={s["box-first"]}>
          <div className={s["left"]}>
            <VanishDiv>
              <div className={s["reasons-left-header"]}>Преимущества</div>
            </VanishDiv>
          </div>
          <div className={s["right"]}>
            <VanishDiv>
              <div className={s["reasons-desc"]}>
                Мы организуем надежные и безопасные транспортные решения для
                отечественных компаний и за рубежом. Наша команда профессионалов
                может предоставить индивидуальные решения для удовлетворения
                ваших уникальных потребностей и гарантировать своевременную
                доставку вашего груза по востребованным маршрутам.
              </div>
            </VanishDiv>
            <VanishDiv>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "88px",
                  marginBottom: "70px",
                }}
              >
                <div>
                  <div className={s["reason-value-big"]}>100 млн</div>
                  <div className={s["reason-line"]} />
                  <div className={s["reason-desc"]}>
                    Страхование груза на 100 млн тенге
                  </div>
                  <div className={s["reason-desc"]}> </div>
                </div>
              </div>
            </VanishDiv>
            <VanishDiv>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "140px",
                }}
              >
                <div style={{ width: "290px", marginRight: "90px" }}>
                  <div className={s["reason-value"]}>350+</div>
                  <div className={s["reason-line"]} />
                  <a className={s["reason-desc"]}>
                    Единиц собственного транспорта
                  </a>
                </div>
                <div style={{ width: "316px" }}>
                  <div className={s["reason-value"]}>16 лет</div>
                  <div className={s["reason-line"]} />
                  <a className={s["reason-desc"]}>
                    Бережно доставляем ваш груз
                  </a>
                </div>
              </div>
            </VanishDiv>
          </div>
        </div>
      </div>
      <MoBlockLine text="О нас" />
      <div className={s["container"]}>
        <div className={s["box"]}>
          <div className={s["left-2"]}>
            <div className={s["photo"]} style={{ position: "relative" }}>
              <Image
                src={aboutPhoto}
                alt="about photo"
                layout="fill"
                objectFit="cover"
                style={{ borderRadius: 15 }}
              />
            </div>
          </div>
          <div className={s["right-2"]}>
            <div className={s["about-header"]}>О нас</div>
            <div className={s["about-desc"]}>
              TRANSLINE — транспортная компания, базирующаяся в Казахстане,
              которая предлагает свои услуги как внутри страны, так и за ее
              пределами. Мы организуем надежные и безопасные транспортные
              решения для отечественных компаний и за рубежом. Наша команда
              профессионалов может предоставить индивидуальные решения для
              удовлетворения ваших уникальных потребностей и гарантировать
              своевременную доставку вашего груза по востребованным маршрутам. У
              нас собственный парк современного автотранспорта, опытный штат
              сотрудников, развитая логистическая сеть, более 50 международных
              партнеров, страхование ответственности на 100 млн. тенге — все это
              позволяет нам гарантировать услуги высочайшего качества. Вы можете
              отследить свой груз, благодаря удобной CRM-системе в процессе
              транспортировки. Transline предоставляет безопасность и удобство
              для своих клиентов.
            </div>
          </div>
        </div>
      </div>
      {/* <MoBlockLine text="История компании" />
            <div className={s['container']}>
                <div className={s['box']}>
                    <div className={s['left']}>
                        <div className={s['social-media-box']}>
                            <div>
                                <a href="https://twitter.com/TranslinKz">Twitter</a>
                                <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path id="Vector" opacity="0.8" d="M1.24188 1.25812L9.72792 1.25736L9.72716 9.7434M1.24193 9.74166L9.60908 1.3762" stroke="#00ACCD" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <div>
                                <a href="https://facebook.com/translin.kz">Facebook</a>
                                <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path id="Vector" opacity="0.8" d="M1.24188 1.25812L9.72792 1.25736L9.72716 9.7434M1.24193 9.74166L9.60908 1.3762" stroke="#00ACCD" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <div>
                                <a href="https://instagram.com/transline.kz">Instagram</a>
                                <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path id="Vector" opacity="0.8" d="M1.24188 1.25812L9.72792 1.25736L9.72716 9.7434M1.24193 9.74166L9.60908 1.3762" stroke="#00ACCD" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className={s['right']}>
                        <div className={s['history-header']}>Описание</div>
                        <div className={s['history-desc']}>
                            История компании "Испытания Света Диапазон" началась в 2023 году с мечтания двух талантливых маркетологов и исследователей, Александры и Максима. Они разделяли страсть к исследованию света и осознавали его неизмеримый потенциал в различных отраслях. Объединив свои навыки и знания, они решили создать компанию, которая станет глобальным лидером в области испытания света.
                        </div>
                        <div className={s['history-desc']}>
                            История компании "Испытания Света Диапазон" началась в 2023 году с мечтания двух талантливых маркетологов и исследователей, Александры и Максима. Они разделяли страсть к исследованию света и осознавали его неизмеримый потенциал в различных отраслях. Объединив свои навыки и знания, они решили создать компанию, которая станет глобальным лидером в области испытания света.
                        </div>
                        <div className={s['history-desc']}>
                            История компании "Испытания Света Диапазон" началась в 2023 году с мечтания двух талантливых маркетологов и исследователей, Александры и Максима. Они разделяли страсть к исследованию света и осознавали его неизмеримый потенциал в различных отраслях. Объединив свои навыки и знания, они решили создать компанию, которая станет глобальным лидером в области испытания света.
                        </div>
                        <div className={s['history-desc']}>
                            История компании "Испытания Света Диапазон" началась в 2023 году с мечтания двух талантливых маркетологов и исследователей, Александры и Максима. Они разделяли страсть к исследованию света и осознавали его неизмеримый потенциал в различных отраслях. Объединив свои навыки и знания, они решили создать компанию, которая станет глобальным лидером в области испытания света.
                        </div>
                    </div>
                </div>
                <div className={s['last-photos-container']}>
                    <div>
                        <Image src={bottom1Photo}
                        alt={'multimodal photo'}
                        layout='fill'
                        objectFit='cover'
                        style={{borderRadius: 12}}
                        />
                    </div>
                    <div className={s['center-photo']}>
                        <Image src={bottom2Photo}
                        alt={'multimodal photo'}
                        layout='fill'
                        objectFit='cover'
                        style={{borderRadius: 12}}
                        />
                    </div>
                    <div>
                        <Image src={bottom3Photo}
                        alt={'multimodal photo'}
                        layout='fill'
                        objectFit='cover'
                        style={{borderRadius: 12}}
                        />
                    </div>
                </div>
            </div> */}
      <CoSubmitApplication />
    </div>
  );
}
export default CoAboutCompanyScreen;
