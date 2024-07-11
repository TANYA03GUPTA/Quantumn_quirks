import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";
import { Container } from "react-bootstrap";
import { Footer } from "../Footer/Footer";
import { Carousel1 } from "../Home/HomeSlide";
import "../pages/studio.css";

export const Studio = () => {
  return (
    <>
      <Container>
        <section className="top-tier">
          <section className="image-trend">
            <Link to="/Trend">
              <img
                className="head-img"
                src="../public/images/trend1.png"
                alt="mainimg"
              ></img>
            </Link>
          </section>
          <section className="heading">
            <h2>Trend </h2>
            <h1>Prediction</h1>
            <p>
              Join the excitement with our trend prediction game, where you can
              choose what will be the next top trends! If your top-rated choices
              rise to the top, you'll have the chance to be featured on Myntra
              Studio and earn amazing rewards. Gain insider points, cash
              coupons, and more.Shape the future of fashion and win big.
            </p>
          </section>
        </section>

        <section class="play-games-section">
          <div class="left-side">
            <h2>Spin the Wheel</h2>
            <p>
              Spin the Wheel and win exciting reward points! Test your luck with
              our interactive game where each spin could bring you closer to
              amazing rewards. Whether you're aiming for cashback, discounts, or
              exclusive offers, every spin counts towards unlocking great
              benefits.
            </p>
            <h3>Come daily to win More excitning casback and rewards!!!</h3>
            <button className="spin-btn">Spin for Rewards</button>
          </div>
          <div class="right-side">
            <div id="spin-wheel">
              <img src="images/Spin.png" />
              {/*<div className="video-player">
                <video controls>
                  <source src="./images/spin.mp4" type="video/mp4" />
                  Your browser does not support the video tag or the file format
                  of this video.
                </video>
              </div>*/}
            </div>
          </div>
        </section>
        <section class="play-games-section2">
          <div class="lefty">
            <img alt="fashion quiz" src="../public/images/qz.png" />
          </div>
          <div class="righty">
            <h2>Fashion Quiz</h2>
            <p>
              Spin the Wheel and win exciting reward points! Test your luck with
              our interactive game where each spin could bring you closer to
              amazing rewards. Whether you're aiming for cashback, discounts, or
              exclusive offers, every spin counts towards unlocking great
              benefits.
            </p>

            <p>
              in the Wheel and win exciting reward points! Test your luck with
              our interactive game where each spin could bring you closer to
              amazing rewards. Whether you're aiming for cashback, discounts, or
              exclusiv
            </p>
            <h3>Come daily to win More excitning cashback & rewards!!!</h3>
            <button>Play quiz</button>
          </div>
        </section>
      </Container>
      <Footer></Footer>
    </>
  );
};
