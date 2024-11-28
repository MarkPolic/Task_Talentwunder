import React from "react";
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  SelectChangeEvent,
} from "@mui/material";
import { useOrganizationContext } from "../../contexts/OrganizationContext";
import { candidatesData } from "../../data/candidatesData";

const Navbar: React.FC = () => {
  const { selectedOrg, setSelectedOrg } = useOrganizationContext();

  const uniqueCompanies = Array.from(
    new Map(
      candidatesData.flatMap((candidate) =>
        candidate.experiences.map((experience) => [
          experience.organizationId,
          experience.company,
        ])
      )
    )
  ).map(([organizationId, company]) => ({ organizationId, company }));

  const handleOrgChange = (event: SelectChangeEvent<number>) => {
    const value = event.target.value === "" ? 0 : Number(event.target.value);
    setSelectedOrg(value);
  };

  return (
    <nav>
      <FormControl fullWidth>
        <InputLabel>Organization</InputLabel>
        <Select value={selectedOrg ?? 0} onChange={handleOrgChange}>
          <MenuItem value={0}>All Organizations</MenuItem>
          {uniqueCompanies.map(({ organizationId, company }) => (
            <MenuItem key={organizationId} value={organizationId}>
              {company}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </nav>
  );
};

export default Navbar;
