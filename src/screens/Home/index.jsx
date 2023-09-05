import React from "react";
import styles from "./style.module.css";
import MediaCard from "../../components/Card";
import Header from "../../components/Header";
import UnstyledButtonsSimple from "../../components/Button";
import CardInfo from "../../components/CardInfo";
import Card from "../../components/Card";
// import { Color } from "@mui/material";
import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

import data, { rows } from "./faqData";
import ControlledAccordions from "../../components/Accordian";
import offers from "./offer";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.body}>
        <Header />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
          <div style={{ marginLeft: 30, marginTop: 80 }}>
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
          <div style={{ position: "relative" }}>
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

      <div>
        <div
          className="wwd"
          style={{
            backgroundColor: "#f7f5fd",
            padding: "1rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
          }}
        >
          <img src="/rocket_.png" alt="rocket" width={40} height={40} />{" "}
          <h1
            style={{
              textAlign: "center",
              backgroundColor: "#f7f5fd",
              fontSize: 48,
            }}
          >
            What do we offer?
          </h1>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            background: "#f7f5fd",
            marginBottom: "1.5rem",
            padding: "3rem 1.5rem 3rem 1.5rem",
            gap: "4rem",
          }}
        >
          {offers.map((item, i) => {
            return (
              <Card
                align={i % 2 == 0 ? "flex-start" : "flex-end"}
                flexDirection={i % 2 == 0 ? "row" : "row-reverse"}
                imgSrc={item.imgSrc}
                imgSrc2={item.imgSrc2}
                title={item.title}
                bgImage={item.bgImage}
                body={item.body ? item.body : null}
                list={item.list ? item.list : null}
              />
            );
          })}
        </div>
        {/* <div
          style={{
            display: "flex",
            flexDirection: "row",
            background: "#f7f5fd",
            marginBottom: "1.5rem",
            padding: "3rem 1.5rem 3rem 1.5rem",
          }}
        >
          <div style={{ width: "50vh" }}>
            <Card
              align={i % 2 == 0 ? "flex-start" : "flex-end"}
              imgSrc={item.imgSrc}
              title={item.title}
              body={item.body ? item.body : null}
              list={item.list ? item.list : null}
            />
          </div>
          <div style={{ width: "50vh" }}></div>
        </div> */}

        <div className={styles.cardHolders}>
          <div></div>
          <div className={styles.footerPage}>
            <h1 className={styles.titleHolders}>
              Use the online profile creator that will get you noticed
            </h1>
            <div className={styles.paraHeaderFooter}>
              All the tools you need to bring in more potential clients. Create
              your own profile now.
            </div>
            <div className={styles.featureFooter}>
              <div>1. Sign in or join Brand2Connect platform.</div>
              <div>2. Integrate your Instagram and YouTube Analytics.</div>
              <div>
                3. Pick a profile template with professional tools to get
                started.
              </div>
              <div>
                4. Publish your profile live, for brands to connect with you
                directly.
              </div>
              <div>
                5. Customize anything on your entire platform with our editor
                tools.
              </div>
              <div>
                6. Share your profile link and grow your brand collabration.
              </div>
            </div>
          </div>
          <div></div>
        </div>
        <div className={styles.footing}>
          {/* <div></div> */}
          <div
            style={{
              // borderRadius: "7px",
              padding: "3rem 6rem",
              backgroundColor: "#101727",
            }}
          >
            <div className={styles.faqHeading}>
              <img
                src="/🦆 emoji _books_.png"
                alt="duck"
                height={30}
                width={30}
              />

              <h2 style={{ color: "white" }}>Frequently Asked Questions</h2>
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
                  <span style={{ fontSize: 32, marginRight: 10 }}>?</span>Still
                  have questions?
                </div>
                <div>
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
          {/* <div></div> */}
        </div>
        <div className={styles.portfolioInfo}>
          {/* <h1 style={{ textAlign: "center" }}>
          Get brand attention and grow your business with a Analytical Portfolio
        </h1>
        <div>
          <UnstyledButtonsSimple
            backgroundColor={"white"}
            colors={"#45b6fe"}
            text={"CREATE YOUR PORTFOLIO"}
            rounded={"92px"}
          />
        </div> */}

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              gap: "2rem",
            }}
          >
            <div style={{ flex: 1 }}>
              <h1 style={{ fontWeight: 800 }}>Brand2Connect</h1>
              <p style={{ fontWeight: 600 }}>
                Stand out from the crowd and attract new brands with the best
                portfolio website builder. Profile creation has never been so
                simple. Use artificial design intelligence to create a
                customized profile to share with BRANDS.
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
      </div>
    </div>
  );
};
export default Home;
