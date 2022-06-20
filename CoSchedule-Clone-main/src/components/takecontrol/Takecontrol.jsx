import React from "react";
import {
  MainDiv,
  ContentDiv,
  H1Tag,
  H3tag,
  RequestDiv,
  Atag,
} from "./takecontrol.styled";
function Takecontrol() {
  return (
    <MainDiv>
      <ContentDiv>
        <H1Tag>
          Take Control Of Your Process And Bring Your Team Together.
        </H1Tag>

        <H3tag>
          <i>
             Complete more work. Deliver projects on time. Prove your value.
          </i>
        </H3tag>

        <RequestDiv>Request Your Demo</RequestDiv>
        <p>
          <Atag href="">Or Get Started Free</Atag>
        </p>
      </ContentDiv>
    </MainDiv>
  );
}

export default Takecontrol;
