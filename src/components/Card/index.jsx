import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActions } from "@mui/material";
import UnstyledButtonsSimple from "../Button";
import styles from "./style.module.css";

export default function MediaCard({
  imgSrc,
  title,
  body,
  list,
  btnSrc,
  align,
  flexDirection,
  imgSrc2,
  bgImage,
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: flexDirection,
        justifyContent: "space-around",
        gap: "5rem",
      }}
    >
      <div>
        <Card
          sx={{
            fontSize: 13,
            maxWidth: 400,
            minWidth: 400,
            backgroundColor: "#FFDEDD",
            borderRadius: "2rem 2rem 2rem 0",
            margin: "0 0 1rem 0",
          }}
        >
          <CardContent>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                gap: "0.5rem",
              }}
            >
              <img src={imgSrc} alt={"icon"} height={20} width={20} />{" "}
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                style={{
                  fontWeight: 600,
                  marginBottom: "0.7vh",
                  fontSize: 16,
                  marginBottom: "1rem",
                }}
              >
                {title}
              </Typography>
            </div>
            {body ? (
              <Typography
                variant="body2"
                color="text.secondary"
                style={{
                  fontWeight: 300,
                  color: "gray",
                  fontSize: 14,
                  lineHeight: "1.1rem",
                  marginLeft: "1rem",
                }}
              >
                {body}
              </Typography>
            ) : null}
            {list ? (
              <Typography
                variant="body2"
                color="text.secondary"
                style={{
                  fontWeight: 300,
                  color: "gray",
                  fontSize: 14,
                  lineHeight: "1.1rem",
                  marginLeft: "1rem",
                }}
              >
                <ul style={{ paddingLeft: "1rem" }}>
                  {list.map((item, i) => {
                    return <li key={i}>{item}</li>;
                  })}
                </ul>
              </Typography>
            ) : null}
            <CardActions></CardActions>
          </CardContent>
        </Card>
        <UnstyledButtonsSimple
          backgroundColor={"#FC076F"}
          text={"Know More"}
          // onClick={null}
          showArrow={true}
        />
      </div>
      {imgSrc2 ? (
        <div style={{ margin: "0 10rem 0 1rem" }}>
          <div className={styles.imageOne}>
            <img src={imgSrc2} alt="image" width={340} height={200} />
          </div>
          <div className={styles.imageTwo}>
            <img src={bgImage} alg="image2" height={300} />
          </div>
        </div>
      ) : (
        <div style={{ height: 340, width: 350 }}>
          <img src={bgImage} alg="image2" height={200} />
        </div>
      )}
    </div>
  );
}
