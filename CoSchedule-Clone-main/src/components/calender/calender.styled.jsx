import styled from "styled-components";
export const MainDiv = styled.div`
  width: 100%;
  height: auto;
  background-color: whitesmoke;
  margin-top:-16px;
  /* border: 1px solid yellow; */
  /* text-align: center;
align-items: center;
align-self: center; */
padding-top:20px;
  @media screen and (max-width: 1000px) {
    background-color: #ffffff;
  }
`;

export const ContentDiv = styled.div`
  width: 50%;
  margin: auto;
  padding-bottom: 70px;
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  width: 65%;
  gap: 20px;
  margin: auto;
  justify-content: center;
  margin-top: -45px;
  @media screen and (max-width: 650px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: auto;
  }
`;

export const CardsDiv = styled.div`
  width: 210px;
  height: 110px;
  border-radius: 5px;
  padding: 20px 0px 2px 0px;
  cursor: pointer;
  /* box-sizing: border-box; */
  background-color: #ffffff;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  color: #4b4b4b;
  &:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  }
  @media screen and (max-width: 1000px) {
    width: auto;
  }
  @media screen and (max-width: 650px) {
    padding: 10px;
    display: flex;
    gap: 20px;
    /* justify-content: left; */
    align-items: center;
  }
`;

export const CardsImg = styled.img`
  width: 45px;
  height: 45px;
`;
export const CardsH5 = styled.h5`
font-size:16px;
margin:5px
`