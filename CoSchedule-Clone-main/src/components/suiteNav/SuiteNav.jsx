import React from "react";
import {
  MainDiv,
  LeftDiv,
  LogoDiv,
  LogoImg,
  ExploreDiv,
  RightDiv,
  GetDemoButton,
  DropDownDiv,
} from "./suite.styled";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MenuIcon from '@mui/icons-material/Menu';
function SuiteNav() {
    return <MainDiv>
        <LeftDiv>
            <LogoImg src="https://coschedule.com/img/product/coschedule-marketing-suite-logo-color.svg" alt="Marketing Suite Logo" />
            <ExploreDiv><h5>Explore</h5> <p><ArrowDropDownIcon  style={{fontSize:"medium" ,  padding:"5px",paddingTop:"8px"}}/></p></ExploreDiv>
      </LeftDiv>
      <RightDiv>
        <GetDemoButton>Get a Demo</GetDemoButton>
        <DropDownDiv>

        <MenuIcon/>
        </DropDownDiv>
      </RightDiv>
  </MainDiv>;
}

export default SuiteNav;
