import React from "react";
import { CardContent, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Candidate } from "../../types";
import StyledCard from "./CandidateListStyle";

interface CandidateListProps {
  candidates: Candidate[];
}

const CandidateList: React.FC<CandidateListProps> = ({ candidates }) => {
  const navigate = useNavigate();

  return (
    <>
      {candidates.map((candidate) => (
        <StyledCard key={candidate.id}>
          <CardContent>
            <Typography variant="h6">{candidate.name}</Typography>
            <Typography>Email: {candidate.email}</Typography>
            <Typography>Position: {candidate.position}</Typography>
            <Button
              onClick={() => navigate(`/candidate/${candidate.id}`)}
              variant="contained"
              color="primary"
              sx={{ marginTop: 1 }}
            >
              View Details
            </Button>
          </CardContent>
        </StyledCard>
      ))}
    </>
  );
};

export default CandidateList;
