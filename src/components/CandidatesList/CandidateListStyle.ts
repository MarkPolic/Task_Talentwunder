import styled from "styled-components";
import { Card } from "@mui/material";

const StyledCard = styled(Card)`
  background-color: #007bff;  
  color: white;               
  padding: 10px 20px;         
  border: none;               
  border-radius: 4px;         
  font-size: 16px;            
width: fit-content;
  &:hover {
    background-color: #0056b3; 
  }
`;

export default StyledCard;
