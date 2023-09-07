import React from "react";
import styles from "./style.module.css";
import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

const index = () => {
  return (
    <div className={styles.portfolioInfo}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          gap: "2rem",
          margin: "30px 130px",
        }}
      >
        <div style={{ flex: 1 }}>
          <h1 style={{ fontWeight: 800 }}>Brand2Connect</h1>
          <p style={{ fontWeight: 600 }}>
            Stand out from the crowd and attract new brands with the best
            portfolio website builder. Profile creation has never been so
            simple. Use artificial design intelligence to create a customized
            profile to share with BRANDS.
          </p>
        </div>
        <div
          style={{
            flex: 1,
            display: "flex",
            // alignContent: "center",
            justifyContent: "center",
          }}
        >
          <ul
            className="services"
            style={{
              listStyle: "none",
              display: "flex",
              gap: "1rem",
              flexDirection: "column",
            }}
          >
            <li>About</li>
            <li>Services</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            flexDirection: "column",
          }}
        >
          <h2>Social Handles</h2>
          <div style={{ display: "flex", gap: "1rem" }}>
            <span>
              <BsFacebook size={24} />
            </span>
            <span>
              <AiFillInstagram size={24} />
            </span>
            <span>
              <FaLinkedin size={24} />
            </span>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", gap: "1rem" }}>
        <span>Privacy Policies</span>
        <span>Terms & Conditions</span>
      </div>
    </div>
  );
};

export default index;
