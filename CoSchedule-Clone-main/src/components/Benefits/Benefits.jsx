import React from "react";
import {
  MainDiv,
  Container,
  CardsDiv,
  ContentDiv,
  ContentH1,
  ContentP,
  ImgDiv,
  Img,
} from "./benefits.styled";
function Benefits() {
  return (
    <MainDiv>
      <Container>
        {/* 1st card */}
        <CardsDiv>
          <ContentDiv>
            <ContentH1>Complete more work</ContentH1>
            <ContentP>
              Publish more content to generate a higher ROI by increasing your
              existing team’s productive work capacity. Eliminate endless email
              threads, unnecessary meetings, and desk drop-bys to
              <b> complete 125% more work.</b>
            </ContentP>
          </ContentDiv>
          <ImgDiv>
            <Img src="https://coschedule.com/img/product/suite/suite-complete-more-work.png"></Img>
          </ImgDiv>
        </CardsDiv>

        {/* 2nd Card */}
        <CardsDiv>
          <ImgDiv>
            <Img src="https://coschedule.com/img/product/suite/suite-deliver-projects-on-time.png"></Img>
          </ImgDiv>
          <ContentDiv>
            <ContentH1>Deliver Projects On Time</ContentH1>
            <ContentP>
              Develop a high-performance team that completes projects on time by
              balancing the predictability and flexibility of your work.
              Maintain <b> on-time task completion rates greater than 90%.</b>
            </ContentP>
          </ContentDiv>
        </CardsDiv>
        {/* 3rd card */}
        <CardsDiv>
          <ContentDiv>
            <ContentH1>Prove your value</ContentH1>
            <ContentP>
              Get full visibility into your marketing operations to prioritize,
              plan, and manage a reliable pipeline of upcoming and in-flight
              projects.<b>Focus 100% of your efforts </b> on work that aligns
              with strategic business goals
            </ContentP>
          </ContentDiv>
          <ImgDiv>
            <Img src="https://coschedule.com/img/product/suite/suite-prove-your-value.png"></Img>
          </ImgDiv>
        </CardsDiv>
      </Container>
    </MainDiv>
  );
}

export default Benefits;
