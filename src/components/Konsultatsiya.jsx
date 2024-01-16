import React, { useState } from "react";
import "../sass/_konsultatsiya.scss";
import academy from "../assets/academy-k.jpg";
import axios from "axios";
import Swal from "sweetalert2";

function Konsultatsiya() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSendMessage = async () => {
    if (name === "" || phone === "") {
      Swal.fire({
        title: "Xatolik yuz berdi ma'lumotlarni to'g'ri to'ldiring!",
        icon: "error",
      });
      return;
    }

    try {
      const response = await axios.post(
        `https://api.telegram.org/bot6743454721:AAFTXD69aRrCABzGkjtadXmJWphwHp7Kr38/sendMessage`,
        {
          chat_id: 6475396776,
          text: `Assalomu alekom saytdan habar keldi🖐🏻 \n\nIsm Familiya: ${name}👨🏻‍🎓\n\nTelefon raqam: ${phone}📱`,
        }
      );
      setName("");
      setPhone("");

      Swal.fire({
        title: "Habaringiz yuborildi tez orada siz bilan aloqaga chiqamiz😊",
        icon: "success",
      });
    } catch (err) {
      console.log(err.response.data);
    }
  };
  return (
    <>
      <div id="kursga-yozilish">
        <br />
        <br />
      </div>

      <div className="container konsultatsiya">
        <div className="konsultatsiya-text">
          <h4 data-aos="fade-up">Qo'shimcha ma'lumotlar olmoqchimisiz?</h4>
          <p data-aos="fade-up">
            Siz bilan bog'lanishimiz uchun, o'z ma'lumotlaringizni qoldiring
          </p>
        </div>
        <div className="konsultatsiya-row">
          <div data-aos="fade-up">
            <img src={academy} alt="404" className="academy-k" />
          </div>
          <div>
            <div className="sms" data-aos="fade-up">
              <h5>Ro'yhatdan o'tish</h5>
              <div className="form__group field">
                <input
                  type="text"
                  className="form__field"
                  placeholder="Ism va Familiyangiz"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required=""
                />
                <label for="name" className="form__label">
                  Ism va Familiyangiz
                </label>
              </div>
              <div className="form__group field">
                <input
                  type="number"
                  className="form__field"
                  placeholder=" +998"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required=""
                />
                <label for="name" className="form__label">
                  +998
                </label>
              </div>
              <button
                type="button"
                className="button"
                onClick={handleSendMessage}
              >
                <div className="button-top">Yuborish</div>
                <div className="button-bottom"></div>
                <div className="button-base"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Konsultatsiya;
