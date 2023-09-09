import React from "react";
import styles from "./style.module.css";
import MediaCard from "../../components/Card";
import Header from "../../components/Header";
import UnstyledButtonsSimple from "../../components/Button";
import Footer from "../../components/Footer";
import CardInfo from "../../components/CardInfo";
import Card from "../../components/Card";
// import { Color } from "@mui/material";
import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

import data, { rows } from "./faqData";
import ControlledAccordions from "../../components/Accordian";
import offers from "./offer";
import { InfoOutlined } from "@mui/icons-material";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.body}>
        <Header />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
          <div style={{ marginLeft: 30 }}>
            <h1 className={styles.contentHeader}>
              Brand Collabration Platform:{""}
              <span style={{ color: "#FC076F" }}> Analytical Profile</span>{" "}
              Creator
            </h1>
            <div className={styles.paraHeader}>
              Stand out from the crowd and attract new brands with the best
              portfolio website builder. Profile creation has never been so
              simple. Use artificial design intelligence to create a customized
              profile to share with{" "}
              <span style={{ color: "#FC076F" }}>BRANDS</span>.
              <div className={styles.tab}>
                {" "}
                <UnstyledButtonsSimple
                  backgroundColor={"#FC076F"}
                  rounded={"92px"}
                  colors={" white"}
                  text={"Create Your Profile"}
                />
              </div>
            </div>
          </div>
          <div style={{ position: "absolute", top: 0, right: 0, width: "50%" }}>
            <div className={styles.rectangleImagem}>
              <img
                id="image1"
                className={styles.rectangleImage}
                src="/rectangle.png"
                alt="image"
                height={550}
                width={650}
              />
              <img
                className={styles.rightImage}
                src="/rightimage.png"
                alt="image"
                height={450}
                width={"80%"}
              />
            </div>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: "#f7f5fd" }}>
        <div
          className="wwd"
          style={{
            backgroundColor: "#f7f5fd",
            display: "flex",
          }}
        >
          <img
            src="/img/Vector.png"
            alt="vector"
            height="300rem"
            width="13%"
            style={{
              paddingRight: "-10rem",
              alignItems: "center",
              justifyContent: "center",
            }}
          />{" "}
          <img
            src="/img/Group.png"
            alt="group"
            height="120rem"
            width="210rem"
            style={{
              paddingTop: "5rem",
              rotate: "6deg",
            }}
          />{" "}
          <img
            src="/rocket_.png"
            alt="rocket"
            width={60}
            height={60}
            style={{
              padding: "7rem 1rem 0rem 1rem",
              alignItems: "center",
              justifyContent: "center",
            }}
          />{" "}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              paddingTop: "2rem",
              paddingLeft: "1rem",
              paddingBottom: "0rem",
              lineHeight: "0rem",
              flexShrink: "5",
            }}
          >
            <h1
              style={{
                textAlign: "center",
                backgroundColor: "#f7f5fd",
                fontSize: 55,
              }}
            >
              What do we Offer?
            </h1>
            <img
              src="/img/Underline_09.png"
              style={{
                display: "inline",
                padding: "0rem 0rem 0rem 19rem",
                height: "2rem",
                width: "12rem",
              }}
            />
          </div>
          <img
            src="/img/Arrow_05.png"
            alt="group"
            height="150rem"
            style={{
              padding: "6rem 2rem 0rem 2rem",
              alignItems: "center",
              justifyContent: "center",
            }}
          />{" "}
        </div>
        {/* waitlist */}
        <div
          style={{
            display: "flex",
            flexDirection: "row ",
            justifyContent: "space-between",
            backgroundColor: "#f7f5fd",
          }}
        >
          <div className={styles.boxes}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                paddingTop: "1rem",
                backgroundColor: "#f7f5fd",
                gap: "1rem",
              }}
            >
              <img src="/medal.png" width={30} height={40} paddingTop={7} />
              <div
                padding={4}
                style={{
                  fontWeight: "900",
                  fontSize: "1.1rem",
                  fontSize: "1.275rem",
                  lineHeight: "2rem",
                }}
              >
                The ultimate platform for creators to collaborate with top-tier
                brands
              </div>
            </div>
            <div
              style={{
                wordSpacing: "0.3rem",
                textAlign: "justify",
                fontWeight: "500",
                fontSize: "1rem",
                lineHeight: "1.5rem",
                letterSpacing: "-0.01625rem",
                padding: "0rem 2rem 0 rem 1rem",
              }}
            >
              Are you looking to take your brand integration to the next level
              and increase your reach to potential brands? Look no further than
              our platform, the ultimate solution for creators seeking to
              collaborate with Brands and influencers.
            </div>
          </div>
          <div style={{ marginRight: 0 }}>
            <img
              alt="hexagon"
              src="/img/Rock.png"
              height="200rem"
              width="200rem"
              className={styles.down}
            />

            <img
              alt="img 2"
              src="/image 2.png"
              // height="200rem"
              className={styles.up}
            />
          </div>
        </div>

        {/* h  */}
        <div
          style={{
            display: "flex",
            padding: "3rem",
            flexDirection: "row-reverse",
          }}
        >
          <p>a</p>
          <p>b</p>
        </div>

        <div style={{ backgroundColor: "#f7f5fd" }}>
          <div
            style={{
              // borderRadius: "7px",
              padding: "1rem 4rem",
              backgroundColor: "#101727",
            }}
          >
            <div className={styles.faqHeading}>
              <img src="/book.png" alt="book" height={30} width={30} />

              <h3 style={{ color: "white" }}>Frequently Asked Questions</h3>
            </div>
            {/* <Faq
            data={data}
            styles={{
              titleTextColor: "blue",
              rowTitleColor: "blue",
              marginBottom: "1rem",
              rowContentPaddingBottom: "10px",
            }}
          /> */}
            <ControlledAccordions data={rows} />

            <div
              style={{
                background: "white",
                fontFamily: "sans-serif",
                fontSize: "1rem",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "2rem",
                borderRadius: "8px",
                marginTop: "3rem",
                border: "1px solid black",
                backgroundColor: "#FC076F",
              }}
            >
              <div
                style={{
                  color: "whitesmoke",
                  fontWeight: 700,
                }}
              >
                <div
                  style={{
                    fontWeight: 700,
                    marginBottom: 6,
                    display: "flex",
                    alignItems: "center",
                    fontSize: 28,
                  }}
                >
                  <span style={{ fontSize: 28, marginRight: 10 }}>?</span>Still
                  have questions?
                </div>
                <div style={{ fontSize: 15 }}>
                  Can't find the answers you're looking for? Send our team a
                  message!
                </div>
              </div>
              <div>
                <UnstyledButtonsSimple
                  backgroundColor={"black"}
                  colors={"white"}
                  text={"Contact Us"}
                />
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};
export default Home;
