import React from "react";
import styled from "styled-components";
import { colors } from "../../vars/vars";
import AddForm from "../add/addForm";

const RightContainer = styled.div`
  width: 70%;
  background-color: ${colors.greyLighter};
  display: flex;
  justify-content: center;
  padding: 5% 0;
`;

const RightSide: React.FC = () => {
  return (
    <RightContainer>
      <AddForm />
    </RightContainer>
  );
};
export default RightSide;
