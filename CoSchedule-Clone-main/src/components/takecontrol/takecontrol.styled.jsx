import styled from "styled-components";
// import styled from 'styled-components/native'
export const MainDiv = styled.div`
  background-color: whitesmoke;
  font-family: museo sans 700 sans-serif;
  width: 100%;
  height: auto;
  /* border: 2px solid blue; */
  color: #223000;
  padding-top: 40px;
`;
export const ContentDiv = styled.div`
  /* style={{ width: "80%", margin: "auto" ,maxWidth:"1000px"}} */
  width: 80%;
  margin: auto;
  max-width: 1000px;
`;

export const H1Tag = styled.h1`
  font-size: 50px;
  color:#4B4B4B
`;
export const H3tag = styled.p`
  font-size: 26px;
  /* fontFamily:"marriweather sans serif" */
  font-family: merriweather serif;
`;

export const RequestDiv = styled.button`
  width: 220px;
  height: 52px;
  background-color: #eb7e5c;
  color: #ffffff;
  border:none;
  font-size: 15px;
  font-weight: 400;;
  border-radius:4px;
  &:hover{
    background-color: #e7452c;
  }
`;
export const Atag = styled.a`
color:#eb7e5c;
font-size: 12px;
`