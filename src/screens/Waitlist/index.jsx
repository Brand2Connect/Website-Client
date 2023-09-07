import React, { useState } from "react";
import styles from "./style.module.css";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Header from "../../components/Header";
import ControlledAccordions from "../../components/Accordian";
import UnstyledButtonsSimple from "../../components/Button";
import Footer from "../../components/Footer";
import Box from "@mui/material/Box";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const WaitList = () => {
  const [purpose, setPurpose] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [emailId, setEmailId] = useState("");
  const [igProfile, setIgProfile] = useState("");
  const [ytChannel, setYtChannel] = useState("");
  const [pOfPCreation, setPOPCreation] = useState("");
  const [errObj, setErrObj] = useState({
    fNErr: false,
    lNErr: false,
    eIErr: false,
    igPErr: false,
  });

  const [openToast, setOpenToast] = useState(false);

  const handleChange = (event) => {
    setPurpose(event.target.value);
  };

  const getBody = () => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          rowGap: 4,
          fontFamily: "sans-serif",
        }}
      >
        <div className={styles.weightListRow}>
          {" "}
          <div style={{ fontWeight: "bold", minWidth: "120px" }}>
            Priority Access:{" "}
          </div>
          <div>
            Be among the first to experience the power of data-driven insights
            and brand collabration tailered to your unique style.
          </div>
        </div>
        <div className={styles.weightListRow}>
          {" "}
          <div style={{ fontWeight: "bold", minWidth: "120px" }}>
            Stay in the Know:{" "}
          </div>
          <div>
            Get insider updates on our platform's development, new features, and
            success stories from fellow creators.
          </div>
        </div>
        <div className={styles.weightListRow}>
          {" "}
          <div style={{ fontWeight: "bold", minWidth: "120px" }}>
            Secure your Spot:{" "}
          </div>
          <div>
            Limited Spots avilable. Secure your place now to ensure you don't
            miss on this game-changing opportunity.
          </div>
        </div>
      </div>
    );
  };

  const getBody2 = () => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          rowGap: 4,
          fontFamily: "sans-serif",
        }}
      >
        <div className={styles.weightListRow}>
          {" "}
          <div style={{ fontWeight: "bold", minWidth: "120px" }}>Sign Up: </div>
          <div>
            Fill in your details and secure your spot on the waitlist. Don't
            worry, it's quick and hassle-free.
          </div>
        </div>
        <div className={styles.weightListRow}>
          {" "}
          <div style={{ fontWeight: "bold", minWidth: "120px" }}>
            Anticipate:{" "}
          </div>
          <div>
            As we prepare to launch, you'll receive exclusive content and
            insights to keep you inspired and informed.
          </div>
        </div>
        <div className={styles.weightListRow}>
          {" "}
          <div style={{ fontWeight: "bold", minWidth: "120px" }}>
            Be the First:{" "}
          </div>
          <div>
            When the platform goes live, ypu'll receive early access to start
            tailoring your analytics, customizing your metrics, and connecting
            with brands that align with your values.
          </div>
        </div>
      </div>
    );
  };

  const handleForm = async () => {
    if (firstName === "") {
      setErrObj((prev) => ({ ...prev, fNErr: true }));
      setTimeout(() => {
        setErrObj((prev) => ({ ...prev, fNErr: false }));
      }, 3000);
    }
    if (lastName === "") {
      setErrObj((prev) => ({ ...prev, lNErr: true }));
      setTimeout(() => {
        setErrObj((prev) => ({ ...prev, lNErr: false }));
      }, 3000);
    }
    if (emailId === "") {
      setErrObj((prev) => ({ ...prev, eIErr: true }));
      setTimeout(() => {
        setErrObj((prev) => ({ ...prev, eIErr: false }));
      }, 3000);
    }
    if (igProfile === "") {
      setErrObj((prev) => ({ ...prev, igPErr: true }));
      setTimeout(() => {
        setErrObj((prev) => ({ ...prev, igPErr: false }));
      }, 3000);
    }

    if (
      firstName === "" ||
      lastName === "" ||
      emailId === "" ||
      igProfile === ""
    ) {
      // alert("Please fill all the fields");
      setOpenToast(true);
      return;
    }

    setOpenToast(false);
    setErrObj((prev) => ({
      ...prev,
      fNErr: false,
      lNErr: false,
      eIErr: false,
      igPErr: false,
    }));

    console.log({
      firstName,
      lastName,
      mobileNo,
      emailId,
      igProfile,
      ytChannel,
      pOfPCreation,
    });
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenToast(false);
  };
  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );
  return (
    <div className={styles.home}>
      <Header />

      <Snackbar
        open={openToast}
        autoHideDuration={3000}
        onClose={handleClose}
        message="Enter All Fields!"
        action={action}
      />

      <div className={styles.waitListBody}>
        <div></div>
        <div className={styles.waitListSubBody}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "flex-start",
              marginBottom: "15rem",
              gap: "7rem",
            }}
          >
            <div className={styles.layersContainer}>
              <div className={styles.layerOne}></div>
              <div className={styles.layerTwo}></div>
              <div className={styles.layerThree}></div>
              <div className={styles.layerFour}></div>
            </div>

            <div
              style={{
                flex: 5,
                margin: "0rem 4rem 0rem 4rem",
                color: "white",
                padding: "0rem 1rem 0 rem 1rem",
              }}
            >
              {" "}
              <div
                style={{ display: "flex", flexDirection: "row", gap: "1rem" }}
              >
                <img
                  src="./bell.png"
                  alt="bell"
                  height={"80px"}
                  style={{ marginLeft: "-80px", marginTop: "1rem" }}
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "0rem",
                  }}
                >
                  <Typography
                    gutterBottom
                    variant="h3"
                    component="div"
                    className={styles.headerText}
                  >
                    Join the Waitlist for <br />
                    Exclusive Access
                  </Typography>
                  <img
                    src="./Underline_03.png"
                    alt="underline"
                    height="8px"
                    style={{ width: "50%" }}
                  />
                </div>
              </div>
              <Typography
                variant="p"
                component="div"
                className={styles.subHeaderText}
                style={{ marginTop: "3vh", textAlign: "justify" }}
              >
                We’re thrilled to see your interest in joining the exclusive
                waitlist for our revolutionary platform tailored for creators
                and influencers like you. By joining the waitlist, you’re taking
                the first step towards unlocking a world of possibilities to
                amplify your online presence, analyze your impact, and
                seamlessly connect with brands that resonate with your vision.
              </Typography>
            </div>

            <div
              style={{
                flex: 4,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "1rem 1rem 1rem 1rem",
                backgroundColor: "#000",
                borderRadius: "0.7rem",
              }}
            >
              <div style={{ zIndex: 1, marginBottom: "1rem", width: "100%" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "0.7rem",
                    marginBottom: "0.4rem",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <label
                      className={styles.myLabel}
                      style={{ marginLeft: "0.7rem" }}
                      htmlFor="firstName"
                    >
                      First Name
                    </label>
                    <input
                      className={styles.myInput}
                      style={{ width: "80%", marginLeft: "0.7rem" }}
                      type="text"
                      id="firstName"
                      value={firstName}
                      placeholder="First Name"
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                    {errObj.fNErr && (
                      <span style={{ color: "#FF2800", fontSize: "0.9rem" }}>
                        This is required!
                      </span>
                    )}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <label
                      className={styles.myLabel}
                      style={{ marginLeft: "0.7rem" }}
                      htmlFor="lastName"
                    >
                      Last Name
                    </label>
                    <input
                      className={styles.myInput}
                      style={{ width: "80%", marginRight: "0.3rem" }}
                      type="text"
                      id="lastName"
                      value={lastName}
                      placeholder="Last Name"
                      onChange={(e) => setLastName(e.target.value)}
                    />
                    {errObj.lNErr && (
                      <span style={{ color: "#FF2800", fontSize: "0.9rem" }}>
                        This is required!
                      </span>
                    )}
                  </div>
                </div>
                <div
                  style={{
                    padding: "0.3rem 0.7rem 0.3rem 0.7rem",
                    marginBottom: "0.4rem",
                    backgroundColor: "black",
                    borderRadius: "0.5rem",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <label className={styles.myLabel} htmlFor="mobileNumber">
                      Mobile No.
                    </label>
                    <input
                      className={styles.myInput}
                      type="text"
                      id="mobileNumber"
                      maxLength={10}
                      value={mobileNo}
                      placeholder="Mobile Number"
                      onChange={(e) =>
                        setMobileNo(e.target.value.replace(/[^0-9]+/g, ""))
                      }
                    />
                  </div>
                </div>
                <div
                  style={{
                    padding: "0.7rem 0.7rem 0.3rem 0.7rem",
                    marginBottom: "0.4rem",
                    backgroundColor: "black",
                    borderRadius: "0.5rem",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <label className={styles.myLabel} htmlFor="emailId">
                      Email Id
                    </label>
                    <input
                      className={styles.myInput}
                      type="text"
                      id="emailId"
                      value={emailId}
                      placeholder="Email Id"
                      onChange={(e) => setEmailId(e.target.value)}
                    />
                    {errObj.eIErr && (
                      <span style={{ color: "#FF2800", fontSize: "0.9rem" }}>
                        This is required!
                      </span>
                    )}
                  </div>
                </div>
                <div
                  style={{
                    padding: "0.3rem 0.7rem 0.3rem 0.7rem",
                    marginBottom: "0.4rem",
                    backgroundColor: "black",
                    borderRadius: "0.5rem",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <label className={styles.myLabel} htmlFor="igHandle">
                      Instagram Handle
                    </label>
                    <input
                      className={styles.myInput}
                      type="text"
                      id="igHandle"
                      value={igProfile}
                      placeholder="Instagram Handle"
                      onChange={(e) => setIgProfile(e.target.value)}
                    />
                    {errObj.igPErr && (
                      <span style={{ color: "#FF2800", fontSize: "0.9rem" }}>
                        This is required!
                      </span>
                    )}
                  </div>
                </div>
                <div
                  style={{
                    padding: "0.3rem 0.7rem 0.3rem 0.7rem",
                    marginBottom: "0.4rem",
                    backgroundColor: "black",
                    borderRadius: "0.5rem",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <label className={styles.myLabel} htmlFor="yt">
                      YouTube Channel
                    </label>
                    <input
                      className={styles.myInput}
                      type="text"
                      id="yt"
                      value={ytChannel}
                      placeholder="YouTube Channel"
                      onChange={(e) => setYtChannel(e.target.value)}
                    />
                  </div>
                </div>

                <div style={{ margin: "0 0.71rem 0 0.7rem" }}>
                  <label
                    className={styles.myLabel}
                    style={{ backgroundcolor: "black" }}
                    htmlFor=""
                  >
                    Purpose of Profile Creation
                  </label>
                  <FormControl
                    fullWidth
                    style={{
                      // padding: "0.3rem 0.7rem 0.3rem 0.7rem",
                      marginBottom: "0.4rem",
                      margin: "0 0.71rem 0 0",
                      backgroundColor: "white",
                      borderRadius: "0.5rem",
                    }}
                  >
                    <Select
                      style={{ maxWidth: "100%" }}
                      id="demo-simple-select"
                      value={purpose}
                      size="small"
                      label="Purpose of Profile Creation"
                      onChange={handleChange}
                    >
                      <MenuItem selected disabled value={""}>
                        Choose from drop down
                      </MenuItem>
                      <MenuItem value={"Brand Collaboration"}>
                        Brand Collaboration
                      </MenuItem>
                      <MenuItem
                        value={
                          "To Collaborate fellow influencers & content creators"
                        }
                      >
                        To Collaborate fellow influencers & content creators
                      </MenuItem>
                      <MenuItem value={"Other"}>Other</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
              <UnstyledButtonsSimple
                onClick={() => handleForm()}
                text={"Get Started"}
                backgroundColor="#FD3288"
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: "1rem",
              marginBottom: "5rem",
            }}
          >
            <img
              src="/images/bulb.png"
              alt="bulb"
              width="40rem"
              height="40rem"
            />
            <h1>How it works?</h1>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              marginBottom: "5rem",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: "1rem",
              }}
            >
              <div
                style={{
                  background: "black",
                  borderRadius: "50%",
                  color: "white",
                  // height: "30px",
                  // width: "30px",
                  padding: "20px",
                  alignSelf: "start",
                }}
              >
                1
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-start",
                }}
              >
                <p style={{ margin: 0 }}>Step 1</p>
                <p
                  style={{
                    margin: 0,
                    fontWeight: 900,
                    fontSize: 24,
                    color: "#FD3288",
                  }}
                >
                  Sign Up
                </p>
                <p style={{ margin: 0 }}>
                  Fill in your details and secure your spot on the waitlist.
                  Don't worry, it's quick and{" "}
                  <span style={{ color: "#FD3288" }}>hassle-free</span>.
                </p>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: "1rem",
              }}
            >
              <div
                style={{
                  background: "black",
                  borderRadius: "50%",
                  color: "white",
                  height: "20px",
                  width: "30px",
                  padding: "20px",
                }}
              >
                2
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-start",
                }}
              >
                <p style={{ margin: 0 }}>Step 2</p>
                <p
                  style={{
                    margin: 0,
                    fontWeight: 900,
                    fontSize: 24,
                    color: "#FD3288",
                  }}
                >
                  Anticipate
                </p>
                <p style={{ margin: 0 }}>
                  As we prepare to launch, you'll receive exclusive{" "}
                  <span style={{ color: "#FD3288" }}>content</span> and{" "}
                  <span style={{ color: "#FD3288" }}>insights</span>
                  to keep you inspired and informed.{" "}
                </p>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: "1rem",
              }}
            >
              <div
                style={{
                  background: "black",
                  borderRadius: "50%",
                  color: "white",
                  height: "20px",
                  width: "30px",
                  padding: "20px",
                }}
              >
                3
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-start",
                }}
              >
                <p style={{ margin: 0 }}>Step 3</p>
                <p
                  style={{
                    margin: 0,
                    fontWeight: 900,
                    fontSize: 24,
                    color: "#FD3288",
                  }}
                >
                  Be the First
                </p>
                <p style={{ margin: 0 }}>
                  When the platform goes live, you'll receive early access to
                  start tailoring your{" "}
                  <span style={{ color: "#FD3288" }}>analytics</span>, and
                  connecting with{" "}
                  <span style={{ color: "#FD3288" }}>brands</span> that align
                  with your values.
                </p>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "80vw",
            }}
          >
            <p style={{ fontSize: 28, fontWeight: 700 }}>
              Join our waitlist now and be at the forefront of creator
              empowerment!{" "}
            </p>
            <UnstyledButtonsSimple
              onClick={() =>
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
              }
              backgroundColor={"#FD3288"}
              text={"Join Wait list Now"}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default WaitList;
