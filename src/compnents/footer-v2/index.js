import { Inter } from "next/font/google";
import MoLogo from "../logo";
import s from "./styles.module.css";

const inter = Inter({
  subsets: ["latin"],
  weight: "400",
});
function CoFooterV2() {
  return (
    <div className={inter.className}>
      <div className={s["footer"]}>
        <div className={s["footer-l"]}>
          <MoLogo />
          <p className={s["soglasie-p"]}>
            Направляя свою заявку и иные персональные данные по указанным на
            сайте электронным адресам и телефонам, я даю своё согласие на
            обработку
          </p>
        </div>
        <div className={s["footer-r"]}>
          <div className={s["links"]}>
            <div className={s["info"]}>
              <p className={s["info-p"]}>Информация:</p>
              <div className={s["info-links-pos"]}>
                <a className={s["link"]} href="/vidy-perevozok">
                  Услуги
                </a>
                <a className={s["link"]} href="/o-kompanii">
                  О компании
                </a>
                <a className={s["link"]} href="/sertifikaty">
                  Сертификаты
                </a>
                <a className={s["link"]} href="/avtopark">
                  Автопарк
                </a>
                <a className={s["link"]} href="/kontakty">
                  Контакты
                </a>
              </div>
            </div>
            <div className={s["social-sites"]}>
              <p className={s["info-p"]}>Соц. сети:</p>
              <div className={s["info-links-pos"]}>
                <a
                  className={s["link"]}
                  href="https://facebook.com/transline.kz/"
                  target="_blank"
                >
                  Facebook
                </a>
                <a
                  className={s["link"]}
                  href="https://twitter.com/TranslineKz/"
                  target="_blank"
                >
                  Twitter
                </a>
              </div>
            </div>
            <div className={s["contacts"]}>
              <p className={s["info-p"]}>Контакты:</p>
              <div className={s["info-links-pos"]}>
                <a className={s["link"]} href="tel:+7 (707) 367-11-04">
                  +7 (727)-367-11-04
                </a>
                <a className={s["link"]} href="mailto:info@transline.kz">
                  info@transline.kz
                </a>
              </div>
            </div>
          </div>
          <div className={s["contacts-btn"]}>
            <div className={s["contacts-mobile"]}>
              <p className={s["info-p"]}>Контакты:</p>
              <div className={s["info-links-pos"]}>
                <a className={s["link"]} href="tel:+7 (707) 367-11-04">
                  +7 (727)-367-11-04
                </a>
                <a className={s["link"]} href="mailto:info@transline.kz">
                  info@transline.kz
                </a>
              </div>
            </div>
            <button className={s["button-form"]}>Связаться</button>
          </div>
        </div>
      </div>
      <div className={s["under-footer"]}>
        <div className={s["soglasheniya"]}>
          <a className={s["link-soglasie"]}>Пользовательское соглашение</a>
          <a className={s["link-soglasie"]}>Политика конфиденциальности</a>
        </div>
        <p className={s["company-name"]}>ООО “Transline” 2012 — 2023 ©</p>
      </div>
    </div>
  );
}
export default CoFooterV2;
