import { Inter } from "next/font/google";
import s from "./styles.module.css";

const interM = Inter({
  subsets: ["latin"],
  weight: "500",
});
const inter = Inter({
  subsets: ["latin"],
  weight: "400",
});

function MoBlockHeaderH1V2(props) {
  return (
    <div className={s["container"]}>
      <h1 className={inter.className} id={s["h1_style"]}>
        {props.text}
      </h1>
    </div>
  );
}
export default MoBlockHeaderH1V2;
