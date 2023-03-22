import React from "react";
import styled from "styled-components";
import { img } from "../../assets";

export default function XO() {
  return (
    <ImgContainer>
      <Img style={{ marginRight: "10px" }} src={img.x} alt="x logo" />
      <Img src={img.o} alt="o logo" />
    </ImgContainer>
  );
}

const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Img = styled.img`
  width: 31.74px;
  height: 31.74px;
`;
