import s from "./styles.module.css";

import photoSpectehnika1 from "../../assets/spectehnika-1.webp";
import photoSpectehnika2 from "../../assets/spectehnika-2.webp";
import photoSpectehnika3 from "../../assets/spectehnika-3.webp";
import Image from "next/image";
import MoBlockLineV2 from "@/molecules/block-line-v2";
import MoBlockHeaderH1V2 from "@/molecules/block-header-h1-v2";
import MoNavLinkerV2 from "@/molecules/nav-linker-v2";
import CoBlockServices from "../add-block-services";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weights: "400",
});

export default function ArendaTehnikiIntroV2(props) {
  return (
    <div className={inter.className}>
      <div className={s["margin-top-container"]}>
        <MoBlockHeaderH1V2 text="Аренда спецтехники" />
        <MoNavLinkerV2 text3="Аренда спецтехники" link3="/arenda-spectehniki" />
      </div>
      <div className={s["container"]}>
        <div className={s["intro"]}>
          <div className={s["intro-text"]}>
            <p>
              Наша команда опытных специалистов всегда готова помочь вам с
              выбором подходящей самосвальной техники и ответить на все ваши
              вопросы. Мы стремимся к долгосрочным партнерским отношениям и
              делаем все возможное, чтобы удовлетворить ваши потребности.
            </p>
            <p>
              У нас вы найдете самосвалы различных марок, моделей и
              грузоподъемности. Независимо от масштабов вашего проекта, у нас
              есть подходящая техника для выполнения задач любой сложности.
            </p>
          </div>
          <button className={s["btn-consult-1"]} onClick={props.scrollToForm}>
            Получить консультацию
          </button>
        </div>
      </div>
      <MoBlockLineV2 text="Об услуге" />
      <div className={s["about-container-1"]}>
        <div className={s["about-block-1"]}>
          <Image
            className={s["about-img-1"]}
            src={photoSpectehnika1}
            alt="Фото спецтехники 1"
          />
          <div className={s["about-text-1"]}>
            <p className={s["about-h-1"]}>Типы услуг</p>
            <div className={s["about-list"]}>
              <li>Предоставление в аренду других видов спец техники</li>
              <li>Перевозка вашего сырья, с пункта А в пункт Б, под ключ</li>
            </div>
          </div>
        </div>
      </div>
      <div className={s["about-container-2"]}>
        <div className={s["about-block-2"]}>
          <div className={s["about-text-2"]}>
            <p className={s["about-h-2"]}>Отраслевые решения</p>
            <div className={s["about-block-text-2"]}>
              <p className={s["about-p-2"]}>
                Да, мы можем. Перевозка буровой установки из Канады в Европу или
                доставка циркового оборудования в Казань - развитая
                инфаструктура, опыт и штат высококлассных специалистов позволяют
                нам с успехом реализовывать поставленные задачи
              </p>
              <div className={s["about-list"]}>
                <li>Машиностроение</li>
                <li>Строительство</li>
                <li>Сельское хозяйство</li>
                <li>Автомобильная промышленность</li>
                <li>Топливная промышленность и энергетика</li>
                <li>Химическая и нефтехимическая промышленность</li>
                <li>Нефтегазовая отрасль</li>
                <li>Металлургическая промышленность</li>
                <li>Товары народного потребления</li>
              </div>
            </div>
          </div>
          <Image
            className={s["about-img-2"]}
            src={photoSpectehnika2}
            alt="Фото спецтехники 2"
          />
        </div>
      </div>
      <div className={s["about-container-3"]}>
        <div className={s["about-block-3"]}>
          <Image
            className={s["about-img-3"]}
            src={photoSpectehnika3}
            alt="Фото спецтехники 3"
          />
          <div className={s["about-text-3"]}>
            <p className={s["about-h-3"]}>Почему выбирают нас?</p>
            <div className={s["about-list"]}>
              <li>
                Наша техника расположена по всему Казахстану, что позволяет нам
                решать ваши задачи в максимально короткие сроки
              </li>
              <li>
                Мы доставляем технику в любую точку Казахстана. При перевозках
                на самосвале выполняем перевозку вашего сырья с пункта загрузки
                на пункт выгрузки
              </li>
              <li>
                Средний возраст техники, в том числе самосвалов, составляет
                менее семи лет
              </li>
              <li>
                Мы предостовляем разнообразную спецтехнику, от кранов до
                самосвалов, для решение любой вашей задачи
              </li>
            </div>
            <button className={s["btn-consult-2"]} onClick={props.scrollToForm}>
              Получить консультацию
            </button>
          </div>
        </div>
      </div>
      <MoBlockLineV2 text="Другие услуги" />
      <div className={s["container-uslugi"]}>
        <p className={s["about-h-3"]}>Другие услуги</p>
      </div>
      <CoBlockServices />
    </div>
  );
}
