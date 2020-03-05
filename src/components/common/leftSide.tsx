import React from "react";
import styled from "styled-components";
import { colors, fontSizes } from "../../vars/vars";
import page from "../assets/img/page.png";
const LeftContainer = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100vh;
  background-color: #8bbaf0;
  padding: 4%;
`;
const HeaderText = styled.h1`
  color: ${colors.blueDarker};
  font-size: ${fontSizes.extraBig};
`;
const PagePhoto = styled.img`
  width: 100%;
`;

const LeftSide: React.FC = () => {
  return (
    <LeftContainer>
      <HeaderText>
        Een professionele pagina, zo simple als rijst koken
      </HeaderText>
      <PagePhoto src={page} alt="pagina" />
    </LeftContainer>
  );
};
export default LeftSide;
