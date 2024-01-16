import React from "react";
import "../sass/_kurslar.scss";
import rus from "../assets/rus.jpg";
import matem from "../assets/matem.jpg";
import ingliz from "../assets/ingliz.jpg";

function Kurslar() {
  return (
    <>
      <h1>Broadway Academy</h1>
      <table class="rwd-table">
        <tr>
          <th>Darslar</th>
          <th>Darslar soni</th>
          <th>Davomiyligi</th>
          <th>Narxi (so'm)</th>
        </tr>
        <tr>
          <td data-th="Darslar">MATEMATIKA</td>
          <td data-th="Darslar soni">12 ta</td>
          <td data-th="Davomiyligi">2 soat</td>
          <td data-th="Narxi (so'm)">450 000</td>
        </tr>
        <tr>
          <td data-th="Darslar">FIZIKA</td>
          <td data-th="Darslar soni">12 ta</td>
          <td data-th="Davomiyligi">2 soat</td>
          <td data-th="Narxi (so'm)">450 000</td>
        </tr>
        <tr>
          <td data-th="Darslar">INGLIZ TILI</td>
          <td data-th="Darslar soni">12 ta</td>
          <td data-th="Davomiyligi">1.5 soat</td>
          <td data-th="Narxi (so'm)">450 000</td>
        </tr>
        <tr>
          <td data-th="Darslar">IELTS</td>
          <td data-th="Darslar soni">12 ta</td>
          <td data-th="Davomiyligi">1.5 soat</td>
          <td data-th="Narxi (so'm)">550 000</td>
        </tr>
        <tr>
          <td data-th="Darslar">RUS TILI</td>
          <td data-th="Darslar soni">12 ta</td>
          <td data-th="Davomiyligi">1.5 soat</td>
          <td data-th="Narxi (so'm)">450 000</td>
        </tr>
        <tr>
          <td data-th="Darslar">KIMYO</td>
          <td data-th="Darslar soni">12 ta</td>
          <td data-th="Davomiyligi">1.5 soat</td>
          <td data-th="Narxi (so'm)">450 000</td>
        </tr>
        <tr>
          <td data-th="Darslar">BIOLOGIYA</td>
          <td data-th="Darslar soni">12 ta</td>
          <td data-th="Davomiyligi">1.5 soat</td>
          <td data-th="Narxi (so'm)">450 000</td>
        </tr>
      </table>
    </>
  );
}

export default Kurslar;
