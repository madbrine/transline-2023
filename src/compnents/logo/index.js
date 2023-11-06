import Image from "next/image";
import logo from "./logo.svg";
import s from "./styles.module.css";

function MoLogo() {
  return (
    <a href="/">
      <Image
        src={logo}
        className={s["container"]}
        alt="Логотип компании Транслайн"
      ></Image>
    </a>
  );
}
export default MoLogo;
