import styled, { keyframes } from 'styled-components';
import { Grid } from "@mui/material";

import dummyImg from "../assets/dummy.svg";
const delayedFadeIn = keyframes`
  0% {
    opacity: 0;
  }
  66% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
export const GridItem = styled(Grid)`
  animation: ${delayedFadeIn} 0.75s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 15px;
  @media (max-width: 600px) {
    border-radius: 10px;
  }
`;

export const Users = styled.div`
  position: absolute;
  background-image: url(${dummyImg});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  border-radius: 15px;
  @media (max-width: 600px) {
    border-radius: 10px;
  }
`;
