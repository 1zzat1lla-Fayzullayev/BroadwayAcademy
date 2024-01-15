import React from "react";
import "../sass/_broadway.scss";
import tajriba from "../assets/tajriba-removebg-preview.png";
import natija from "../assets/natija-removebg-preview.png";
import teachers from "../assets/teachers-removebg-preview.png";
import svg from "../assets/stroke-medium-curve.png";

function Broadway() {
  return (
    <>
      <div className="container broadway">
        <div className="broadway-text" data-aos="fade-right">
          <h1>Nima uchun aynan Broadway?</h1>
          <p>
            Broadway Academy hozir til va ilm o'rganish istagida yurgan
            insonlarga 2 yildan beri professionallar bilimi, ularning tajribasi
            orqali sifatli ta'lim ulashib bormoqda. Hozirgacha akademiyada
            tahsil olayotganlar 3 000+ nafarni tashkil etadi
          </p>
        </div>
        <div className="row broadway-row">
          <div className="cards">
            <div className="card1" data-aos="fade-up">
              <img src={tajriba} alt="tajriba rasm" />
              <h4>4 yillik tajriba</h4>
              <p>
                Broadway Academyasi tashkil etilgandan so'ng ko'plab o'quvchilar
                tashrif buyurishdi va 2,4 oyda kuchli bilimlar egasi bo'lishdi
              </p>
            </div>
            <div className="card2" data-aos="fade-up">
              <img src={natija} alt="natija rasm" />
              <h4>Natija</h4>
              <p>
                Kurs davomida o'quvchilar hech qanday zerikishlarsiz davom
                etishadi va katta natijalar bilan kursni bitirishadi
              </p>
            </div>
            <div className="card3" data-aos="fade-up">
              <img src={teachers} alt="o'qituvchi rasm" />
              <h4>Mentorlar</h4>
              <p>
                Ustozlar haqiqiy praktik Xalqaro toifadagi ustoz hisoblanib,
                hozirgi kunda turli o'quv markazlarda faoliyat yuritib
                kelishmoqda
              </p>
            </div>
          </div>
        </div>
        {/* svg */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 220 220"
          fill="#FFCD02"
        >
          <path d="M103.5 151.7c-33.2-4.9-45.2-44.9-25-69.6 8.9-10.4 25-19.8 39.2-15.3 24.6 5.9 37.2 34.8 28.6 56.9-6.7 17.3-24.1 30.8-42.8 28zm5.5-15.5c32.2 0 32.6-55.9-.6-54.6-30.2 1.2-31.6 54.6.6 54.6z"></path>
          <path d="M58.4 38.5c55.8-40 132-10.3 136 61 1.2 22-4.7 50.5-19.6 67.7-17.7 20.5-42 31.3-68.9 32.2-17.7.6-36.9-7.2-50.6-18.4-32.5-26.4-37.9-80.2-19.2-115.9C41.5 55 49 45.2 58.4 38.5zm-9 40.5c-18 33.1-3.2 88.3 37.1 99.3 19.5 5.3 43.3 2.2 59.7-10 21.3-15.8 32.3-45.5 29.3-71.2-1.3-11.5-3.4-24-11-32.7C123.2 16.8 71.2 38.8 49.4 79z"></path>
        </svg>

        {/* <img src={svg} alt="404" className="svg-image" /> */}
      </div>
    </>
  );
}

export default Broadway;
