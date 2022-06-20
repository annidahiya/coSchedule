import React from "react";
import SuiteNav from "../components/suiteNav/SuiteNav";
import Takecontrol from "../components/takecontrol/Takecontrol";
import CalenderTask from "../components/calender/CalenderTask";
import Close from "../components/closeTheOutput/Close";
import StartComp from "../components/startComp/StartComp";
import Benefits from "../components/Benefits/Benefits";
function MarketingSuite() {
    return <>
      <SuiteNav />
      <Takecontrol />
      <CalenderTask />
      <Close />
      <StartComp />
      <Benefits/>
  </>;
}

export default MarketingSuite;
