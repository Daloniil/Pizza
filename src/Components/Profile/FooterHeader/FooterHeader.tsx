import s from "./StyleFooterHeader/FooterHeader.module.css";
import React from "react";

const FooterHeader: React.FC = () => {
  return (
    <div className={s.footer_header}>
      <div className={s.footer_header_header}>
        <h2>Розказати вам?</h2>
        <span>Як ми робимо нашу піцу</span>
        <p>
          Ми пишаємося своєю піцою. Це, без перебільшення, витвір <br />{" "}
          мистецтва. Тож ділимося з Вами найбільшою таємницею: як ми це <br />{" "}
          робимо.
        </p>
      </div>
      <div className={s.footer_header_center_container}>
        <div className={s.footer_header_center}>
          <div className={s.footer_header_center_left}>
            <div className={s.footer_header_center_left_up}>
              <img
                src="https://pizzatime.com.ua/wp-content/uploads/2020/11/secret_1.png"
                alt=""
              />
              <span> 1.Тісто</span>
              <p>Маємо свій власний фірмовий рецепт виготовлення тіста</p>
            </div>
            <div className={s.footer_header_center_left_down}>
              <img
                src="https://pizzatime.com.ua/wp-content/uploads/2020/11/secret_2.png"
                alt=""
              />
              <span>2.Інгрідієнти</span>
              <p>Використовуємо найсвіжіші овочі, зелень та сири.</p>
            </div>
          </div>
          <div className={s.footer_header_center_center}>
            <img
              src="https://pizzatime.com.ua/wp-content/uploads/2020/11/how_we_made_our_pizza.jpg"
              alt=""
            />
          </div>
          <div className={s.footer_header_center_right}>
            <div className={s.footer_header_center_right_up}>
              <img
                src="https://pizzatime.com.ua/wp-content/uploads/2020/11/secret_3.png"
                alt=""
              />
              <span>3.Майстерність</span>
              <p>Золоті руки нашого піцейоли роблять магію.</p>
            </div>
            <div className={s.footer_header_center_right_down}>
              <img
                src="https://pizzatime.com.ua/wp-content/uploads/2020/11/secret_4.png"
                alt=""
              />
              <span>4.Випікання</span>
              <p>Унікальна технологія випікання на камені..</p>
            </div>
          </div>
        </div>
      </div>

      <div className={s.footer_header_wave}></div>
    </div>
  );
};
export default FooterHeader;
