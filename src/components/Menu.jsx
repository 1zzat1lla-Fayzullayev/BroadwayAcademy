import React from "react";
import "../sass/_menu.scss";
import { Typewriter } from "react-simple-typewriter";

function Menu() {
  return (
    <div className="menu-wrapper">
      <div className="container">
        <div className="menu">
          <h1 style={{ paddingTop: "5rem", margin: "auto 0" }}>
            <span className="solo-span">Broadway</span> nimalardan iborat
            <br />{" "}
            <span style={{ color: "#ffcd02", fontWeight: "bold" }}>
              <Typewriter
                words={[
                  "INGLIZ TILI",
                  "RUS TILI",
                  "MATEMATIKA",
                  "FIZIKA",
                  "IELTS",
                  "KIMYO",
                  "BIOLOGIYA",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={120}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Menu;
