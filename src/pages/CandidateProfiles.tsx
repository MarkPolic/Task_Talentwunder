import React from "react";
import { useOrganizationContext } from "../contexts/OrganizationContext";
import CandidateList from "../components/CandidatesList/CandidateList";
import { candidatesData } from "../data/candidatesData";
import { StyledDiv, StyledHeader } from "../styleTS";

const CandidateProfiles: React.FC = () => {
  const { selectedOrg } = useOrganizationContext();

  const filteredCandidates = !selectedOrg
    ? candidatesData
    : candidatesData.filter((candidate) =>
        candidate.experiences.some(
          (experience) => experience.organizationId === selectedOrg
        )
      );
  console.log(selectedOrg);
  return (
    <div>
      <StyledHeader>Candidates List</StyledHeader>
      <StyledDiv>
        <CandidateList candidates={filteredCandidates} />
      </StyledDiv>
    </div>
  );
};

export default CandidateProfiles;
