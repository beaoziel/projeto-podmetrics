import React, { useState, useEffect } from "react";
import "../css/Results.css";
import "../css/Chart.css";
import { cardsData } from "../data/CardsData";
import Instagram from "../assets/instagram-circle.png";
import Facebook from "../assets/facebook-circle.png";
import Twitter from "../assets/twitter-circle.png";
import Link from "../assets/link-circle.png";
import Spotify from "../assets/spotify-circle.png";
import Download from "../assets/download.png";
import Btn_Card from "../assets/seta_card.png";
import Modal from "react-modal";
import { Bar } from "react-chartjs-2";

const Results = () => {
  const [modalIsOpen, setModalOpen] = useState(false);

  return (
    <div className="results">
      <div className="results-box">
        {cardsData.map((card) => (
          <>
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={() => setModalOpen(false)}
              className="ModalCharts"
              overlayClassName="Overlay"
            >
              <div id="container-modal-charts">
                <div id="row1">
                  <img ></img>
                  <div id="row-1-content">
                    <h4>Top Podcasts / Brazil</h4>
                    <h1>{card.Name}</h1>
                    <p>
                      Levante da cama com notícias e análises quentinhas no Café
                      da Manhã, o podcast mais importante do seu dia. Em uma
                      parceria entre Folha de S.Paulo e Spotify, os jornalistas
                      Magê Flores, Maurício Meireles e Bruno Boghossian trazem
                      nas manhãs de segunda a sexta, de forma leve e simples, o
                      fundamental... <span>Saiba mais</span>
                    </p>
                    <div>
                      <span> COMPARTILHAR </span>
                      <img src={Twitter}></img>
                      <img src={Facebook}></img>
                      <img src={Instagram}></img>
                      <img src={Link}></img>
                    </div>
                  </div>
                </div>
                <div id="row2">
                  <span>#03</span>
                  <div>
                    <h3>SUSPENSE</h3>
                    <img src={Spotify} id="SpotifyLink"></img>
                    <h5>09-15 AGO 2022</h5>
                  </div>
                  <button className="btn">
                    Chart Completo <img src={Download}></img>
                  </button>
                </div>
                <div id="row3">
                  <div id="grafico"></div>
                </div>
              </div>
            </Modal>

            <div className="card" key={card.ID}>
              <div className="content">
                <img
                  src={card.Image}
                  id="logo"
                  onClick={() => setModalOpen(true)}
                />

                <div>
                  <span> #{card.Position} </span>
                  <img src={card.Status} id="status"></img>
                </div>

                <div id="info-content">
                  <div id="info-content-left">
                    <h4> {card.Name}</h4>
                    <h6>
                      {" "}
                      {card.Description} / {card.Performer}
                    </h6>
                  </div>

                  <div id="info-content-right">
                    <img src={Btn_Card}></img>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Results;
