import styled from "styled-components";
export const MainDiv = styled.div`
  width: 100%;
  height: auto;
  /* border: 1px solid black; */
  /* overflow: hidden */
  background-color: whitesmoke;
`;
export const ContainerDiv = styled.div`
  width: 90%;

  margin: auto;
  position: sticky;
  /* margin-top: 70px; */
  height: 700px;
  overflow: scroll;
  overflow-x: hidden;

`;
export const RangeDiv = styled.div`
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  width: 100%;
  height: 45px;
  background-color: #dedede;
  margin: auto;
  box-sizing: border-box;
  padding-top: 0.1px;
  font-size: 15px;
  line-height: 20px;
  font-weight: 400;
  font-style: normal;
  font-family: MuseoSans-700, "Helvetica Neue", Helvetica, Arial, sans-serif;
  /* text-align: center;
align-content: center;
align-items: center ;
align-self: center; */
`;
export const DaynameDivs = styled.div`
  width: 100%;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(1, 1fr);
  /* border: 1px solid red; */
  /* gap: 20px; */
  text-align: left;
  /* padding-left: 10px; */
  box-sizing: border-box;
  border: 1px solid #dedede;
  border-bottom: none;
  position: sticky;
  top: 0px;
  background-color: #FFFFFF;

  z-index: 2;
`;

export const DaysName = styled.div`
  border-left: 1px solid #dedede;
  border-right: 1px solid #dedede;
  position: sticky;
`;

export const DayP = styled.p`
  padding-left: 10px;
  font-size: 14px;
  color: #999;
  font-weight: 400;
  font-family: Arial, Helvetica, sans-serif;
`;

export const CalenderDiv = styled.div`
  width: 100%;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(4, 1fr);
  /* border: 1px solid red; */
  gap: 0px;
  text-align: left;
  background-color: #FFFFFF;
`;

export const DayDiv = styled.div`
  /* width:100%; */
  min-height: 150px;
  height: auto;
  border: 1px solid #dedede;
  border-top: none;
  box-sizing: border-box;
  /* padding: 10px 0px 0px 10px; */
  padding-left: 10px;
`;
