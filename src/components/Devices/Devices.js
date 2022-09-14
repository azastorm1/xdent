import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Devices.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import Slider from "react-slick";

const Devices = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
  return (
    <div className="devices">
      <div className="container">
        <h1>ОБОРУДОВАНИЕ</h1>
        <div className="row">
          <div className="col-md-6">
            <h5>ФОКУС</h5>
            <div className="focus">
              <p>
                Instrumentarium Dental Focus с его механизмом Anti-Drift
                обеспечивает быструю и легкую запись с высоким качеством.
                Благодаря высокоэффективной экспозиции Focus всегда обеспечивает
                получение успешных изображений с высоким разрешением, сводя при
                этом дозу облучения пациента к абсолютному минимуму. «Выбор
                FOCUS™ означает заботу о ваших пациентах».
              </p>
            </div>
            <h5>ОРТОПАНТОМОГРАММА</h5>
            <div className="ortopanorama">
              <p>
                Ортопантомограммы Instrumentarium — это самые передовые
                записывающие системы на рынке, благодаря своей технологии они
                обеспечивают очень качественный результат с высоким разрешением
                и контрастом. В OP 300 используется новейшая сенсорная
                технология CMOS, что обеспечивает чрезвычайно четкое изображение
                и превосходное отображение мягких тканей. Помимо классических
                панорамных методов съемки возможны и специальные детские
                геометрические проекции, в которых особое внимание уделяется
                снижению дозы облучения при сохранении качества изображения на
                высшем уровне. «ОРТОПАНТОМОГРАФ® OP300 PRO — это наиболее полная
                платформа «3 в 1», разработанная для сегодняшнего и завтрашнего
                дня».
              </p>
            </div>
            <h5>КЛКТ</h5>
            <div className="klakt">
              <p>
                {" "}
                3D Accuitomo 170 является одним из лучших устройств такого рода
                в мире.Передовая технология, используемая в производстве
                Accuitomo 170, позволяет оптимизировать использование
                рентгеновских лучей, что приводит к более четким изображениям и
                лучшему отображению мягких тканей. «ОРТОПАНТОМОГРАФ® OP300 PRO —
                это наиболее полная платформа «3 в 1», разработанная для
                сегодняшнего и завтрашнего дня» (д-р Л. Стивен Бьюкенен). Доза
                облучения снижена на 40% по сравнению с предыдущей моделью
                Accuitomo, которая уже имела очень низкие дозы облучения.
                Усовершенствованные 3D-сенсоры, размер вокселя 80 микрометров и
                разрешение более 2 строк на миллиметр делают Accuitomo одним из
                лучших устройств КЛКТ. Частый вопрос при таком обследовании:
                сколько радиации я действительно получу во время записи? Для
                сравнения будем использовать средние значения и поле размером
                40х40 мм. Одно изображение КЛКТ с Accuitoma 170 излучает:
              </p>
              <ul>
                <li>
                  меньше, чем при классическом сканировании грудной клетки
                </li>
                <li>менее двух стандартных панорамных снимков</li>
                <li>
                  поглощается меньше радиации, чем во время полета между
                  Лос-Анджелесом и Нью-Йорком (космическое излучение)
                </li>
              </ul>
              <p>
                « Поглощенное излучение удивительно мало, что позволяет мне
                сканировать по желанию, не беспокоясь о здоровье моего
                пациента». (Доктор Л. Стивен Бьюкенен) Все вышеперечисленные
                характеристики делают Accuitoma 170 идеальным выбором для
                стоматологической диагностики и, следовательно, лучшим выбором
                для вас.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="message">
              <h6>
                <NavLink to="/contact">
                  Свяжитесь с нами
                  <FontAwesomeIcon icon={faEnvelope} className="fa-3x" />
                </NavLink>
              </h6>
              <Slider {...settings}>
                <img src="https://x-dent.hr/wp-content/uploads/2018/06/oprema2-730x460.jpg" alt="" />
                <img src="https://x-dent.hr/wp-content/uploads/2018/06/oprema1-730x460.jpg" alt="" />
                <img src="https://x-dent.hr/wp-content/uploads/2018/06/oprema4-730x460.jpg" alt="" />
                <img src="https://x-dent.hr/wp-content/uploads/2018/06/oprema3.jpg" alt="" />
                </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Devices;