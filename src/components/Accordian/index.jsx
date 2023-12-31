import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function ControlledAccordions({ data }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      {data?.map((acc, index) => {
        return (
          <Accordion
            style={{
              marginBottom: "1rem",
              borderRadius: "0.7rem",
              marginLeft: "5rem",
              marginRight: "5rem",
            }}
            expanded={expanded === `panel${index + 1}`}
            onChange={handleChange(`panel${index + 1}`)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography
                sx={{ flexShrink: 0 }}
                style={{ fontSize: "1rem", fontWeight: 600 }}
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2541/2541991.png"
                  alt="pencil"
                  width="15"
                />
                {"  "}
                {acc.title}
              </Typography>
              {/* <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography> */}
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                variant="p"
                component="div"
                style={{
                  fontWeight: 400,
                  fontSize: "14px",
                  color:"gray"
                }}
              >
                {acc.body}
              </Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}
