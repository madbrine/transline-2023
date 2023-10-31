import MoBlockHeaderH1 from "@/molecules/block-header-h1";
import MoNavLinker from "@/molecules/nav-linker";
import { Inter } from "next/font/google";

import s from "./styles.module.css";
import Image from "next/image";

import photoAboutCompany from "../../assets/o-kompanii.webp";
import photoAboutCompanyCars from "../../assets/o-kompanii-cars.webp";
import MoBlockLine from "@/molecules/block-line";

const inter = Inter({
  subsets: ["latin"],
  weight: "400",
});

function CoAboutCompanyScreenV2() {
  return (
    <div className={inter.className}>
      <div className={s["container"]}>
        <MoBlockHeaderH1 text={"О компании"} />
        <MoNavLinker text2={"О компании"} />
        <div className={s["margin-page"]}>
          <p className={s["header"]}>
            Крупнейшая логистическая компания Центральной азии
          </p>
          <div className={s["photo-about-company"]}>
            <Image
              src={photoAboutCompany}
              alt="Фото о компании Транслайн"
              layout="fill"
              objectFit="cover"
              style={{ borderRadius: 12 }}
            />
          </div>
          <div className={s["advantages"]}>
            <p className={s["adv-block-1"]}>Преимущества</p>
            <div className={s["adv-block-2"]}>
              <p className={s["adv-text"]}>
                Мы организуем надежные и безопасные транспортные решения для
                отечественных компаний и за рубежом. Наша команда профессионалов
                может предоставить индивидуальные решения для удовлетворения
                ваших уникальных потребностей и гарантировать своевременную
                доставку вашего груза по востребованным маршрутам.
              </p>
              <div className={s["adv-nums"]}>
                <div className={s["num-block-1"]}>
                  <p className={s["num-1"]}>100 млн</p>
                  <div className={s["line"]} />
                  <p className={[s["num-text"]]}>
                    Страхование груза на 100 млн тенге
                  </p>
                </div>
                <div className={s["num-block-2"]}>
                  <div>
                    <p className={s["num-2"]}>300+</p>
                    <div className={s["line"]} />
                    <p className={[s["num-text"]]}>
                      Единиц собственного автопарка
                    </p>
                  </div>
                  <div>
                    <p className={s["num-2"]}>10 лет</p>
                    <div className={s["line"]} />
                    <p className={[s["num-text"]]}>
                      Бережно доставляем ваш груз
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <MoBlockLine text="О нас" />
        <div className={s["margin-page"]}>
          <div className={s["about-us"]}>
            <Image
              className={s["photo-cars"]}
              src={photoAboutCompanyCars}
              alt="Фото грузовиков"
            />
            <div className={s["text-about"]}>
              <p className={s["h-about"]}>О нас</p>
              <div className={s["p-about"]}>
                <p>
                  TRANSLINE — транспортная компания, базирующаяся в Казахстане,
                  которая предлагает свои услуги как внутри страны, так и за ее
                  пределами. Мы организуем надежные и безопасные транспортные
                  решения для отечественных компаний и за рубежом.
                </p>
                <p>
                  Наша команда профессионалов может предоставить индивидуальные
                  решения для удовлетворения ваших уникальных потребностей и
                  гарантировать своевременную доставку вашего груза по
                  востребованным маршрутам.
                </p>
                <p>
                  У нас собственный парк современного автотранспорта, опытный
                  штат сотрудников, развитая логистическая сеть, более 50
                  международных партнеров, страхование ответственности на 100
                  млн. тенге — все это позволяет нам гарантировать услуги
                  высочайшего качества.
                </p>
                <p>
                  Вы можете отследить свой груз, благодаря удобной CRM-системе в
                  процессе транспортировки. Transline предоставляет безопасность
                  и удобство для своих клиентов.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <MoBlockLine text="История компании" />
        <div className={s["margin-page"]}>
          <div className={s["history-company"]}>
            <div className={s["social-sites"]}>
              <div className={s["social-sites-container"]}>
                <div>
                  <a href="https://twitter.com/TranslineKz" target="_blank">
                    Twitter
                  </a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="11"
                    viewBox="0 0 11 11"
                    fill="none"
                    style={{ marginLeft: 4 }}
                  >
                    <path
                      opacity="0.8"
                      d="M1.24188 1.25812L9.72792 1.25736L9.72716 9.7434M1.24193 9.74166L9.60908 1.3762"
                      stroke="#00ACCD"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <a href="https://facebook.com/transline.kz" target="_blank">
                    Facebook
                  </a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="11"
                    viewBox="0 0 11 11"
                    fill="none"
                    style={{ marginLeft: 4 }}
                  >
                    <path
                      opacity="0.8"
                      d="M1.24188 1.25812L9.72792 1.25736L9.72716 9.7434M1.24193 9.74166L9.60908 1.3762"
                      stroke="#00ACCD"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <a href="https://instagram.com/transline.kz" target="_blank">
                    Instagram
                  </a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="11"
                    viewBox="0 0 11 11"
                    fill="none"
                    style={{ marginLeft: 4 }}
                  >
                    <path
                      opacity="0.8"
                      d="M1.24188 1.25812L9.72792 1.25736L9.72716 9.7434M1.24193 9.74166L9.60908 1.3762"
                      stroke="#00ACCD"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className={s["history-text"]}>
              <p className={s["history-h"]}>Описание</p>
              <p className={s["history-p"]}>
                История компании "Испытания Света Диапазон" началась в 2023 году
                с мечтания двух талантливых маркетологов и исследователей,
                Александры и Максима. Они разделяли страсть к исследованию света
                и осознавали его неизмеримый потенциал в различных отраслях.
                Объединив свои навыки и знания, они решили создать компанию,
                которая станет глобальным лидером в области испытания света.
              </p>
              <p className={s["history-p"]}>
                История компании "Испытания Света Диапазон" началась в 2023 году
                с мечтания двух талантливых маркетологов и исследователей,
                Александры и Максима. Они разделяли страсть к исследованию света
                и осознавали его неизмеримый потенциал в различных отраслях.
                Объединив свои навыки и знания, они решили создать компанию,
                которая станет глобальным лидером в области испытания света.
              </p>
              <p className={s["history-p"]}>
                История компании "Испытания Света Диапазон" началась в 2023 году
                с мечтания двух талантливых маркетологов и исследователей,
                Александры и Максима. Они разделяли страсть к исследованию света
                и осознавали его неизмеримый потенциал в различных отраслях.
                Объединив свои навыки и знания, они решили создать компанию,
                которая станет глобальным лидером в области испытания света.
              </p>
              <p className={s["history-p"]}>
                История компании "Испытания Света Диапазон" началась в 2023 году
                с мечтания двух талантливых маркетологов и исследователей,
                Александры и Максима. Они разделяли страсть к исследованию света
                и осознавали его неизмеримый потенциал в различных отраслях.
                Объединив свои навыки и знания, они решили создать компанию,
                которая станет глобальным лидером в области испытания света.
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default CoAboutCompanyScreenV2;
