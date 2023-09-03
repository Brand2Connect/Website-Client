import React from "react";
import styles from "./style.module.css";

export default function QA({ title, subtitle }) {
  return (
    <div className={styles.qaStyle}>
      <div style={{ fontWeight: 600, marginBottom: "0.7vh" }}>{title}</div>
      <div style={{ fontWeight: 300, color: "gray" }}>{subtitle}</div>
    </div>
  );
}
