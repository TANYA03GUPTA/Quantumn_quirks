import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Ecostore.css";
import { Footer } from "../Footer/Footer";

export const EcoStore = () => {
  return (
    <div className="cointainer">
      <section className="swap-section">
        <div className="text-container">
          <h1 className="headline">
            <span className="swap">Swap</span>
            <br />
            <span className="dont">don't Shop !</span>
          </h1>
        </div>
        <div className="image-container">
          <img src="images/tree00.png" alt="Clothing Swap" />
          <p className="photo-credit">photo: Online Sources</p>
        </div>
      </section>
      <section className="info-section">
        <p>
          Fast fashion is wreaking havoc on our environment, contributing to
          pollution, waste, and unsustainable resource consumption. The rapid
          production cycle demands enormous amounts of water, generates
          substantial carbon emissions, and results in a staggering amount of
          textile waste ending up in landfills. This relentless pace of
          production and disposal depletes natural resources and harms
          ecosystems globally. Myntra to the rescue!!!
        </p>
        <Link to="/Eco2">
          <img src="/images/eco4.png"></img>
        </Link>

        <p>
          Myntra cares deeply about the planet and brings you a one-of-a-kind
          opportunity to be a green fashionista. Our new features allow you to
          embrace eco-friendly fashion without compromising on style. With
          Myntra's special services, you can swap rather than shop, reducing
          waste and minimizing your environmental footprint. Join us in making a
          positive impact on the planet while staying on top of the latest
          trends. Together, we can create a sustainable future for fashion.
        </p>
      </section>
      <section className="cards">
        <section className="features-section">
          <div className="feature-box">
            <h2>Sustainable Fashion</h2>
            <p>
              Our "Green Edit" features brands that prioritize sustainable
              materials, fair labor practices, and low-impact production
              methods.
            </p>
            <p>
              Through our "Circular Fashion" initiative, we facilitate clothing
              recycling and upcycling, reducing textile waste. Our new features
              allow you to embrace eco-friendly fashion without compromising on
              style.
            </p>
            <img
              src="images/eco61.png"
              alt="Feature 1"
              className="feature-image"
            />
          </div>
          <div className="feature-box">
            <img
              src="images/eco51.png"
              alt="Feature 2"
              className="feature-image"
            />
            <h2>Return & Reward</h2>
            <p>
              Revolutionizes the way you manage your wardrobe.simply hand over
              your gently used clothes to our delivery partner during their next
              visit. Once sorted and verified, you earn points based on the
              quantity and quality of items returned.
            </p>
            <p>
              We've gamified the return process with our "Responsible Returns"
              reward system, where customers earn points for choosing green
              return methods or opting for store credit instead of refunds.
            </p>
          </div>
          <div className="feature-box">
            <h2>Organic Priority</h2>
            <p>
              Our "Organic First" initiative gives prominence to clothing made
              from certified organic materials, free from harmful pesticides and
              chemicals. We've developed a rigorous vetting process for organic
              brands, ensuring that products meet the highest standards of
              sustainability and quality.
            </p>
            <p>
              Through partnerships with organic cotton farmers and
              manufacturers, we're working to increase the availability and
              affordability of organic fashion items.
            </p>
            <img
              src="images/eco6.png"
              alt="Feature 3"
              className="feature-image"
            />
          </div>
        </section>
      </section>
      <section className="info-section2">
        <p>
          Embark on your journey towards sustainability with Myntra's range of
          eco-conscious initiatives designed to empower you as a Green Warrior.
          Through programs like "Send & Earn," where you can recycle your
          clothes with our delivery partners and earn Green Coins based on the
          items sent, to "Return & Reward," which lets you contribute to a
          circular economy by rewarding you for returning gently used garments,
          every action counts towards reducing your fashion footprint. Our
          commitment extends further with "Organic Priority," promoting brands
          that prioritize the environment with green tags and certified organic
          options.{" "}
        </p>
        <div className="brwn-img">
          <img src="images/ecobrwn.png " />
        </div>

        <p>
          Our innovative feature is designed to encourage and reward sustainable
          shopping habits among consumers. By integrating Green Points and the
          EcoMeter with user order histories, we aim to make eco-friendly
          purchasing both impactful and rewarding. Here's how it works: for
          every environmentally friendly product you buy, you earn Green Points.
          These points are tracked in your EcoMeter, providing a visual
          representation of your sustainable contributions. As the EcoMeter
          fills up, users can see their positive impact on the planet while
          unlocking special Insider Points and exclusive privileges. These perks
          include cashback, unique rewards, and even a chance to be featured on
          our cover pages. Our goal is to motivate and celebrate those who
          choose to shop sustainably, turning every purchase into a step towards
          a greener future. This feature not only promotes eco-friendly choices
          but also enhances user engagement and loyalty by making sustainability
          rewarding and exciting.
        </p>
        <p>
          Together, let's make a positive impact on a global scale, fostering a
          greener, more sustainable future for generations to come.Embrace
          sustainability with Organic Priority at Myntra today!.
        </p>
      </section>
      {/*}     <section className="info-3">
        <div className="top-info">
          <div className="left-text">
            <ul>
              <li>
                By integrating Green Points and the EcoMeter with user order
                histories, we aim to make eco-friendly purchasing both impactful
                and rewarding.
              </li>
              <li>
                Here's how it works: for every environmentally friendly product
                you buy, you earn Green Points.
              </li>
              <li>
                These points are tracked in your EcoMeter, providing a visual
                representation of your sustainable contributions.
              </li>
            </ul>
          </div>
          <div className="img-cont">
            <img src="images/eco-mtr.jpeg" />
          </div>
        </div>
        <div className="bottom-info"></div>
        </section>*/}

      <section className="info-btn">
        <button>Start Your Green Journey</button>
      </section>
      <Footer></Footer>
    </div>
  );
};
