import React from "react";
import {
  ChallengesDiv,
  ContentDiv,
  ChallengeH1,
  ChallengeP,
  VidDiv,
  VidVid,
  MainDiv,
} from "./close.styled";
function Close() {
  return (
    <MainDiv>
      <ContentDiv>
        <ChallengesDiv>
          <ChallengeH1>Close the output gap with Marketing Suite</ChallengeH1>
          <ChallengeP>
            Marketers are expected to do more without more resources. 60% of the
            workweek is wasted managing work — not completing it.
          </ChallengeP>
          <ChallengeP>
            CoSchedule Marketing Suite removes time wasters so your team can
            perform to its full potential.
          </ChallengeP>
        </ChallengesDiv>
        <VidDiv>
          <VidVid src={require("./video.gif")} type="video/mp4" autoPlay={1} />
        </VidDiv>
      </ContentDiv>
    </MainDiv>
  );
}

export default Close;
