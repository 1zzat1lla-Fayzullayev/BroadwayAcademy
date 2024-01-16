import React from "react";
import "../sass/_oqituvchi.scss";
import telegram from "../assets/telegram.png";
import instagram from "../assets/instagram.png";

function Oqituvchi() {
  return (
    <>
      <h1 className="oqituvchi-h1" data-aos="fade-up">
        Tajribali RUS TILI o'qituvchi
      </h1>
      <div className="display-item">
        <div className="flippable-business-card" data-aos="fade-up">
          <div className="front">
            <div className="front-top">
              <div className="profile-image"></div>
            </div>
            <div className="front-bottom">
              <div>
                <h2>Zaynab Kasimova</h2>
                <span>RUS TILI🇷🇺</span>
              </div>
              <div>
                <div>
                  <span>
                    <i className="fa fa-phone"></i>O'qituvchi qiz💛
                  </span>
                  <span>
                    <i className="fa fa-at"></i> 4 yillik tajriba🔥
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="back">
            <div className="title">
              <h2>Zaynab Kasimova</h2>
              <span>RUS TILI🇷🇺</span>
            </div>
            <div className="bio">
              <p>‼️Rus tilini «RAZGOVOR» bilan o'rgataman‼️</p>
              <p>O’quvchilarim 1-darsdanoq gapirishni boshlashadi🔥</p>
              <p>4 yillik tajriba 1500+ o'quvchi📚</p>
            </div>
            <div className="social">
              <div className="sms">
                <div className="sm telegram">
                  <a href="https://t.me/ZaynabKasimova" target="_blank">
                    <img src={telegram} alt="telegram logo" />
                  </a>
                </div>
                <div className="sm instagram">
                  <a
                    href="https://www.instagram.com/po_russkii/"
                    target="_blank"
                  >
                    <img src={instagram} alt="instagram logo" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Oqituvchi;
