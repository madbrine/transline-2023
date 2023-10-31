import { Inter } from "next/font/google";
import MoBlockLine from "@/molecules/block-line";
import s from "./styles.module.css";
import Image from "next/image";
import photo1 from "../../assets/auto-cargo-new.webp";
import photo2 from "../../assets/multimodal-cargo.webp";
import photo3 from "../../assets/services/avia-cargo.webp";
import photo4 from "../../assets/services/train-cargo.webp";
import photo5 from "../../assets/services/negabarit-cargo.webp";
import photo6 from "../../assets/services/spec-tekhnika.webp";
import Link from "next/link";
import { useState, useRef } from "react";

const inter = Inter({
  subsets: ["latin"],
  weights: "400",
});

export default function CoBlockServices() {
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
      <div
        ref={containerRef}
        className={s["block-services"]}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        style={{
          cursor: isDragging ? "grabbing" : "grab",
        }}
      >
        <div className={s["service"]} id={s["margin-left"]}>
          <div className={s["service-image"]}>
            <Image
              src={photo1}
              objectFit="cover"
              layout="fill"
              style={{ borderRadius: "20px" }}
            />
          </div>
          <div className={s["text"]}>
            <div>
              <div className={s["h2"]}>Автомобильные перевозки</div>
              <p>
                Наша глобальная сеть обеспечивает доставку грузов наших клиентов
                по всему миру
              </p>
            </div>
            <a href="/avtomobilnye-gruzoperevozki">Узнать больше</a>
          </div>
        </div>
        <div className={s["service"]}>
          <div className={s["service-image"]}>
            <Image
              src={photo2}
              objectFit="cover"
              layout="fill"
              style={{ borderRadius: "20px" }}
            />
          </div>
          <div className={s["text"]}>
            <div>
              <div className={s["h2"]}>Мультимодальные перевозки</div>
              <p>
                Позвольте нам помочь вам донести ваши продукты и идеи до всего
                мира
              </p>
            </div>
            <a href="/multimodalnye-gruzoperevozki">Узнать больше</a>
          </div>
        </div>
        <div className={s["service"]}>
          <div className={s["service-image"]}>
            <Image
              src={photo3}
              objectFit="cover"
              layout="fill"
              style={{ borderRadius: "20px" }}
            />
          </div>
          <div className={s["text"]}>
            <div>
              <div className={s["h2"]}>Авиа перевозки</div>
              <p>
                Мы обладаем знаниями, необходимыми для обслуживания широкого
                спектра отраслей
              </p>
            </div>
            <a href="/aviaperevozki">Узнать больше</a>
          </div>
        </div>
        <div className={s["service"]}>
          <div className={s["service-image"]}>
            <Image
              src={photo4}
              objectFit="cover"
              layout="fill"
              style={{ borderRadius: "20px" }}
            />
          </div>
          <div className={s["text"]}>
            <div>
              <div className={s["h2"]}>Железнодорожные перевозки</div>
              <p>
                Воспользуйтесь нашей железнодорожной сетью, чтобы соединить вашу
                цепочку поставок с основными экономическими регионами по всему
                миру.
              </p>
            </div>
            <a href="/zheleznodorozhnye-perevozki">Узнать больше</a>
          </div>
        </div>
        <div className={s["service"]}>
          <div className={s["service-image"]}>
            <Image
              src={photo5}
              objectFit="cover"
              layout="fill"
              style={{ borderRadius: "20px" }}
            />
          </div>
          <div className={s["text"]}>
            <div>
              <div className={s["h2"]}>Негабаритные перевозки</div>
              <p>
                Мы осуществляем перевозки негабаритных грузов морским,
                железнодорожным и автомобильным транспортом.{" "}
              </p>
            </div>
            <a href="perevozka-negabaritnyh-gruzov">Узнать больше</a>
          </div>
        </div>
        <div className={s["service"]} id={s["margin-right"]}>
          <div className={s["service-image"]}>
            <Image
              src={photo6}
              objectFit="cover"
              layout="fill"
              style={{ borderRadius: "20px" }}
            />
          </div>
          <div className={s["text"]}>
            <div>
              <div className={s["h2"]}>Аренда спец. техники</div>
              <p>
                У нас вы найдете самосвалы различных марок, моделей и
                грузоподъемности.{" "}
              </p>
            </div>
            <a href="/arenda-spectehniki">Узнать больше</a>
          </div>
        </div>
      </div>
    </div>
  );
}
