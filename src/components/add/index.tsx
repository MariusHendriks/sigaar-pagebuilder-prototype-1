import React from "react";
import LeftSide from "../common/leftSide";
import RightSide from "../common/rightSide";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;

const Add: React.FC = () => {
  return (
    <Container>
      <LeftSide />
      <RightSide />
    </Container>
  );
};
export default Add;
