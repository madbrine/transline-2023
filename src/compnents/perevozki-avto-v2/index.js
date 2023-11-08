import { Inter } from "next/font/google";
import s from "./styles.module.css";
import MoNavLinkerV2 from "@/molecules/nav-linker-v2";
import MoBlockHeaderH1V2 from "@/molecules/block-header-h1-v2";
import MoBlockLineV2 from "@/molecules/block-line-v2";
import { useState } from "react";
import Image from "next/image";

import photoAuto1 from "../../assets/auto-perevozki-1-new.webp";
import photoAuto2 from "../../assets/auto-perevozki-2-new.webp";
import photoAuto3 from "../../assets/auto-perevozki-3-new.webp";

const inter = Inter({
  subsets: ["latin"],
  weights: "400",
});

export default function AvtoperevozkiIntroV2(props) {
  const dataText = {
    "01": `Междугородные и международные грузоперевозки. 
    
Перевозка различных типов грузов: сырья, товаров, контейнеров и многое другое. 
        
Возможность перевозки специализированных грузов (перевозка с температурным режимом, опасных грузов, негабаритных грузов и др.).`,
    "02": "Наличие обозначения на фуре позволяет проходить таможенный досмотр в ускоренном режиме. Инспектор проверяет у водителя только пломбы и наличие книжки МДП. Благодаря этому перевозчикам удается значительно повысить скорость доставки груза.",
    "03": "Это прибор, который фиксирует и распечатывает показатели температуры при транспортировке скоропортящихся продуктов питания и медицинских препаратов.",
    "04": "Это специализированный вид автомобильного транспорта, предназначенный для перевозки различных жидкостей и газов.",
    "05": "Они предназначены для перевозки непаллетируемых грузов или труб, которые приобретают стабильность благодаря этим элементам",
  };
  const dataHeadText = {
    "01": "Грузоперевозки",
    "02": "ТИР",
    "03": "Термописец:",
    "04": "Автоцистерна",
    "05": "Авто для перевозки труб",
  };
  const dataText2 = {
    "01": "Это может включать в себя товары и материалы, которые не требуют специализированных условий перевозки. Примеры включают в себя электронику, мебель, строительные материалы, одежду и др.",
    "02": "Грузы, такие как зерно, фрукты, овощи, молоко и мясо, перевозятся на фургонах и рефрижераторах с учетом требований по температурному режиму.",
    "03": "Это могут быть опасные химические вещества, вещества, подлежащие регулированию, например, химические реактивы или нефтепродукты.",
    "04": "Это грузы, которые представляют потенциальную опасность при перевозке, такие как взрывчатые вещества, ядовитые вещества или инфекционные материалы. Они требуют особых мер безопасности и специализированных транспортных средств.",
    "05": "Это крупногабаритные и тяжелые грузы, которые не могут быть перевезены стандартными средствами. Примеры включают в себя оборудование, мосты, трансформаторы и другие крупные предметы.",
    "06": "Грузы могут быть упакованы в контейнеры разных размеров для международных морских перевозок и морских контейнеровозов.",
    "07": "Рефрижераторы и изотермические фургоны используются для перевозки продуктов, требующих контроля температуры, например, свежих продуктов и мороженого.",
    "08": "Это может включать в себя машины, оборудование для строительства, медицинское оборудование и другие технические устройства.",
    "09": "Это могут быть жидкости, такие как молоко, масло, химические растворы и другие, которые перевозятся в специальных цистернах.",
    10: "Перевозка бульдозеров, экскаваторов, строительных материалов и другого оборудования, используемого в строительстве.",
  };
  const dataHeadText2 = {
    "01": "Грузы общего назначения",
    "02": "Сельскохозяйственная продукция",
    "03": "Химические грузы",
    "04": "Опасные грузы",
    "05": "Негабаритные грузы",
    "06": "Контейнеры",
    "07": "Продукты с температурным режимом",
    "08": "Техническое оборудование",
    "09": "Жидкие грузы",
    10: "Дорожное строительство и тяжелое оборудование",
  };
  const dataText3 = {
    "01": "Автомобильные перевозки могут быть организованы практически в любой точке с доступными дорогами, что обеспечивает гибкость в выборе маршрута и распределении грузов.",
    "02": "Автомобильные перевозки позволяют доставить груз прямо от отправителя до получателя, что удобно для клиентов.",
    "03": "Автомобильные перевозки могут быть использованы для перевозки различных видов грузов, включая жидкости, твёрдые материалы, продукты и другие.",
    "04": "Автомобильные перевозки могут доставить грузы в отдаленные и труднодоступные районы, где другие виды транспорта могут быть ограничены.",
    "05": "Современные технологии позволяют отслеживать местоположение и состояние грузов в режиме реального времени, что повышает прозрачность и контроль.",
  };
  const dataHeadText3 = {
    "01": "Гибкость и доступность",
    "02": "Скорость доставки",
    "03": "Перевозка разнообразных грузов",
    "04": "Доступность отдаленных мест",
    "05": "Отслеживание груза",
  };

  const [headText, setHeadText] = useState("Грузоперевозки");
  const [text, setText] = useState(
    `Междугородные и международные грузоперевозки. 
    
Перевозка различных типов грузов: сырья, товаров, контейнеров и многое другое. 
    
Возможность перевозки специализированных грузов (перевозка с температурным режимом, опасных грузов, негабаритных грузов и др.).`
  );
  const [activeId, setActiveId] = useState("01");

  const handleClickLink = (e) => {
    const id = e.target.parentElement.id;
    setText(dataText[id]);
    setHeadText(dataHeadText[id]);
    setActiveId(id);
  };

  const [headText2, setHeadText2] = useState("Грузы общего назначения");
  const [text2, setText2] = useState(
    "Это может включать в себя товары и материалы, которые не требуют специализированных условий перевозки. Примеры включают в себя электронику, мебель, строительные материалы, одежду и др."
  );
  const [activeId2, setActiveId2] = useState("01");

  const handleClickLink2 = (e) => {
    const id = e.target.parentElement.id;
    setText2(dataText2[id]);
    setHeadText2(dataHeadText2[id]);
    setActiveId2(id);
  };

  const [headText3, setHeadText3] = useState("Гибкость и доступность");
  const [text3, setText3] = useState(
    "Автомобильные перевозки могут быть организованы практически в любой точке с доступными дорогами, что обеспечивает гибкость в выборе маршрута и распределении грузов."
  );
  const [activeId3, setActiveId3] = useState("01");

  const handleClickLink3 = (e) => {
    const id = e.target.parentElement.id;
    setText3(dataText3[id]);
    setHeadText3(dataHeadText3[id]);
    setActiveId3(id);
  };

  return (
    <div className={inter.className}>
      <div className={s["intro"]}>
        <MoNavLinkerV2
          text3="Автомобильные перевозки"
          link3="/avtomobilnye-gruzoperevozki"
        />
        <div className={s["intro-text"]}>
          <MoBlockHeaderH1V2 text="Автомобильные перевозки" />
          <p className={s["intro-p"]}>
            Максимальное качество транспортно-экспедиционных услуг при
            минимальных затратах. Мы занимаем лидирующие позиции на рынке
            грузовых перевозок Казахстана и стран СНГ.
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
            <p className={s["about-h-1"]}>
              Наши услуги по автомобильным перевозкам
            </p>
            <Image
              className={s["about-img-1"]}
              src={photoAuto1}
              alt="Фото авто перевозки 1"
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
                  Грузоперевозки
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
                  ТИР
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
                  Термописцы
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
                  Автоцистерна
                </span>
              </li>
              <li id="05" onClick={handleClickLink}>
                <span
                  className={
                    activeId === "05" ? s["link-num-pressed"] : s["link-num"]
                  }
                >
                  05
                </span>
                <span
                  className={
                    activeId === "05" ? s["link-text-pressed"] : s["link-text"]
                  }
                >
                  Авто для перевозки труб
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
      <div className={s["about-2"]}>
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
              d="M8.49902 17V15.8794L12.0146 12.2026C12.4834 11.7144 12.8472 11.314 13.106 11.0015C13.3647 10.6841 13.5454 10.4009 13.6479 10.1519C13.7554 9.90283 13.8091 9.63428 13.8091 9.34619V9.33154C13.8091 8.98486 13.7334 8.67725 13.582 8.40869C13.4355 8.13525 13.2231 7.92285 12.9448 7.77148C12.6665 7.61523 12.3345 7.53711 11.9487 7.53711C11.5581 7.53711 11.2139 7.61768 10.916 7.77881C10.6182 7.93994 10.3862 8.16455 10.2202 8.45264C10.0542 8.74072 9.97119 9.07764 9.97119 9.46338V9.49268L8.41846 9.48535L8.41113 9.4707C8.41602 8.82617 8.57227 8.25732 8.87988 7.76416C9.1875 7.26611 9.61475 6.87793 10.1616 6.59961C10.7085 6.31641 11.3359 6.1748 12.0439 6.1748C12.6982 6.1748 13.2817 6.3042 13.7944 6.56299C14.312 6.81689 14.7197 7.1709 15.0176 7.625C15.3154 8.07422 15.4644 8.58936 15.4644 9.17041V9.19238C15.4644 9.59277 15.3911 9.98096 15.2446 10.3569C15.0981 10.7329 14.8442 11.1455 14.4829 11.5947C14.1265 12.0439 13.6284 12.5859 12.9888 13.2207L10.3228 15.8794L10.7476 15.1396V15.8794L10.3301 15.5938H15.6328V17H8.49902Z"
              fill="white"
            />
          </svg>
          <div className={s["about-head-1"]}>
            <div>
              <p className={s["about-h-1"]}>Типы автомобильных грузов</p>
              <p className={s["about-p-1"]}>
                Помимо генеральных грузов, мы перевозим широкий спектр
                специализированных грузов, включая:
              </p>
            </div>
            <Image
              className={s["about-img-1"]}
              src={photoAuto2}
              alt="Фото авто перевозки 2"
            />
          </div>
        </div>
        <div className={s["switch-block"]}>
          <div className={s["switch-links"]}>
            <ul className={s["link-list"]}>
              <li id="01" onClick={handleClickLink2}>
                <span
                  className={
                    activeId2 === "01" ? s["link-num-pressed"] : s["link-num"]
                  }
                >
                  01
                </span>
                <span
                  className={
                    activeId2 === "01" ? s["link-text-pressed"] : s["link-text"]
                  }
                >
                  Грузы общего назначения
                </span>
              </li>
              <li id="02" onClick={handleClickLink2}>
                <span
                  className={
                    activeId2 === "02" ? s["link-num-pressed"] : s["link-num"]
                  }
                >
                  02
                </span>
                <span
                  className={
                    activeId2 === "02" ? s["link-text-pressed"] : s["link-text"]
                  }
                >
                  Сельскохозяйственная продукция
                </span>
              </li>
              <li id="03" onClick={handleClickLink2}>
                <span
                  className={
                    activeId2 === "03" ? s["link-num-pressed"] : s["link-num"]
                  }
                >
                  03
                </span>
                <span
                  className={
                    activeId2 === "03" ? s["link-text-pressed"] : s["link-text"]
                  }
                >
                  Химические грузы
                </span>
              </li>
              <li id="04" onClick={handleClickLink2}>
                <span
                  className={
                    activeId2 === "04" ? s["link-num-pressed"] : s["link-num"]
                  }
                >
                  04
                </span>
                <span
                  className={
                    activeId2 === "04" ? s["link-text-pressed"] : s["link-text"]
                  }
                >
                  Опасные грузы
                </span>
              </li>
              <li id="05" onClick={handleClickLink2}>
                <span
                  className={
                    activeId2 === "05" ? s["link-num-pressed"] : s["link-num"]
                  }
                >
                  05
                </span>
                <span
                  className={
                    activeId2 === "05" ? s["link-text-pressed"] : s["link-text"]
                  }
                >
                  Негабаритные грузы
                </span>
              </li>
            </ul>
            <ul className={s["link-list"]}>
              <li id="06" onClick={handleClickLink2}>
                <span
                  className={
                    activeId2 === "06" ? s["link-num-pressed"] : s["link-num"]
                  }
                >
                  06
                </span>
                <span
                  className={
                    activeId2 === "06" ? s["link-text-pressed"] : s["link-text"]
                  }
                >
                  Контейнеры
                </span>
              </li>
              <li id="07" onClick={handleClickLink2}>
                <span
                  className={
                    activeId2 === "07" ? s["link-num-pressed"] : s["link-num"]
                  }
                >
                  07
                </span>
                <span
                  className={
                    activeId2 === "07" ? s["link-text-pressed"] : s["link-text"]
                  }
                >
                  Продукты с температурным режимом
                </span>
              </li>
              <li id="08" onClick={handleClickLink2}>
                <span
                  className={
                    activeId2 === "08" ? s["link-num-pressed"] : s["link-num"]
                  }
                >
                  08
                </span>
                <span
                  className={
                    activeId2 === "08" ? s["link-text-pressed"] : s["link-text"]
                  }
                >
                  Техническое оборудование
                </span>
              </li>
              <li id="09" onClick={handleClickLink2}>
                <span
                  className={
                    activeId2 === "09" ? s["link-num-pressed"] : s["link-num"]
                  }
                >
                  09
                </span>
                <span
                  className={
                    activeId2 === "09" ? s["link-text-pressed"] : s["link-text"]
                  }
                >
                  Жидкие грузы
                </span>
              </li>
              <li id="10" onClick={handleClickLink2}>
                <span
                  className={
                    activeId2 === "10" ? s["link-num-pressed"] : s["link-num"]
                  }
                >
                  10
                </span>
                <span
                  className={
                    activeId2 === "10" ? s["link-text-pressed"] : s["link-text"]
                  }
                >
                  Дорожное строительство и тяжелое оборудование
                </span>
              </li>
            </ul>
          </div>
          <div className={s["switch-text"]}>
            <p className={s["switch-text-h"]}>{headText2}</p>
            <p className={s["switch-text-p"]}>{text2}</p>
          </div>
        </div>
      </div>
      <div className={s["about-3"]}>
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
              d="M12.0439 17.1978C11.292 17.1978 10.6353 17.0708 10.0737 16.8169C9.51221 16.5581 9.06787 16.2041 8.74072 15.7549C8.41357 15.3057 8.22314 14.7905 8.16943 14.2095L8.16211 14.1143H9.74414L9.75146 14.1948C9.78564 14.5122 9.90039 14.793 10.0957 15.0371C10.291 15.2812 10.5547 15.4741 10.8867 15.6157C11.2236 15.7524 11.6094 15.8208 12.0439 15.8208C12.4785 15.8208 12.8569 15.7476 13.1792 15.6011C13.5015 15.4497 13.7529 15.2422 13.9336 14.9785C14.1143 14.71 14.2046 14.4048 14.2046 14.063V14.0483C14.2046 13.4526 14.002 12.9961 13.5967 12.6787C13.1914 12.3564 12.6372 12.1953 11.9341 12.1953H10.6523V10.9062H11.8828C12.2881 10.9062 12.6421 10.8354 12.9448 10.6938C13.2476 10.5474 13.4844 10.3472 13.6553 10.0933C13.8262 9.83936 13.9116 9.54883 13.9116 9.22168V9.20703C13.9116 8.86523 13.8384 8.57471 13.6919 8.33545C13.5454 8.09131 13.3306 7.90576 13.0474 7.77881C12.769 7.64697 12.4297 7.58105 12.0293 7.58105C11.6387 7.58105 11.292 7.64697 10.9893 7.77881C10.6865 7.91064 10.4448 8.09863 10.2642 8.34277C10.0835 8.58203 9.97607 8.87012 9.94189 9.20703L9.93457 9.27295H8.38184L8.38916 9.19971C8.44775 8.59912 8.6333 8.0791 8.9458 7.63965C9.26318 7.19531 9.68311 6.85107 10.2056 6.60693C10.7329 6.35791 11.3408 6.2334 12.0293 6.2334C12.7324 6.2334 13.3452 6.35059 13.8677 6.58496C14.3901 6.81934 14.7954 7.14404 15.0835 7.55908C15.3716 7.96924 15.5156 8.44775 15.5156 8.99463V9.00928C15.5156 9.44873 15.418 9.83691 15.2227 10.1738C15.0322 10.5059 14.7686 10.7842 14.4316 11.0088C14.0996 11.2285 13.7188 11.3823 13.2891 11.4702V11.5068C14.0654 11.5703 14.6904 11.8267 15.1641 12.2759C15.6377 12.7251 15.8745 13.3208 15.8745 14.063V14.0776C15.8745 14.6831 15.7109 15.2227 15.3838 15.6963C15.0566 16.165 14.605 16.5337 14.0288 16.8022C13.4575 17.0659 12.7959 17.1978 12.0439 17.1978Z"
              fill="white"
            />
          </svg>
          <div className={s["about-head-1"]}>
            <p className={s["about-h-2"]}>Почему выбирают нас?</p>
            <Image
              className={s["about-img-1"]}
              src={photoAuto3}
              alt="Фото авто перевозки 3"
            />
          </div>
        </div>
        <div className={s["switch-block"]}>
          <div className={s["switch-links"]}>
            <ul className={s["link-list"]}>
              <li id="01" onClick={handleClickLink3}>
                <span
                  className={
                    activeId3 === "01" ? s["link-num-pressed"] : s["link-num"]
                  }
                >
                  01
                </span>
                <span
                  className={
                    activeId3 === "01" ? s["link-text-pressed"] : s["link-text"]
                  }
                >
                  Гибкость и доступность
                </span>
              </li>
              <li id="02" onClick={handleClickLink3}>
                <span
                  className={
                    activeId3 === "02" ? s["link-num-pressed"] : s["link-num"]
                  }
                >
                  02
                </span>
                <span
                  className={
                    activeId3 === "02" ? s["link-text-pressed"] : s["link-text"]
                  }
                >
                  Скорость доставки
                </span>
              </li>
              <li id="03" onClick={handleClickLink3}>
                <span
                  className={
                    activeId3 === "03" ? s["link-num-pressed"] : s["link-num"]
                  }
                >
                  03
                </span>
                <span
                  className={
                    activeId3 === "03" ? s["link-text-pressed"] : s["link-text"]
                  }
                >
                  Перевозка разнообразных грузов
                </span>
              </li>
              <li id="04" onClick={handleClickLink3}>
                <span
                  className={
                    activeId3 === "04" ? s["link-num-pressed"] : s["link-num"]
                  }
                >
                  04
                </span>
                <span
                  className={
                    activeId3 === "04" ? s["link-text-pressed"] : s["link-text"]
                  }
                >
                  Доступность отдаленных мест
                </span>
              </li>
              <li id="05" onClick={handleClickLink3}>
                <span
                  className={
                    activeId3 === "05" ? s["link-num-pressed"] : s["link-num"]
                  }
                >
                  05
                </span>
                <span
                  className={
                    activeId3 === "05" ? s["link-text-pressed"] : s["link-text"]
                  }
                >
                  Отслеживание груза
                </span>
              </li>
            </ul>
          </div>
          <div className={s["switch-text"]}>
            <p className={s["switch-text-h"]}>{headText3}</p>
            <p className={s["switch-text-p"]}>{text3}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
