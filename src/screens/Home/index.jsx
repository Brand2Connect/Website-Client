import React from "react";
import styles from "./style.module.css";
import MediaCard from "../../components/Card";
import Header from "../../components/Header";
import UnstyledButtonsSimple from "../../components/Button";
import CardInfo from "../../components/CardInfo";
import Faq from "react-faq-component";
import QA from "../../components/QA";
// import { Color } from "@mui/material";

import data from "./faqData";

const Home = () => {
  return (
    <div className={styles.home}>
      <Header />
      <div>
        <div className={styles.body}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
            }}
          >
            <h1 className={styles.contentHeader}>
              Brand Collabration Platform:{""}
              <span style={{ color: "#FC076F" }}>Analytical Profile</span>{" "}
              Creator
            </h1>

            <div className={styles.paraHeader}>
              Stand out from the crowd and attract new brands with the best
              portfolio website builder. Profile creation has never been so
              simple. Use artificial design intelligence to create a customized
              profile to share with{" "}
              <span style={{ color: "#FC076F" }}>BRANDS</span>.
            </div>
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
          <div className={styles.imageHeader}></div>
          <div className={styles.rectangleImage}>
            <img
              //   className={styles.rectangle}
              src="/rectangle.png"
              alt="image"
              height={576}
              width={600}
            />
            {/* <img
              className={styles.rightImage}
              src="/rightimage.png"
              alt="image"
              height={576}
              width={600}
            /> */}
          </div>
          {/* <div
            className={styles.paraHeader}
            style={{ margin: "2.5vh 1vh 6vh 1vh" }}
          >
            Profile creation has never been so simple. Use artificial design
            intelligence to create a customised profile to share with BRANDS.
          </div> */}
        </div>
      </div>
      <CardInfo
        subHead1={"CREATE YOUR DIGITAL BRAND COLLABRATION HERE"}
        subHead2={
          "The bestplatform to get your Brand Collabration game on point"
        }
        body={
          "Are you looking to take your brand integration to the next level and increase your reach to potential brands? Lookno further than our platform, the ultimate solution for creators seeking to collabrate with Brands and influencers. With our intuitive interface and extensive network of industry professionals, we make it easy for you to connect with like-minded brands. Don't settle for second best - join our platform and get your brand collabration game on point today!"
        }
        ltr={true}
      />
      <CardInfo
        subHead1={"GET YOUR REAL-TIME SOCIAL MEDIA PLATFORM ANALYTICS"}
        subHead2={"Real-time social media analytics tools"}
        body={
          "Are you looking powerful tool to help you understand and optimize your social media presence? Look no further than our real-time social media platform analytics! With our comprehensive suit of anlytics tools, you'll be able to track key metrics such as engagement rates, follower, growth and more, giving you a clear piture of how your social media efforts are paying off. Plus, our intutive dashboard makes it easy to spot trends and identify areas for improvemnt, so you can make data-driven decisions that drive real results. So, why wait? Sign up for our real-time social media platform analytics today and start taking your social media startegy to the next level!"
        }
      />
      <CardInfo
        subHead1={"FREE CUSTOMER DOMAIN NAME"}
        subHead2={"Professional portfolio sites start with a name"}
        body={
          <p>
            Sign with Brand2Connect profile builder and get a free domain.
            Whether you're a Social Media influencer, Content Creator, or
            Artist, the best way to connect with Brands is to start with the
            perfectdomain. Use our{" "}
            <strong style={{ fontWeight: 700, color: "black" }}>
              Domain Name Generator
            </strong>{" "}
            to find the perfect match
          </p>
        }
        ltr={true}
      />
      <CardInfo
        subHead1={"SHARE YOUR PROFILE WITH A CLICK"}
        subHead2={"One Click Profile Share To Brands"}
        liList={[
          "Share with the click of a button",
          "Download your Brand Anaytics as a PDF",
          "Add to social media paltform links in bio",
        ]}
      />
      <CardInfo
        subHead1={"POWERFUL ANALYTICS TOOLS"}
        subHead2={"We'll do the hard work"}
        body={
          "The best profile builders do the hard work for you. Our AI tools can do it all, use our platform to get advanced analysis of your social media presence and get your connected with the right brands."
        }
        ltr={true}
      />
      <CardInfo
        subHead1={"CHOOSE WHAT YOU WANT TO BE VISIBLE ON YOUR PROFILE"}
        subHead2={"We're creator-first platform"}
        body={
          "When it comes to sharing your work and accomplishments with others, it's important to have control over what you're displaying. That's why we've made it easy for you to select the metrics you want others to see on your profile and hide the ones you don't. With our customixable profits feature, you have the power to curate your online presence and showcase your skills and experience in the way that best represents you. So take advantage of this tool and make your profile uniquely yours."
        }
      />
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
              3. Pick a profile template with professional tools to get started.
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
            borderRadius: "7px",
            padding: "2.5vh 2.5vh",
            backgroundColor: "black",
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
          <Faq
            data={data}
            styles={{
              titleTextColor: "blue",
              rowTitleColor: "blue",
              marginBottom: "1rem",
              rowContentPaddingBottom: "10px",
            }}
          />
          {/* <div className={styles.qaStyling}>
            <MediaCard
              title={"Do you store my paswords?"}
              subtitle={
                "No, your passwords are never entered into mediakits.com, all connections are done securely through the 1st party authentication window of each platform"
              }
            />
            <MediaCard
              title={"Do you sell my data?"}
              subtitle={
                "We do not, mediakits is a creator-first company, we do not sell user data to brands or 3rd party data companies."
              }
            />

            <MediaCard
              title={"How do you calculate engagemenent rate?"}
              subtitle={
                "We divide the avg engagement count per cost by total followers on that platform to get the average engagement rate."
              }
            />
            <MediaCard
              title={"Will Brand2Connect help  me land brand deals?"}
              subtitle={
                "Owning a mediaket gives you control over your brand, saves you time by automating updtaes, and increase client confidence by showingcasing your audience and experience with verified data."
              }
            />
            <MediaCard
              title={"How often is my Brand2Connect updated?"}
              subtitle={
                "Brand2Connect are updated weekly for free users, brand2connect are updated daily for pro users and enterprise users."
              }
            />
          </div> */}
          <div
            style={{
              background: "white",
              fontFamily: "sans-serif",
              fontSize: 14,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              padding: "2vh 2vh",
              borderRadius: "8px",
              marginTop: "3vh",
              border: "1px solid black",
              backgroundColor: "#FC076F",
              padding: "1em",
            }}
          >
            <div style={{ color: "whitesmoke", fontWeight: 700 }}>
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
            <h1>Brand2Connect</h1>
            <p>
              Stand out from the crowd and attract new brands with the best
              portfolio website builder. Profile creation has never been so
              simple. Use artificial design intelligence to create a customized
              profile to share with BRANDS.
            </p>
          </div>
          <div style={{ flex: 1, alignContent: "center" }}>
            <ul>
              <li>About</li>
              <li>Services</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div style={{ flex: 1 }}>
            <h2>Social Handles</h2>
            <div>
              <span>icon</span>
              <span>icon</span>
              <span>icon</span>
            </div>
          </div>
        </div>
        <div>
          <span>Privacy Policies</span>
          <span>Terms & Conditions</span>
        </div>
      </div>
    </div>
  );
};
export default Home;
