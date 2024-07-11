import React, { useEffect } from "react";
import { Footer } from "../Footer/Footer";

export const Trend = () => {
  useEffect(() => {
    window.location.href = "../public/trend/trendy.html";
  }, []);

  return null; // or any loading indicator if needed
};
