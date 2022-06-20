import styled from "styled-components";
export const MainDiv = styled.div``;
export const ContentDiv = styled.div`
  width: 80%;
  display: flex;
  margin: 80px auto;
  justify-content: space-around;
  @media screen and (max-width: 1000px) {
    display: block;
    align-items: center;
    align-content: center;
    text-align: center;
    align-self: center;
  }
`;
export const ChallengesDiv = styled.div`
  max-width: 800px;
  font-family: Museo sans 700 sans-serif;
  color: #4b4b4b;
  width: 35%;
  text-align: left;
  line-height: 30px;
  margin: auto;
`;

export const ChallengeH1 = styled.h5`
  font-size: 32px;
  color: #4b4b4b;
`;
export const ChallengeP = styled.p`
  text-align: left;
  font-size: 17px; ;
`;
export const VidDiv = styled.div`
  width: 500px;
  height: 400px;
  margin: auto;
  @media screen and (max-width: 700px) {
    width: 400px;
    height: 300px;
  }
  @media screen and (max-width: 500px) {
    width: 300px;
    height: 250px;
  }
`;

export const VidVid = styled.img`
  width: 100%;
  height: 100%;
`;
