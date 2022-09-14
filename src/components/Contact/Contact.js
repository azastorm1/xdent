import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { useState } from "react";

const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3oue2zz",
        "template_ysh38hc",
        form.current,
        "NW5o2hTetWHVGwLGa"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact">
      <div className="container">
        <h1>КОНТАКТ</h1>
        <div className="row">
          <div className="col-md-6">
            <form ref={form} onSubmit={sendEmail}>
              <div className="row">
                <div className="col-md-6">
                  <p>ВЫБИРАТЬ*</p>
                  <select
                    name="user_office"
                    type="text"
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option value="Река">Река</option>
                    <option value="Расколоть">Расколоть</option>
                    <option value="Загреб">Загреб</option>
                  </select>
                  <br />
                  <p id="send-p">ЭЛ. АДРЕС*</p>
                  <input
                    name="user_email"
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="col-md-6">
                  <p id="send-p">ИМЯ И ФАМИЛИЯ*</p>
                  <input
                    name="user_name"
                    type="name"
                    class="form-control"
                    id="exampleInputName1"
                    aria-describedby="Name"
                  />
                  <br />
                  <p id="send-p">ТЕЛЕФОН</p>
                  <input
                    name="user_phone"
                    type="phone"
                    class="form-control"
                    id="exampleInputPhone1"
                    aria-describedby="Phone"
                  />
                </div>
                <p id="send-p">ТВОЕ СООБЩЕНИЕ*:</p>
                <textarea
                  name="message"
                  type="message"
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="6"
                ></textarea>
                <button
                  type="submit"
                  value="Send"
                  id="danger"
                  class="btn btn-danger"
                >
                  ОТПРАВИТЬ
                </button>
                <br />
                <h4 id="thnx">{done && "Thank you..."}</h4>
              </div>
            </form>
          </div>
          <div className="col-md-6">
            <div className="contacts">
              <div className="river-contact">
                <h3>РЕКА ИКС-ДЕНТ</h3>
                <h6>Prolaz Marije K. Kozulić 3, 51000 Rijeka</h6>
                <p>
                  Электронная почта:{" "}
                  <span>
                    <a id="send-a" href="mailto: rijeka@x-dent.hr">
                      rijeka@x-dent.hr
                    </a>
                  </span>
                </p>
                <p>
                  Тел.:{" "}
                  <span>
                    <a id="send-a" href="tel: 051/498 190">
                      051/498 190
                    </a>
                  </span>
                </p>
              </div>
              <br />
              <div className="split-contact">
                <h3>X-ДЕНТ СПЛИТ</h3>
                <h6>Hrvatske mornarice 1i, 21000 Split</h6>
                <p>
                  Электронная почта:{" "}
                  <span>
                    <a id="send-a" href="mailto: split@x-dent.hr">
                      split@x-dent.hr
                    </a>
                  </span>
                </p>
                <p>
                  Тел.:{" "}
                  <span>
                    <a id="send-a" href="tel: 021/771 959">
                      021/771 959
                    </a>
                  </span>
                </p>
              </div>
              <br />
              <div className="zagreb-contact">
                <h3>X-DENT ЗАГРЕБ</h3>
                <h6>
                  Электронная почта:{" "}
                  <span>
                    <a id="send-a" href="mailto: zagreb@x-dent.hF">
                      zagreb@x-dent.hF
                    </a>
                  </span>
                </h6>
                <p>Хебрангова 26, 10000 Загреб</p>
                <h6>
                  Телефон:{" "}
                  <span>
                    <a id="send-a" href="tel: 01/485 46 08">
                      {" "}
                      01/485 46 08
                    </a>
                  </span>
                </h6>
                <p>Озальска 13, 10000 Загреб</p>
                <h6>
                  Телефон:{" "}
                  <span>
                    <a id="send-a" href="tel: 01/234 42 32">
                      {" "}
                      01/234 42 32
                    </a>
                  </span>
                </h6>
                <p>Стонска 1, 10000 Загреб</p>
                <h6>
                  Телефон:{" "}
                  <span>
                    <a id="send-a" href="tel: 01/481 53 95">
                      {" "}
                      01/481 53 95
                    </a>
                  </span>
                </h6>
                <p>Максимирска 65, 10000 Загреб</p>
                <h6>
                  Телефон:{" "}
                  <span>
                    <a id="send-a" href="tel: 01/481 54 01">
                      {" "}
                      01/481 54 01
                    </a>
                  </span>
                </h6>
                <h6>
                  Электронная почта:{" "}
                  <span>
                    <a id="send-a" href="mailto: xdentmaksimirska@gmail.com">
                      xdentmaksimirska@gmail.com
                    </a>
                  </span>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
