import styled from "styled-components";
export const MainDiv = styled.div`
  width: 100%;
  display: block;
  text-align: center;
  align-items: center;
  align-content: center;
  align-self: center;
  margin: 0%;
  padding: 0;
  font-family: museo-sans 700 sans-serif;
  /* height:300px; */
`;
export const CardDiv = styled.div`
  width: 75%;
  height: 300px;
  background-image: linear-gradient(90deg, #f47f7f 0%, #835ce5 100%);
  color: #ffffff;
  margin: 10px auto;
  border-radius: 5px;
  padding: 60px 50px;
  box-sizing: border-box;
`;
export const CardH1 = styled.h2`
  font-size: 28px;
  width: 80%;
  max-width: 510px;
  margin: auto;
`;

export const CardButton = styled.button`
  background-color: #ffffff;
  width: 220px;
  height: 55px;
  color: #f37e5d;
  margin: 20px auto;
  border: none;
  border-radius: 4px;
  font-size: 15px;
  font-weight: 600;
`;

export const CardHref = styled.a`
  color: #ffffff;
  font-size: 14px;
`;

export const OuterDiv = styled.div`
  width: 80%;
  margin: 70px auto 20px auto;
  color: #4b4b4b;
`;

export const HeadingDiv = styled.div`
  width: 90%;
  margin: auto;
`;
export const HeadingH3 = styled.p`
  font-size: 20px;
  /* font-weight: 600; */
  font-family: Merriweather serif;
  line-height: 30px;
  color: #4b4b4b;
`;

export const ImageAndNameDiv = styled.div`
  width: 450px;
  margin: auto;
  display: flex;
  gap: 20px;
  justify-content: center;
  @media screen and (max-width:700px){
    width:auto
  }
`;

export const ImageDiv = styled.div`
  width: 70px;
  height: 70px;
  /* border-radius: 50%; */
  /* border: 1px solid red; */
`;
export const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;
export const NameDiv = styled.div`
  text-align: left;
  margin-top: -8px;
`;

export const NameH5 = styled.h5`
  font-size: 12px;
  margin-bottom: -10px;
  /* font-weight:500; */
`;
export const LinkDiv = styled.div`
width:750px;
margin: auto;
@media screen and (max-width:1000px) {
    width:auto
}

`;
export const LinkA = styled.a`
  color: #f37e5d;
  font-size:15px ;
  font-weight: bold;
`