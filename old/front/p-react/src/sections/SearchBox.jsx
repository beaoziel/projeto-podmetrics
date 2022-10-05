import { React, useState } from "react";
import "../css/SearchBox.css";
import "../css/Calendar.css";
import Apple from "../assets/apple.png";
import Spotify from "../assets/spotify.png";
import Deezer from "../assets/deezer.png";
import Google from "../assets/google.png";
import Podmetrics from "../assets/podmetrics.png";
import Amazon from "../assets/amazon.png";

function weekConverter(e) {
  e.preventDefault();
  var weekValue = document.getElementById("weekCalendar").value.split("-");
  var weekNumber = weekValue[1].replace(/\D/g, "");
  var d = new Date(weekValue[0], 0);
  var dayNum = d.getDay();
  var requiredDate = weekNumber * 7;

  if (dayNum != 0 || dayNum > 4) {
    requiredDate += 7;
  }

  d.setDate(1 - d.getDay() + ++requiredDate);
}

function monthConverter(e) {
  e.preventDefault();
  var monthValue = document.getElementById("monthCalendar").value.split("-");
  var year = monthValue[0];
  var month = monthValue[1];
}

const calendarChange = (event) => {
  event.preventDefault();
  var day = document.getElementById("label-day");
  var month = document.getElementById("label-month");
  var week = document.getElementById("label-week");
  if (event.currentTarget.id == day.id) {
    document.getElementById("monthCalendar").style.display = "none";
    document.getElementById("weekCalendar").style.display = "none";
    document.getElementById("dayCalendar").style.display = "block";
    day.className="selectedCalendar"
    month.className=""
    week.className=""
  }
  if (event.currentTarget.id == month.id) {
    document.getElementById("monthCalendar").style.display = "block";
    document.getElementById("weekCalendar").style.display = "none";
    document.getElementById("dayCalendar").style.display = "none";
    month.className="selectedCalendar"
    day.className=""
    week.className=""
  }
  if (event.currentTarget.id == week.id) {
    document.getElementById("monthCalendar").style.display = "none";
    document.getElementById("weekCalendar").style.display = "block";
    document.getElementById("dayCalendar").style.display = "none";
    week.className="selectedCalendar"
    month.className=""
    day.className=""
  }
};

export default function SearchBox() {
  return (
    <>
      <div id="select-line">
        <div id="select-area">
          <label for="select-pais"> País </label>

          <select id="select-pais" name="country">
            <option value=""></option>
            <option> Brasil</option>
          </select>
        </div>

        <div id="select-area">
          <label for="select-categoria"> Categoria </label>
          <select id="select-categoria" name="category">
            <option value=""></option>
            <option>Comédia</option>
          </select>
        </div>

        <div id="input-data-area">
          <div id="input-data-area-label">
            <label for="select-periodo"> Período </label>
          </div>

          <div id="calendar-area">
            <label
              for="monthCalendar"
              id="label-month"
              onClick={calendarChange}
            >
              Mês
            </label>
            <label for="dayCalendar" id="label-day" onClick={calendarChange}>
              Dia
            </label>
            <label for="weekCalendar" id="label-week" onClick={calendarChange}>
              Semana
            </label>
            <input type="date" name="dayCalendar" id="dayCalendar" />
            <input
              type="month"
              name="monthCalendar"
              id="monthCalendar"
              onChange={monthConverter}
            />
            <input
              type="week"
              name="weekCalendar"
              id="weekCalendar"
              onChange={weekConverter}
            />
          </div>
        </div>
      </div>

      <div id="plataform-line">
        <div className="plataform-line-left">
          <span>Plataformas</span>

          <label>
            <input type="checkbox" className="checkbox" name="podcast" />
            <div class="icon">
              <img src={Podmetrics} />
            </div>
          </label>

          <label>
            <input type="checkbox" className="checkbox" name="podcast" />
            <div class="icon">
              <img src={Apple} />
            </div>
          </label>

          <label>
            <input type="checkbox" className="checkbox" name="podcast" />
            <div class="icon">
              <img src={Spotify} />
            </div>
          </label>

          <label>
            <input type="checkbox" className="checkbox" name="podcast" />
            <div class="icon">
              <img src={Deezer} />
            </div>
          </label>

          <label>
            <input type="checkbox" className="checkbox" name="podcast" />
            <div class="icon">
              <img src={Google} />
            </div>
          </label>

          <label>
            <input type="checkbox" className="checkbox" name="podcast" />
            <div class="icon">
              <img src={Amazon} />
            </div>
          </label>
        </div>

        <div className="plataform-line-right">
          <button className="btn"> Buscar </button>
        </div>
      </div>
      </>
  );
}
