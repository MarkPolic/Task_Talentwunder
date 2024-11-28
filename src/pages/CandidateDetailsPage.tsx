import React from "react";
import { useParams } from "react-router-dom";
import { candidatesData } from "../data/candidatesData";
import CandidateDetails from "../components/CandidateDetails/CandidateDetails";
import { Candidate } from "../types";

const CandidateDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const candidate: Candidate | undefined = candidatesData.find(
    (candidate) => candidate.id === parseInt(id || "", 10)
  );
  console.log(candidate);
  if (!candidate) {
    return <div>Candidate not found</div>;
  }

  return <CandidateDetails candidate={candidate} />;
};

export default CandidateDetailsPage;
