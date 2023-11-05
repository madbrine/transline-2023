import { Inter } from "next/font/google";
import s from "./styles.module.css";
import { useState } from "react";
import MoNavLinkerV2 from "@/molecules/nav-linker-v2";
import MoBlockHeaderH1V2 from "@/molecules/block-header-h1-v2";
import MoBlockLineV2 from "@/molecules/block-line-v2";

import photoMultiModal1 from "../../assets/multimodal-about-1.webp";
import Image from "next/image";

const inter = Inter({
  subsets: ["latin"],
  weight: "400",
});

export default function MultimodalnyeIntroV2(props) {
  const dataText = {
    "01": "",
    "02": "Автоперевозки значительно облегчают доставку в сфере мультимодальных перевозок. Возможность транспортировки от поставщика до порта, аэропорта и ж/д платформы. Осуществление забора груза из любой труднодоступной точки мира.",
    "03": "Морские перевозки считаются самыми экономичными в мультимодальных перевозках. Многие морские маршруты имеют регулярные графики и рейсы, что обеспечивает постоянный грузопоток на экспорт и импорт.",
    "04": "Авиаперевозки являются одним из самых быстрых способов доставки грузов на большие расстояния. Это особенно важно для срочных транспортировок.",
  };
  const dataHeadText = {
    "01": "Железнодорожный транспорт",
    "02": "Автомобильный транспорт",
    "03": "Морские перевозки",
    "04": "Авиаперевозки",
  };

  const [headText, setHeadText] = useState("Железнодорожный транспорт");
  const [text, setText] = useState(
    "Тяжелые строительные машины, краны, бульдозеры, экскаваторы, бетоносмесители и другое строительное оборудование."
  );
  const [activeId, setActiveId] = useState("01");

  const handleClickLink = (e) => {
    const id = e.target.parentElement.id;
    setText(dataText[id]);
    setHeadText(dataHeadText[id]);
    setActiveId(id);
  };

  return (
    <div className={inter.className}>
      <div className={s["intro"]}>
        <MoNavLinkerV2
          text3="Мультимодальные перевозки"
          link3="/multimodalnye-gruzoperevozki"
        />
        <div className={s["intro-text"]}>
          <MoBlockHeaderH1V2 text="Мультимодальные перевозки" />
          <p className={s["intro-p"]}>
            Мы комбинируем транспортировку по всей глобальной сети, задействовав
            при этом - авиаперевозки, морские линии, автомобильный транспорт и
            железнодорожные пути.
          </p>
          <button onClick={props.scrollToForm} className={s["btn-consult"]}>
            Получить консультацию
          </button>
        </div>
      </div>
      <MoBlockLineV2 text="Об услуге" />
      <div className={s["about-1"]}>
        <div className={s["about-desc"]}>
          <svg
            width="24"
            height="23"
            viewBox="0 0 24 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="24" height="23" rx="11.5" fill="#00ACCD" />
            <path
              d="M12.1099 17V8.12305H11.9927L9.33398 10.02V8.40869L12.1172 6.43115H13.7578V17H12.1099Z"
              fill="white"
            />
          </svg>
          <div className={s["about-head"]}>
            <p className={s["about-h-1"]}>Виды транспорта</p>
            <Image
              className={s["about-img-1"]}
              src={photoMultiModal1}
              alt="Фото мультимодальные перевозки 1"
            />
          </div>
        </div>
        <div className={s["switch-block"]}>
          <div className={s["switch-links"]}>
            <li id="01" onClick={handleClickLink}>
              <span
                className={
                  activeId === "01" ? s["link-num-pressed"] : s["link-num"]
                }
              >
                01
              </span>
              <span
                className={
                  activeId === "01" ? s["link-text-pressed"] : s["link-text"]
                }
              >
                Железнодорожный транспорт
              </span>
            </li>
            <li id="02" onClick={handleClickLink}>
              <span
                className={
                  activeId === "02" ? s["link-num-pressed"] : s["link-num"]
                }
              >
                02
              </span>
              <span
                className={
                  activeId === "02" ? s["link-text-pressed"] : s["link-text"]
                }
              >
                Автомобильный транспорт
              </span>
            </li>
            <li id="03" onClick={handleClickLink}>
              <span
                className={
                  activeId === "03" ? s["link-num-pressed"] : s["link-num"]
                }
              >
                03
              </span>
              <span
                className={
                  activeId === "03" ? s["link-text-pressed"] : s["link-text"]
                }
              >
                Морские перевозки
              </span>
            </li>
            <li id="04" onClick={handleClickLink}>
              <span
                className={
                  activeId === "04" ? s["link-num-pressed"] : s["link-num"]
                }
              >
                04
              </span>
              <span
                className={
                  activeId === "04" ? s["link-text-pressed"] : s["link-text"]
                }
              >
                Авиаперевозки
              </span>
            </li>
          </div>
          <div className={s["switch-text"]}>
            <p className={s["switch-text-h"]}>{headText}</p>
            {activeId === "01" ? (
              <div className={s["list"]}>
                <p className={s["list-p"]}>
                  Доставка ж/д линиями в контейнерах и вагонах.
                </p>
                <div className={s["list-li"]} id={s["margin-list"]}>
                  <li>40HQ (COC/SOC)</li>
                  <li>40 Open Top (COC/SOC)</li>
                  <li>20GP (COC/SOC)</li>
                  <li>20 Open Top (COC/SOC)</li>
                  <li>Рефрижераторный контейнер</li>
                  <li>Танк-контейнер</li>
                  <li>
                    Вагоны (крытые, полувагоны, платформы) от 66 тн до 135 тн
                  </li>
                </div>
              </div>
            ) : (
              <p className={s["switch-text-p"]}>{text}</p>
            )}
          </div>
        </div>
      </div>
      <div className={s["about-2"]}>
        <div className={s["about-h-2"]}>
          <p className={s["about-h-2-l"]}>Преимущества</p>
          <p className={s["about-h-2-r"]}>нашей услуги</p>
        </div>
      </div>
    </div>
  );
}
