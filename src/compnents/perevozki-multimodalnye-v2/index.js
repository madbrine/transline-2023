import { Inter } from "next/font/google";
import s from "./styles.module.css";
import React, { useState, useRef } from "react";
import MoNavLinkerV2 from "@/molecules/nav-linker-v2";
import MoBlockHeaderH1V2 from "@/molecules/block-header-h1-v2";
import MoBlockLineV2 from "@/molecules/block-line-v2";
import { GoArrowRight } from "react-icons/go";

import photoMultimodal1 from "../../assets/multimodal-about-1.webp";
import iconAdv1 from "../../assets/adv-1.webp";
import iconAdv2 from "../../assets/adv-2.webp";
import iconAdv3 from "../../assets/adv-3.webp";
import iconAdv4 from "../../assets/adv-4.webp";
import Image from "next/image";

const inter = Inter({
  subsets: ["latin"],
  weight: "400",
});

export default function MultimodalnyeIntroV2(props) {
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);

  const onDragStart = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    containerRef.current.style.cursor = "grabbing";
    containerRef.current.style.userSelect = "none";
  };

  const onDragEnd = () => {
    setIsDragging(false);
    containerRef.current.style.cursor = "grab";
    containerRef.current.style.removeProperty("user-select");
  };

  const onDragMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const currentX = e.pageX - containerRef.current.offsetLeft;
    const walk = currentX - startX;
    containerRef.current.scrollLeft = containerRef.current.scrollLeft - walk;
    setStartX(currentX);
  };

  const dataText = {
    "01": `Доставка грузов железнодорожным транспортом является одним из распространенных способов перевозки товаров.  
    
Железнодорожные перевозки могут легко комбинироваться с другими видами транспорта, с такими как: морские перевозки и автотранспорт, что позволяет создавать оптимальные мультимодальные логистические сети.`,
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
    `Доставка грузов железнодорожным транспортом является одним из распространенных способов перевозки товаров.  
    
Железнодорожные перевозки могут легко комбинироваться с другими видами транспорта, с такими как: морские перевозки и автотранспорт, что позволяет создавать оптимальные мультимодальные логистические сети.`
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
        <div className={s["about-desc-1"]}>
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
          <div className={s["about-head-1"]}>
            <p className={s["about-h-1"]}>Виды транспорта</p>
            <Image
              className={s["about-img-1"]}
              src={photoMultimodal1}
              alt="Фото мультимодальные перевозки 1"
            />
          </div>
        </div>
        <div className={s["switch-block"]}>
          <div className={s["switch-links"]}>
            <ul className={s["link-list"]}>
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
            </ul>
          </div>
          <div className={s["switch-text"]}>
            <p className={s["switch-text-h"]}>{headText}</p>
            <p className={s["switch-text-p"]}>{text}</p>
          </div>
        </div>
      </div>
      <div className={s["advantages-block"]}>
        <p className={s["adv-h"]}>Преимущества нашей услуги</p>
        <div
          className={s["adv-cards"]}
          ref={containerRef}
          onMouseDown={onDragStart}
          onMouseUp={onDragEnd}
          onMouseLeave={onDragEnd}
          onMouseMove={onDragMove}
          style={{
            cursor: isDragging ? "grabbing" : "grab",
          }}
        >
          <div className={s["adv-card"]}>
            <div className={s["adv-card-content"]}>
              <Image
                className={s["icon-adv-1"]}
                src={iconAdv1}
                alt="Иконка преимущества 1"
              />
              <div>
                <p className={s["adv-h2"]}>Развитая маршрутная сеть</p>
                <p className={s["adv-p"]}>
                  Доставка от двери отправителя до двери получателя без участия
                  владельца груза
                </p>
              </div>
            </div>
          </div>
          <div className={s["adv-card"]}>
            <div className={s["adv-card-content"]}>
              <Image
                className={s["icon-adv-2"]}
                src={iconAdv2}
                alt="Иконка преимущества 2"
              />
              <div>
                <p className={s["adv-h2"]}>
                  Большая частота отправок и высокая скорость доставки
                </p>
              </div>
            </div>
          </div>
          <div className={s["adv-card"]}>
            <div className={s["adv-card-content"]}>
              <Image
                className={s["icon-adv-3"]}
                src={iconAdv3}
                alt="Иконка преимущества 3"
              />
              <div>
                <p className={s["adv-h2"]}>Электронные сервисы</p>
                <p className={s["adv-p"]}>
                  Вы всегда можете отследить местонахождение вашего груза и даты
                  отгрузки в личном кабинете, полная автоматизация
                  документооборота
                </p>
              </div>
            </div>
          </div>
          <div className={s["adv-card"]}>
            <div className={s["adv-card-content"]}>
              <Image
                className={s["icon-adv-4"]}
                src={iconAdv4}
                alt="Иконка преимущества 4"
              />
              <div>
                <p className={s["adv-h2"]}>Страхование груза на всех этапах</p>
                <p className={s["adv-p"]}>
                  Как на отдельные операции, так и на весь период следования –
                  по желанию клиента
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={s["direction-block"]}>
        <p className={s["direct-h"]}>Направления перевозок</p>
        <div className={s["direct-card-1"]}>
          <div className={s["direct-card-content"]}>
            <p className={s["direct-h2"]}>Импорт</p>
            <div className={s["direct-link"]}>
              <p className={s["direct-p"]}>Подробнее</p>
              <div className={s["direct-btn"]}>
                <GoArrowRight className={s["direct-icon"]} />
              </div>
            </div>
          </div>
        </div>
        <div className={s["direct-card-2"]}>
          <div className={s["direct-card-content"]}>
            <p className={s["direct-h2"]}>Транзит</p>
            <div className={s["direct-link"]}>
              <p className={s["direct-p"]}>Подробнее</p>
              <div className={s["direct-btn"]}>
                <GoArrowRight className={s["direct-icon"]} />
              </div>
            </div>
          </div>
        </div>
        <div className={s["direct-card-3"]}>
          <div className={s["direct-card-content"]}>
            <p className={s["direct-h2"]}>Импорт</p>
            <div className={s["direct-link"]}>
              <p className={s["direct-p"]}>Подробнее</p>
              <div className={s["direct-btn"]}>
                <GoArrowRight className={s["direct-icon"]} />
              </div>
            </div>
          </div>
        </div>
        <div className={s["direct-card-4"]}>
          <div className={s["direct-card-content"]}>
            <p className={s["direct-h2"]}>Импорт</p>
            <div className={s["direct-link"]}>
              <p className={s["direct-p"]}>Подробнее</p>
              <div className={s["direct-btn"]}>
                <GoArrowRight className={s["direct-icon"]} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
