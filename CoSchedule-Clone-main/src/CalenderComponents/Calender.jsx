import React, { useState, useEffect } from "react";
import moment from "moment";
import { v4 as uuidv4, v4 } from "uuid";
import {
    MainDiv,
    RangeDiv,
    CalenderDiv,
    DayDiv,
    DaynameDivs,
    DaysName,
    DayP,
    ContainerDiv,
} from "./calender.styled";
import { useNavigate } from "react-router-dom";
function Calender() {
  const Navigate = useNavigate();
    const [calender, setCalender] = useState([]);
    const [value, setValue] = useState(moment());
    const [back, setBack] = useState(false);

    const startDay = value.clone().startOf("month").startOf("week");
    const endDay = value.clone().endOf("month").endOf("Week");
    useEffect(() => {
        const day = startDay.clone().subtract(1, "day");
        const a = [];
        while (day.isBefore(endDay, "day")) {
            a.push(
                Array(7)
                    .fill(0)
                    .map(() => day.add(1, "day").clone())
            );
        }
        setCalender(a);
    }, [value]);

    // console.log(
    //   moment.locale("en", {
    //     calenders: {
    //       sameday: `[Today at] LT`,
    //     },
    //   })
    // );
    function handleProject(uuid, day) {
        let date = day._d;
        Navigate(`/todoTask/:${date}`);
    }

    function handleMouse() {
        setBack(back == true ? false : true);
        // console.log(back);
    }
    return (
        <MainDiv>
            <div>
                <h4>CALENDER</h4>
            </div>
            <div style={{ width: "90%", margin: "auto" }}>
                <RangeDiv>
                    <p>
                        {`${startDay.format("DD MMM")} - ${endDay.format(
                            "DD MMM"
                        )},${endDay.format("YYYY")}`}
                    </p>
                </RangeDiv>
            </div>

            <ContainerDiv>
                <DaynameDivs>
                    <DaysName>
                        <DayP>SUNDAY</DayP>
                    </DaysName>
                    <DaysName>
                        <DayP>MONDAY</DayP>
                    </DaysName>
                    <DaysName>
                        <DayP>TUESDAY</DayP>
                    </DaysName>
                    <DaysName>
                        <DayP>WEDNESDAY</DayP>
                    </DaysName>
                    <DaysName>
                        <DayP>THURSDAY</DayP>
                    </DaysName>
                    <DaysName>
                        <DayP>FRIDAY</DayP>
                    </DaysName>
                    <DaysName>
                        <DayP>SATURDAY</DayP>
                    </DaysName>
                </DaynameDivs>
                <CalenderDiv>
                    {calender.map((week) => (
                        <>
                            {week.map((day) => {
                                {
                                    /* <div>{day.format("D").toString()}</div> */
                                }
                                {
                                    /* {console.log(day.format("D/MMM"))} */
                                }
                                const uuid = v4();
                                return (
                                    <DayDiv
                                        key={uuid}
                                        onClick={() => handleProject(uuid, day)}
                                    >
                                        <p style={{ fontSize: "12px" }}>
                                            {day.format("D")}
                                        </p>
                                    </DayDiv>
                                );
                            })}
                        </>
                    ))}
                </CalenderDiv>
            </ContainerDiv>
        </MainDiv>
    );
}

export default Calender;
