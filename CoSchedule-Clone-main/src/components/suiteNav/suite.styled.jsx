import styled from "styled-components"
export const MainDiv = styled.div`
width:100%;
background-color:#FFFFFF;
height:61px;
/* border:1px solid red; */
color: #2F2F2F;
font-family: museo sans 700 sans-serif;
display: flex;
padding:10px;
box-sizing: border-box;
justify-content: space-between;
position: sticky;
top:0;
`
export const LeftDiv = styled.div`
display: flex;
gap:20px;
align-items: center;

`
export const LogoDiv = styled.div`

`

export const LogoImg = styled.img`
height:40px;
width:180px;
cursor: pointer;

`
export const ExploreDiv = styled.div`
display: flex;
cursor: pointer;

&:hover{
    color: #eb7e5c;
}
@media screen and (max-width:1000px) {
    display: none;
}
`
export const RightDiv = styled.div`
display: flex;
align-items: center;

`
export const GetDemoButton = styled.button`
width:150px;
height:40px;
border: none;
background-color: #eb7e5c;
color: #FFFFFF;
border-radius: 5px;
font-size: 14px;
font-weight: 400;
cursor: pointer;

font-family: museo sans 700 sans-serif;
&:hover{
    background-color: #e7452c;
}
@media screen and (max-width:1000px) {
    display: none;
}
`
export const DropDownDiv = styled.div`
color: gray;
/* border:10px solid whitesmoke; */
display: none;
box-sizing: border-box;
border-radius: 4px;;
padding: 3px 8px;
box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;align-items: center;
text-align: center;
align-self: center;
align-content: center;
&:hover{
    /* box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    border:0px 0px 5px 5px whitesmoke  ; */
    background-color: whitesmoke;
}
@media screen and (max-width:1000px) {
    display: block;
}
cursor: pointer;
`