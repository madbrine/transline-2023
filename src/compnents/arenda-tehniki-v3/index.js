import s from "./styles.module.css";
import Image from "next/image";
import MoBlockLineV2 from "@/molecules/block-line-v2";
import MoBlockHeaderH1V2 from "@/molecules/block-header-h1-v2";
import MoNavLinkerV2 from "@/molecules/nav-linker-v2";
import CoBlockServices from "../add-block-services";
import { Inter } from "next/font/google";
import { useState } from "react";

import photoSpectehnika1 from "../../assets/spectehnika-1.webp";
import photoSpectehnika2 from "../../assets/spectehnika-2.webp";
import photoSpectehnika3 from "../../assets/spectehnika-3.webp";

const inter = Inter({
  subsets: ["latin"],
  weights: "400",
});

export default function ArendaTehnikiIntroV3(props) {
  const dataText = {
    "01": "Тяжелые строительные машины, краны, бульдозеры, экскаваторы, бетоносмесители и другое строительное оборудование.",
    "02": "Аренда экскаваторов, бульдозеров, грейдеров и погрузчиков для земельных работ и строительства.\nБетононасосы и бетоносмесители для бетонных работ.\nКраны для поднятия и перемещения тяжелых строительных материалов.",
    "03": "Аренда тракторов, комбайнов и оборудования для посева, уборки урожая и обработки почвы.\nСпециализированное оборудование для животноводства и сельскохозяйственных операций.",
    "04": "Автокраны, станции для ремонта и обслуживания автомобилей, оборудование для монтажа и сборки автодеталей.",
    "05": "Аренда техники для добычи топлива, транспортировки и хранения топливных материалов.",
    "06": "Оборудование для химической обработки сырья и производства химических продуктов.\nТехника для транспортировки и хранения химических веществ.",
    "07": "Генераторы и электростанции для обеспечения энергоснабжения на объектах добычи нефти и газа.\nБуровые установки и подъемное оборудование для нефтяных и газовых вышек.",
    "08": "Аренда металлообрабатывающих станков, сварочного оборудования и подъемных машин для производства и обработки металлических деталей.",
    "09": "Спецтехника для складских операций, транспортировки товаров и логистики.",
  };
  const [text, setText] = useState(
    "Тяжелые строительные машины, краны, бульдозеры, экскаваторы, бетоносмесители и другое строительное оборудование."
  );
  const [activeId, setActiveId] = useState("01");

  const handleClickLink = (e) => {
    const id = e.target.parentElement.id;
    setText(dataText[id]);
    setActiveId(id);
  };

  return (
    <div className={inter.className}>
      <div className={s["intro"]}>
        <MoNavLinkerV2
          text3="Аренда спецтехники"
          link3="/arenda-specztehniki"
        />
        <div className={s["intro-text"]}>
          <MoBlockHeaderH1V2 text="Аренда спецтехники" />
          <p className={s["intro-p"]}>
            Мы предоставляем вам широкий выбор специализированной техники,
            которая поможет вам реализовать проекты эффективно и в срок.
            Сотрудничая с нами, вы получаете доступ к современной технике и
            профессиональному сервису, который поддерживает ваш бизнес на пути к
            успеху.
          </p>
          <button onClick={props.scrollToForm} className={s["btn-consult"]}>
            Получить консультацию
          </button>
        </div>
      </div>
      <MoBlockLineV2 text="Об услуге" />
      <div className={s["about-1"]}>
        <div className={s["about-block-1"]}>
          <div className={s["about-num-1"]}>
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
          </div>
          <div className={s["about-text-1"]}>
            <p className={s["about-h-1"]}>Виды услуг</p>
            <div className={s["about-list"]}>
              <li>Предоставление в аренду других видов спец техники</li>
              <li>Перевозка вашего сырья, с пункта А в пункт Б, под ключ</li>
            </div>
          </div>
        </div>
        <div className={s["about-block-2"]}>
          <div className={s["about-card-1"]}>
            <Image
              className={s["about-img-1"]}
              src={photoSpectehnika1}
              alt="Фото спецтехники 1"
            />
            <div>
              <p className={s["about-h2-1"]}>Автокраны</p>
              <p className={s["about-p-1"]}>
                Мы предлагаем высокотехнологичные автокраны, предназначенные для
                различных задач подъема и перевозки. Наша техника обеспечивает
                надежность, производительность и безопасность в каждой работе.
              </p>
            </div>
          </div>
          <div className={s["about-card-2"]}>
            <Image
              className={s["about-img-1"]}
              src={photoSpectehnika2}
              alt="Фото спецтехники 2"
            />
            <div>
              <p className={s["about-h2-1"]}>Самосвалы</p>
              <p className={s["about-p-1"]}>
                Мы предоставляем современные и надежные самосвалы для
                эффективных грузоперевозок. Наши автомобили разработаны, чтобы
                справляться с самыми сложными задачами и удовлетворять
                потребности наших клиентов.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={s["about-2"]}>
        <div className={s["about-desc-2"]}>
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
          <div className={s["about-text-2"]}>
            <div>
              <p className={s["about-h-2"]}>Отраслевые решения</p>
              <p className={s["about-p-2"]}>
                Да, мы можем. Перевозка буровой установки из Канады в Европу или
                доставка циркового оборудования в Казань - развитая
                инфаструктура, опыт и штат высококлассных специалистов позволяют
                нам с успехом реализовывать поставленные задачи
              </p>
            </div>
            <Image
              className={s["about-img-2"]}
              src={photoSpectehnika3}
              alt="Фото спецтехники 3"
            />
          </div>
        </div>
        <div className={s["switch-block"]}>
          <div className={s["switch-links"]}>
            <div className={s["link-list"]}>
              <li id="01" onClick={handleClickLink}>
                <span
                  className={
                    activeId === "01" ? s["link-num-pressed"] : s["link-num"]
                  }
                >
                  01
                </span>
                <span className={s["link-text"]}>Машиностроение</span>
              </li>
              <li id="02" onClick={handleClickLink}>
                <span
                  className={
                    activeId === "02" ? s["link-num-pressed"] : s["link-num"]
                  }
                >
                  02
                </span>
                <span className={s["link-text"]}>Строительство</span>
              </li>
              <li id="03" onClick={handleClickLink}>
                <span
                  className={
                    activeId === "03" ? s["link-num-pressed"] : s["link-num"]
                  }
                >
                  03
                </span>
                <span className={s["link-text"]}>Сельское хозяйство</span>
              </li>
              <li id="04" onClick={handleClickLink}>
                <span
                  className={
                    activeId === "04" ? s["link-num-pressed"] : s["link-num"]
                  }
                >
                  04
                </span>
                <span className={s["link-text"]}>
                  Автомобильная промышленность
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
                <span className={s["link-text"]}>
                  Топливная промышленность и энергетика
                </span>
              </li>
            </div>
            <div className={s["link-list"]}>
              <li id="06" onClick={handleClickLink}>
                <span
                  className={
                    activeId === "06" ? s["link-num-pressed"] : s["link-num"]
                  }
                >
                  06
                </span>
                <span className={s["link-text"]}>
                  Химическая и нефтехимическая промышленность
                </span>
              </li>
              <li id="07" onClick={handleClickLink}>
                <span
                  className={
                    activeId === "07" ? s["link-num-pressed"] : s["link-num"]
                  }
                >
                  07
                </span>
                <span className={s["link-text"]}>Нефтегазовая отрасль</span>
              </li>
              <li id="08" onClick={handleClickLink}>
                <span
                  className={
                    activeId === "08" ? s["link-num-pressed"] : s["link-num"]
                  }
                >
                  08
                </span>
                <span className={s["link-text"]}>
                  Металлургическая промышленность
                </span>
              </li>
              <li id="09" onClick={handleClickLink}>
                <span className={s["link-num"]}>09</span>
                <span className={s["link-text"]}>
                  Товары народного потребления
                </span>
              </li>
            </div>
          </div>
          <div className={s["switch-text"]}>
            <p className={s["switch-text-h"]}>Машиностроение</p>
            <p className={s["switch-text-p"]}>{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
