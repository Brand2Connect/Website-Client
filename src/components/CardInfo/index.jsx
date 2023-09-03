import React from "react";
import styles from "./style.module.css";

export default function CardInfo(props) {
  return (
    <div className={styles.successStory}>
      <div></div>
      <div
        className={styles.imageTextStyle}
        style={{ flexDirection: props.ltr && "row-reverse" }}
      >
        <div className={styles.imgeader}></div>
        <div className={styles.imageSideStory}>
          <strong
            className={styles.subHeaderText}
            style={{ color: "grey", fontWeight: 400 }}
          >
            {props.subHead1}
          </strong>
          <h1 style={{ marginTop: "6px" }}>{props.subHead2}</h1>
          <div
            style={{
              fontWeight: 300,
              fontSize: 14,
              lineHeight: "1.1rem",
              color: "gray",
            }}
          >
            {props.body}
          </div>
          <ul className={styles.ulSideStory}>
            {props.liList &&
              props.liList?.map((item) => (
                <li className={styles.liSideStory}>{item}</li>
              ))}
          </ul>
        </div>
      </div>
      <div></div>
    </div>
  );
}
