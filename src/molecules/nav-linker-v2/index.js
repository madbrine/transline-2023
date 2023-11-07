import { Inter } from "next/font/google";
import s from "./styles.module.css";

const inter = Inter({
  subsets: ["latin"],
  weight: "400",
});

function MoNavLinkerV2(props) {
  return (
    <div className={inter.className}>
      <div className={s["container"]}>
        <div className={s["line"]} />
        <div className={s["bar"]}>
          <div className={s["nav-pos"]}>
            <a href="/">Главная</a>
            <div className={s["icon"]}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="none"
                className={s["size-icon"]}
              >
                <path
                  d="M6.66656 4.00012L5.72656 4.94012L8.7799 8.00012L5.72656 11.0601L6.66656 12.0001L10.6666 8.00012L6.66656 4.00012Z"
                  fill="#fff"
                />
              </svg>
            </div>
          </div>
          <div className={s["nav-pos"]}>
            <a href={props.link2}>{props.text2}</a>
          </div>
          {props.text3 && (
            <>
              <div className={s["nav-pos"]}>
                <a href="/vidy-perevozok">Услуги</a>
                <div className={s["icon"]}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="none"
                    className={s["size-icon"]}
                  >
                    <path
                      d="M6.66656 4.00012L5.72656 4.94012L8.7799 8.00012L5.72656 11.0601L6.66656 12.0001L10.6666 8.00012L6.66656 4.00012Z"
                      fill="#fff"
                    />
                  </svg>
                </div>
              </div>
              <div className={s["nav-pos"]}>
                <a href={props.link3} className={s["text"]}>
                  {props.text3}
                </a>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
export default MoNavLinkerV2;
