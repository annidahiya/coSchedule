import React from "react";
import "./todo.css";

const Todoitem = ({ data }) => {
    return (
        <>
            <div className="data">
                <p style={{ marginTop: "0px" }}>{data.todo}</p>
                <input type="checkbox" className="input" />
                <img
                    src="https://cdn.onlinewebfonts.com/svg/img_187851.png"
                    alt=""
                />
            </div>
        </>
    );
};
export default Todoitem;
