import React, { useState } from "react";
import axios from "axios";
import MoBlockLine from "@/molecules/block-line";
import { Inter } from "next/font/google";
import s from "./styles.module.css";
import validator from "validator";
import InputMask from "react-input-mask";
import { useRouter } from "next/router";
import MoBlockLineV2 from "@/molecules/block-line-v2";

const interM = Inter({
  subsets: ["latin"],
  weight: "500",
});
const inter = Inter({
  subsets: ["latin"],
  weight: "400",
});

function CoSubmitApplication(props) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    comments: "",
  });

  const [errors, setErrors] = useState({});

  const [isFormValid, setIsFormValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    const validationErrors = validateForm({
      ...formData,
      [name]: value,
    });

    const hasErrors = Object.values(validationErrors).some(
      (error) => error !== ""
    );
    setIsFormValid(!hasErrors);
  };

  const router = useRouter();

  const handleSubmit = async (e) => {
    ym(22331872, "reachGoal", "konsult");
    ga("send", "event", "form", "sent", "vnizy");
    e.preventDefault();

    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      // Отправка данных формы на сервер
      await axios.post("https://transline.kz:4444/api/submit-form", formData);
      router.push("/spasibo");
    } catch (error) {
      console.error("Ошибка при отправке заявки:", error);
      console.log("Содержимое ошибки:", error.response.data);

      // Оповещение об ошибке при отправке заявки
      alert("Произошла ошибка при отправке заявки");
    }
  };

  const validateForm = (data) => {
    const errors = {};

    if (validator.isEmpty(data.name)) {
      errors.name = "Введите имя";
    }

    if (validator.isEmpty(data.phone)) {
      errors.phone = "Введите корректный номер телефона";
    }

    if (!validator.isEmail(data.email)) {
      errors.email = "Введите корректный email";
    }

    return errors;
  };

  return (
    <div className={inter.className} ref={props.formRef}>
      <MoBlockLineV2 text="Оставить заявку" />
      <div className={s["block-pos"]}>
        <div className={s["container-width"]}>
          <p className={s["container-width-h"]}>Получить консультацию</p>
          <div className={s["social-sites"]}>
            <div className={s["social-sites-block"]}>
              <p className={s["social-sites-h"]}>Соц. сети:</p>
              <div className={s["social-sites-pos"]}>
                <a
                  className={s["social-sites-p"]}
                  href="https://facebook.com/transline.kz/"
                  target="_blank"
                >
                  Facebook
                </a>
                <a
                  className={s["social-sites-p"]}
                  href="https://twitter.com/TranslineKz/"
                  target="_blank"
                >
                  Twitter
                </a>
              </div>
            </div>
            <div className={s["social-sites-block"]}>
              <p className={s["social-sites-h"]}>Контакты:</p>
              <div>
                <div className={s["social-sites-pos"]}>
                  <a
                    className={s["social-sites-p"]}
                    href="tel:+7 (707) 367-11-04"
                  >
                    +7 (727)-367-11-04
                  </a>
                  <a
                    className={s["social-sites-p"]}
                    href="mailto:info@transline.kz"
                  >
                    info@transline.kz
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <form className={s["contacts-and-form-finish"]}>
          <div className={s["form-input-container"]}>
            <input
              className={s["form-input"]}
              placeholder="Имя"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {/* {errors.name && (
              <div className={s["error-message"]}>{errors.name}</div>
            )} */}
            <InputMask
              mask="+7 (999) 999-99-99"
              value={formData.phone}
              onChange={handleChange}
            >
              {(inputProps) => (
                <input
                  {...inputProps}
                  className={`${s["form-input"]} ${
                    errors.phone ? s["error"] : ""
                  }`}
                  placeholder="Телефон"
                  name="phone"
                />
              )}
            </InputMask>
            {/* {errors.phone && (
              <div className={s["error-message"]}>{errors.phone}</div>
            )} */}
            <input
              className={s["form-input"]}
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {/* {errors.email && (
              <div className={s["error-message"]}>{errors.email}</div>
            )} */}
            <input
              className={s["form-input"]}
              placeholder="Коментарии (не обязательно)"
              name="comments"
              value={formData.comments}
              onChange={handleChange}
            />
          </div>
          <div className={s["form-input-button-container"]}>
            <button
              type="submit"
              onClick={handleSubmit}
              disabled={!isFormValid}
            >
              Отправить
            </button>
            <div className={s["form-input-button-desc"]}>
              <a className={s["personal-data-p"]}>
                Нажимая “Отправить” вы соглашаетесь с обработкой персональных
                данных
              </a>
            </div>
          </div>
        </form>
      </div>
      <div className={s["line-gray"]} />
    </div>
  );
}
export default CoSubmitApplication;
