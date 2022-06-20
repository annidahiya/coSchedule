import React from "react";
import {
  MainDiv,
  CardDiv,
  CardH1,
  CardButton,
  CardHref,
  OuterDiv,
  HeadingDiv,
  HeadingH3,
  ImageAndNameDiv,
  ImageDiv,
  Img,
  NameH5,
  NameDiv,
  LinkDiv,
  LinkA,
} from "./start.styled";
function StartComp() {
  return (
    <MainDiv>
      <CardDiv>
        <CardH1>Start completing more marketing with Marketing Suite</CardH1>
        <CardButton>Request Your Demo</CardButton>
        <p style={{ marginTop: "-15px" }}>
          {" "}
          <CardHref href="">Or Get Started Free</CardHref>
        </p>
      </CardDiv>
      <OuterDiv>
        <HeadingDiv>
          <HeadingH3>
            <i>
              "CoSchedule Marketing Suite has been a fabulous tool for managing
              projects. It’s so seamless. There’s no more back-and-forth on
              whether projects have been completed. It’s all right there where
              everybody can see it, so everybody’s accountable"
            </i>
          </HeadingH3>
        </HeadingDiv>
        <ImageAndNameDiv>
          <ImageDiv>
            <Img src="https://coschedule.com/img/testimonials/debora-spano-umass.png"></Img>
          </ImageDiv>
          <NameDiv>
            <NameH5>DEBORA SPANO</NameH5>
            <p style={{ fontSize: "14px" }}>
              Proactive Media Relations Manager
            </p>
          </NameDiv>
        </ImageAndNameDiv>
        <LinkDiv>
          <LinkA href="">See how UMass Memorial gained back 93 productive hours every month.</LinkA>
        </LinkDiv>
      </OuterDiv>
    </MainDiv>
  );
}

export default StartComp;
