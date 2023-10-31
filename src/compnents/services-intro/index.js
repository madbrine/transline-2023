import MoNavLinker from "@/molecules/nav-linker";
import { Inter } from "next/font/google";
import s from "./styles.module.css";
import CoSubmitApplication from "../submit-application";
import Image from "next/image";
import photo1 from "../../assets/auto-cargo-new.webp";
import photo2 from "../../assets/multimodal-cargo.webp";
import photo3 from "../../assets/services/negabarit-cargo.webp";
import photo4 from "../../assets/services/avia-cargo.webp";
import photo5 from "../../assets/services/spec-tekhnika.webp";
import photo6 from "../../../public/services/train-service.webp";
import MoBlockHeaderH1 from "@/molecules/block-header-h1";

const inter = Inter({
  subsets: ["latin"],
  weights: "400",
});

function ServicesIntro() {
  return (
    <div className={inter.className}>
      <div className={s["margin-block"]}>
        <MoBlockHeaderH1 text="Услуги" />
        <MoNavLinker text2="Услуги" link2="/vidy-perevozok" />
        <div className={s["container"]}>
          <div className={s["services-intro"]}>
            <p>
              Транспортная группа TRANSLINE предлагает широкий спектр
              логистических решений с использованием возможностей собственного
              автомобильного транспорта в Крупнейших портах Азии и СНГ и
              разветвленной сети представительств по всему миру.
            </p>
            <div className={s["button-1"]}>
              <a>Получить консультацию</a>
            </div>
            <div className={s["button-2"]}>
              <a>Рассчитать</a>
            </div>
          </div>
          <div className={s["line"]} />
          <div className={s["service"]}>
            <div className={s["desc"]}>
              <div>
                <div className={s["h1"]}>Автомобильные перевозки</div>
                <p>
                  Максимальное качество транспортно-экспедиционных услуг при
                  минимальных затратах.
                </p>
              </div>
              <a href="/avtomobilnye-gruzoperevozki">Подробнее</a>
            </div>
            <div className={s["pos-count"]}>
              <div className={s["image"]}>
                <Image src={photo1} alt="Автомобильные перевозки" />
              </div>
              <span>01</span>
            </div>
          </div>
          <div className={s["line"]} />
          <div className={s["service"]}>
            <div className={s["desc"]}>
              <div>
                <div className={s["h1"]}>Мультимодальные перевозки</div>
                <p>
                  Максимальное качество транспортно-экспедиционных услуг при
                  минимальных затратах.
                </p>
              </div>
              <a href="/multimodalnye-gruzoperevozki">Подробнее</a>
            </div>
            <div className={s["pos-count"]}>
              <div className={s["image"]}>
                <Image src={photo2} alt="Автомобильные перевозки" />
              </div>
              <span>02</span>
            </div>
          </div>
          <div className={s["line"]} />
          <div className={s["service"]}>
            <div className={s["desc"]}>
              <div>
                <div className={s["h1"]}>Негабаритные перевозки</div>
                <p>
                  Максимальное качество транспортно-экспедиционных услуг при
                  минимальных затратах.
                </p>
              </div>
              <a href="/perevozka-negabaritnyh-gruzov">Подробнее</a>
            </div>
            <div className={s["pos-count"]}>
              <div className={s["image"]}>
                <Image src={photo3} alt="Автомобильные перевозки" />
              </div>
              <span>03</span>
            </div>
          </div>
          <div className={s["line"]} />
          <div className={s["service"]}>
            <div className={s["desc"]}>
              <div>
                <div className={s["h1"]}>Авиа перезвозки</div>
                <p>
                  Максимальное качество транспортно-экспедиционных услуг при
                  минимальных затратах.
                </p>
              </div>
              <a href="/aviaperevozki">Подробнее</a>
            </div>
            <div className={s["pos-count"]}>
              <div className={s["image"]}>
                <Image src={photo4} alt="Автомобильные перевозки" />
              </div>
              <span>04</span>
            </div>
          </div>
          <div className={s["line"]} />
          <div className={s["service"]}>
            <div className={s["desc"]}>
              <div>
                <div className={s["h1"]}>Аренда спецтехники</div>
                <p>
                  Максимальное качество транспортно-экспедиционных услуг при
                  минимальных затратах.
                </p>
              </div>
              <a href="/arenda-spectehniki">Подробнее</a>
            </div>
            <div className={s["pos-count"]}>
              <div className={s["image"]}>
                <Image src={photo5} alt="Автомобильные перевозки" />
              </div>
              <span>05</span>
            </div>
          </div>
          <div className={s["line"]} />
          <div className={s["service"]}>
            <div className={s["desc"]}>
              <div>
                <div className={s["h1"]}>Железнодорожные перевозки</div>
                <p>
                  Максимальное качество транспортно-экспедиционных услуг при
                  минимальных затратах.
                </p>
              </div>
              <a href="/zheleznodorozhnye-perevozki">Подробнее</a>
            </div>
            <div className={s["pos-count"]}>
              <div className={s["image"]}>
                <Image src={photo6} alt="Автомобильные перевозки" />
              </div>
              <span>06</span>
            </div>
          </div>
          {/* <div className={s['line']} /> */}
          {/* <div className={s['service']}>
                        <div className={s['desc']}>
                            <div>
                                <h1>Складские услуги</h1>
                                <p>Максимальное качество транспортно-экспедиционных услуг при минимальных затратах.</p>
                            </div>
                            <a href="/">Подробнее</a>
                        </div>
                        <div className={s['pos-count']}>
                            <div className={s['img']} />
                            <span>07</span>
                        </div>
                    </div> */}
          {/* <div className={s['line']} />
                    <div className={s['service']}>
                        <div className={s['desc']}>
                            <div>
                                <h1>Таможенное оформление</h1>
                                <p>Максимальное качество транспортно-экспедиционных услуг при минимальных затратах.</p>
                            </div>
                            <a>Подробнее</a>
                        </div>
                        <div className={s['pos-count']}>
                            <div className={s['img']} />
                            <span>08</span>
                        </div>
                    </div> */}
        </div>
        <CoSubmitApplication />
      </div>
    </div>
  );
}

export default ServicesIntro;
