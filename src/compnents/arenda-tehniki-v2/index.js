import { Inter } from "next/font/google";
import s from "./styles.module.css";

import photoSpectehnika1 from "../../assets/spectehnika-1.webp";
import photoSpectehnika2 from "../../assets/spectehnika-2.webp";
import photoSpectehnika3 from "../../assets/spectehnika-3.webp";
import Image from "next/image";
import MoBlockHeaderH1 from "@/molecules/block-header-h1";
import MoNavLinker from "@/molecules/nav-linker";
import MoBlockLine from "@/molecules/block-line";
import MoBlockLineV2 from "@/molecules/block-line-v2";
import MoBlockHeaderH1V2 from "@/molecules/block-header-h1-v2";

const inter = Inter({
  subsets: ["latin"],
  weights: "400",
});

export default function ArendaTehnikiIntroV2() {
  return (
    <div className={inter.className}>
      <div className={s["margin-top-container"]}>
        <MoBlockHeaderH1V2 text="Аренда спецтехники" />
        <MoNavLinker text3="Аренда спецтехники" link3="/arenda-spectehniki" />
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
          <a>Получить консультацию</a>
        </div>
      </div>
      <MoBlockLineV2 text="Об услуге" />
    </div>
  );
}
