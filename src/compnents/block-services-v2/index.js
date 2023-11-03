import { Inter } from "next/font/google";
import s from "./styles.module.css";
import Image from "next/image";
import photo1 from "../../assets/auto-uslugi.webp";
import photo2 from "../../assets/multimodal-uslugi.webp";
import photo3 from "../../assets/avia-uslugi.webp";
import photo4 from "../../assets/negabarit-uslugi.webp";
import photo5 from "../../assets/jd-uslugi.webp";
import photo6 from "../../assets/arenda-spectehniki-intro.webp";
import { useState, useRef } from "react";
import MoBlockLineV2 from "@/molecules/block-line-v2";

const inter = Inter({
  subsets: ["latin"],
  weights: "400",
});

export default function CoBlockServicesV2() {
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);

  const scrollLeft = () => {
    containerRef.current.scrollBy({ left: -500, behavior: "smooth" });
  };
  const scrollRight = () => {
    containerRef.current.scrollBy({ left: 500, behavior: "smooth" });
  };

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

  return (
    <div className={inter.className}>
      <MoBlockLineV2 text="Другие услуги" />
      <div className={s["head-block-services"]}>
        <p className={s["head-h"]}>Другие услуги</p>
        <div className={s["btn-head"]}>
          <a className={s["btn-all-services"]} href="/vidy-perevozok">
            Все услуги
          </a>
          <div className={s["btn-arrow"]}>
            <button onClick={scrollLeft}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
              >
                <path
                  d="M7.17135 11.9167L11.663 16.4084C11.8464 16.5917 11.9342 16.8056 11.9266 17.05C11.9189 17.2945 11.8234 17.5084 11.6401 17.6917C11.4568 17.8597 11.2429 17.9476 10.9984 17.9552C10.754 17.9629 10.5401 17.875 10.3568 17.6917L4.30677 11.6417C4.2151 11.55 4.15017 11.4507 4.11198 11.3438C4.07378 11.2368 4.05469 11.1222 4.05469 11C4.05469 10.8778 4.07378 10.7632 4.11198 10.6563C4.15017 10.5493 4.2151 10.45 4.30677 10.3584L10.3568 4.30836C10.5248 4.1403 10.7349 4.05627 10.987 4.05627C11.2391 4.05627 11.4568 4.1403 11.6401 4.30836C11.8234 4.49169 11.9151 4.7094 11.9151 4.96148C11.9151 5.21357 11.8234 5.43127 11.6401 5.61461L7.17135 10.0834H17.4151C17.6748 10.0834 17.8925 10.1712 18.0682 10.3469C18.2439 10.5226 18.3318 10.7403 18.3318 11C18.3318 11.2597 18.2439 11.4775 18.0682 11.6531C17.8925 11.8288 17.6748 11.9167 17.4151 11.9167H7.17135Z"
                  fill="#00ACCD"
                />
              </svg>
            </button>
            <button onClick={scrollRight}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
              >
                <path
                  d="M14.8245 11.9166H4.58073C4.32101 11.9166 4.1033 11.8288 3.9276 11.6531C3.75191 11.4774 3.66406 11.2597 3.66406 11C3.66406 10.7403 3.75191 10.5225 3.9276 10.3469C4.1033 10.1712 4.32101 10.0833 4.58073 10.0833H14.8245L10.3328 5.59164C10.1495 5.40831 10.0616 5.19442 10.0693 4.94998C10.0769 4.70553 10.1724 4.49164 10.3557 4.30831C10.5391 4.14026 10.753 4.05241 10.9974 4.04477C11.2418 4.03713 11.4557 4.12498 11.6391 4.30831L17.6891 10.3583C17.7807 10.45 17.8457 10.5493 17.8839 10.6562C17.922 10.7632 17.9411 10.8778 17.9411 11C17.9411 11.1222 17.922 11.2368 17.8839 11.3437C17.8457 11.4507 17.7807 11.55 17.6891 11.6416L11.6391 17.6916C11.471 17.8597 11.2609 17.9437 11.0089 17.9437C10.7568 17.9437 10.5391 17.8597 10.3557 17.6916C10.1724 17.5083 10.0807 17.2906 10.0807 17.0385C10.0807 16.7864 10.1724 16.5687 10.3557 16.3854L14.8245 11.9166Z"
                  fill="#00ACCD"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div
        ref={containerRef}
        className={s["block-services"]}
        onMouseDown={onDragStart}
        onMouseUp={onDragEnd}
        onMouseLeave={onDragEnd}
        onMouseMove={onDragMove}
        style={{
          cursor: isDragging ? "grabbing" : "grab",
        }}
      >
        <div className={s["service"]}>
          <a href="/avtomobilnye-gruzoperevozki">
            <Image
              className={s["service-image"]}
              src={photo1}
              alt="Фото автомобильные перевозки"
            />
          </a>
          <div className={s["text"]}>
            <a className={s["h2"]} href="/avtomobilnye-gruzoperevozki">
              Автомобильные перевозки
            </a>
            <p>Быстрые и надежные автомобильные перевозки для вашего груза</p>
          </div>
        </div>
        <div className={s["service"]}>
          <a href="/multimodalnye-gruzoperevozki">
            <Image
              className={s["service-image"]}
              src={photo2}
              alt="Фото мультимодальные перевозки"
            />
          </a>
          <div className={s["text"]}>
            <a className={s["h2"]} href="/multimodalnye-gruzoperevozki">
              Мультимодальные перевозки
            </a>
            <p>
              Расширьте возможности с мультимодальными перевозками.
              Эффективность и разнообразие логистики
            </p>
          </div>
        </div>
        <div className={s["service"]}>
          <a href="/aviaperevozki">
            <Image
              className={s["service-image"]}
              src={photo3}
              alt="Фото авиа перевозки"
            />
          </a>
          <div className={s["text"]}>
            <a className={s["h2"]} href="/aviaperevozki">
              Авиа перевозки
            </a>
            <p>
              Быстрые и глобальные авиаперевозки для экспресс-логистики и
              международной доставки
            </p>
          </div>
        </div>
        <div className={s["service"]}>
          <a href="/perevozka-negabaritnyh-gruzov">
            <Image
              className={s["service-image"]}
              src={photo4}
              alt="Фото негабаритные перевозки"
            />
          </a>
          <div className={s["text"]}>
            <a className={s["h2"]} href="/perevozka-negabaritnyh-gruzov">
              Негабаритные перевозки
            </a>
            <p>
              Надежные негабаритные перевозки – ваш выбор для крупных грузов
            </p>
          </div>
        </div>
        <div className={s["service"]}>
          <a href="/zheleznodorozhnye-perevozki">
            <Image
              className={s["service-image"]}
              src={photo5}
              alt="Фото железнодорожные перевозки"
            />
          </a>
          <div className={s["text"]}>
            <a className={s["h2"]} href="/zheleznodorozhnye-perevozki">
              Железнодорожные перевозки
            </a>
            <p>
              Надежные железнодорожные перевозки для эффективной грузоперевозки
              и логистики
            </p>
          </div>
        </div>
        <div className={s["service"]}>
          <a href="/arenda-specztehniki">
            <Image
              className={s["service-image"]}
              src={photo6}
              alt="Фото аренда спецтехники"
            />
          </a>
          <div className={s["text"]}>
            <a className={s["h2"]} href="/arenda-specztehniki">
              Аренда спецтехники
            </a>
            <p>
              Аренда спецтехники: мощные решения для вашего строительства и
              логистики
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
