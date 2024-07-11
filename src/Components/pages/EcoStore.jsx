import React from "react";
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
          <img src="images/eco3.jpg" alt="Clothing Swap" />
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
          ecosystems globally. Myntra to the rescue
        </p>
        <img src="/images/eco4.png"></img>
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
              Myntra is at the forefront of the sustainable fashion movement,
              offering a curated selection of eco-friendly and ethically
              produced clothing and accessories. Our "Green Edit" features
              brands that prioritize sustainable materials, fair labor
              practices, and low-impact production methods.
            </p>
            <p>
              Through our "Circular Fashion" initiative, we facilitate clothing
              recycling and upcycling, reducing textile waste.
              <br /> Our new features allow you to embrace eco-friendly fashion
              without compromising on style. With Myntra's special services, you
              can swap rather than shop, reducing
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
              These points can be redeemed for exclusive sustainable products or
              used to support environmental initiatives. Through these
              initiatives, we're making the return process not just hassle-free,
              but also environmentally conscious and rewarding.
            </p>
          </div>
          <div className="feature-box">
            <h2>Organic Priority</h2>
            <p>
              At Myntra, we prioritize the Earth by promoting eco-friendly
              practices and offering a curated selection of organic clothing.Our
              "Organic First" initiative gives prominence to clothing made from
              certified organic materials, free from harmful pesticides and
              chemicals. We've developed a rigorous vetting process for organic
              brands, ensuring that products meet the highest standards of
              sustainability and quality.
              <br />
              Shop with confidence knowing purchase contributes to reducing the
              fashion industry's environmental footprint. Through partnerships
              with organic cotton farmers and manufacturers, we're working to
              increase the availability and affordability of organic fashion
              items.Embrace sustainability with Organic Priority at Myntra
              today!.
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

        <p>
          By choosing these products, you actively support sustainable practices
          in the fashion industry. As you accumulate Green Coins through these
          initiatives, you pave the way for meaningful rewards. Convert your
          Green Coins into cashback, exclusive rewards, or even insider points,
          making your sustainable choices more rewarding than ever before. Join
          us today and become a Green Warrior with Myntra.
          <br />
          <br />
          Together, let's make a positive impact on a global scale, fostering a
          greener, more sustainable future for generations to come. Start your
          green journey with Myntra and lead the way towards a more sustainable
          world.
        </p>
      </section>
      <section className="info-btn">
        <button>Start Your Green Journey</button>
      </section>
      <Footer></Footer>
    </div>
  );
};
