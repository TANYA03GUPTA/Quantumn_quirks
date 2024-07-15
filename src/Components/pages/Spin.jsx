import React, { useState } from "react";
import { Wheel } from "react-custom-roulette";

const data = [
  { option: "CashBack✨", style: { backgroundColor: "pink" } },
  { option: "Rewards🎁", style: { backgroundColor: "blue" } },
  { option: "Gift Vouchers🏅", style: { backgroundColor: "red" } },
  { option: "Coupons💰", style: { backgroundColor: "yellow" } },
  { option: "Insider Points🪙", style: { backgroundColor: "green" } },
];

export const Spin = () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  };

  return (
    <>
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}
        onStopSpinning={() => {
          setMustSpin(false);
        }}
      />
      <button className="spin-btn" onClick={handleSpinClick}>
        Spin for Rewards
      </button>
    </>
  );
};
