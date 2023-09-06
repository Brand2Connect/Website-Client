import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.css";
import { useNavigate } from "react-router-dom";
import UnstyledButtonsSimple from "../Button";

const Header = () => {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState("Home");

  const navigateToContacts = () => {
    navigate("/brandlist");
  };

  const navigateToHome = () => {
    navigate("/");
  };

  return (
    <div className={styles.header} id="navbar">
      <div
        style={{ fontWeight: 700, fontSize: 18, cursor: "pointer" }}
        onClick={navigateToHome}
      >
        Brand2Connect
      </div>
      <div className={styles.subTabs}>
        <Link
          className={`${styles.tab} ${
            selectedTab === "Home"
              ? styles.underLineFeature
              : styles.noUnderLineFeature
          }`}
          onClick={() => setSelectedTab("Home")}
        >
          Home
        </Link>
        <Link
          className={`${styles.tab} ${
            selectedTab === "About Us"
              ? styles.underLineFeature
              : styles.noUnderLineFeature
          }`}
          onClick={() => setSelectedTab("About Us")}
        >
          About Us
        </Link>
        <Link
          className={`${styles.tab} ${
            selectedTab === "Contact Us"
              ? styles.underLineFeature
              : styles.noUnderLineFeature
          }`}
          onClick={() => setSelectedTab("Contact Us")}
          to="/contact"
        >
          Contact Us
        </Link>
      </div>
      <div className={styles.tab}>
        {" "}
        <UnstyledButtonsSimple
          backgroundColor={"black"}
          text={"Let's talk"}
          onClick={navigateToContacts}
          hover={true}
        />
      </div>
    </div>
  );
};

export default Header;
