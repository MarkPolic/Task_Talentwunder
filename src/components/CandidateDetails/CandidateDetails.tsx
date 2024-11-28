import React from "react";
import { Typography, List, ListItem, ListItemText } from "@mui/material";
import { Candidate } from "../../types";
import { StyledDivDetails } from "./CandidateDetailsStyle";

interface CandidateDetailsProps {
  candidate: Candidate;
}

const CandidateDetails: React.FC<CandidateDetailsProps> = ({ candidate }) => {
  return (
    <>
      <StyledDivDetails>
        <Typography>{candidate.name}</Typography>
        <Typography>Email: {candidate.email}</Typography>
        <Typography>Position: {candidate.position}</Typography>
        <Typography>Job Experiences:</Typography>
        <List>
          {candidate.experiences.map((exp, idx) => (
            <ListItem key={idx}>
              <ListItemText
                primary={`${exp.title} at ${exp.company}`}
                secondary={`${exp.start} - ${exp.end}`}
              />
            </ListItem>
          ))}
        </List>
      </StyledDivDetails>
    </>
  );
};

export default CandidateDetails;
