"use client";

import React from "react";
import RestaurantLogin from "../_components/RestaurantLogin.js";
import RestaurantSignup from "../_components/RestaurantSignup.js";
import { useState } from "react";
import RestaurantHeader from "../_components/RestaurantHeader.js";
import "./style.css";
import Footer from "../_components/Footer.js";
const Restaurent = () => {
  const [Login, setLogin] = useState(true);

  return (
    <>
      <div className="container">
        <RestaurantHeader />
        <h1>Restaurant Login/Signup Page</h1>
        {Login ? <RestaurantLogin /> : <RestaurantSignup />}

        <div>
          <button className="button-link" onClick={() => setLogin(!Login)}>
            {Login
              ? "Do not Have Account? Signup"
              : "Already have an account ?Login "}
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Restaurent;
