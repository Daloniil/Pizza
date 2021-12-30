import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavLink, useParams } from "react-router-dom";
import s from "./SliderItem.module.css";
import { useSelector } from "react-redux";
import {
  getdrinks,
  getpizza,
  getsneks,
  getsous,
} from "../../Selectors/Menus-selector";

type numberType = {
  id: any;
};

export const SliderItems = () => {
  const number: numberType = useParams();

  const pizza = useSelector(getpizza);
  const sneks = useSelector(getsneks);
  const drink = useSelector(getdrinks);
  const sous = useSelector(getsous);

  const [prov, setprov] = useState(
    number.id < 21 || (number.id >= 47 && number.id < 52)
      ? pizza
      : (number.id >= 21 && number.id < 27) ||
        (number.id >= 56 && number.id < 60)
      ? drink
      : (number.id >= 27 && number.id < 40) ||
        (number.id >= 52 && number.id < 56)
      ? sneks
      : number.id >= 40 && number.id < 47
      ? sous
      : pizza
  );

  useEffect(() => {
    if (number.id < 21 || (number.id >= 48 && number.id < 52)) {
      setprov(pizza);
    } else if (
      (number.id >= 21 && number.id < 27) ||
      (number.id >= 56 && number.id < 60)
    ) {
      setprov(drink);
    } else if (
      (number.id >= 27 && number.id < 40) ||
      (number.id >= 52 && number.id < 56)
    ) {
      setprov(sneks);
    } else if (number.id >= 40 && number.id < 48) {
      setprov(sous);
    }
  }, [number]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1285,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1092,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className={s.content}>
      <span className={s.about_slider}>Схожі товари</span>

      <Slider {...settings} className={s.slider}>
        {prov.map((u) => (
          <div className={s.item} key={u.id}>
            <NavLink to={"/items/" + u.id} className={s.link}>
              <div>
                <img
                  className={s.photo}
                  src={u.photoURL}
                  alt=""
                  height="75"
                  width="75"
                />
              </div>
              <div className={s.text}>
                <div className={s.name}>{u.name}</div>
                <div className={s.cost}>Від {u.cost} грн</div>
              </div>
            </NavLink>
          </div>
        ))}
      </Slider>
    </div>
  );
};
