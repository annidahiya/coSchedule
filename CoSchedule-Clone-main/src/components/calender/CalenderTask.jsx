import React from "react";
import {
  MainDiv,
  ContentDiv,
  CardsContainer,
  CardsDiv,
  CardsImg,
  CardsH5,
} from "./calender.styled";
function CalenderTask() {
  return (
    <>
      <MainDiv>
        <ContentDiv style={{ margin: "auto", width: "50%" }}>
          <p style={{ maxWidth: "600px" }}>
            CoSchedule Marketing Suite is a family of agile marketing products
            that helps you coordinate your process, projects, and teams.
          </p>
        </ContentDiv>
      </MainDiv>
      <CardsContainer>
        {/* calender organizer */}
        <CardsDiv>
          <CardsImg src="https://coschedule.com/img/product/marketing-calendar-product-icon.png" />
          <CardsH5>Calender Organizer</CardsH5>
        </CardsDiv>
        {/* content orgainizer */}
        <CardsDiv>
          <CardsImg src="https://coschedule.com/img/product/content-organizer-product-icon.png" />
          <CardsH5>Content Organizer</CardsH5>
        </CardsDiv>
        {/* work organizer */}
        <CardsDiv>
          <CardsImg src="https://coschedule.com/img/product/work-organizer-product-icon.png" />
          <CardsH5>Work Organizer</CardsH5>
        </CardsDiv>
        {/* asset organizer */}
        <CardsDiv>
          <CardsImg src="https://coschedule.com/img/product/asset-organizer-product-icon.png" />
          <CardsH5>Asset Organizer</CardsH5>
        </CardsDiv>
      </CardsContainer>
    </>
  );
}

export default CalenderTask;
