import React, { useState } from "react";
import styled, { css } from "styled-components";
import Todoitem from "./Todoitem";
import "./todo.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Container = styled.div``;

const ModalContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Modal = styled.div`
    background: #fff;
    position: absolute;
    top: 50px;
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 8px;
    padding: 20px;
    height: 500px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

/* const ModalContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Modal = styled.div`
  background: #fff;
  border: 1px solid #000;
  padding: 20px;
  min-height: 200px;
`; */

const Task = () => {
    const { date } = useParams();
    const Navigate = useNavigate();
    const [isOpen, setOpen] = useState(false);
    const [task, setTask] = useState("");
    const [todo, setTodo] = useState([]);
    const [title, setTitle] = useState("");
    const handal = (e) => {
        setTask(e.target.value);
    };
    const handclick = () => {
        let payload = {
            todo: task,
            status: false,
        };
        setTodo([payload, ...todo]);
    };

    const saveToDB = async () => {
        const data = {
            date: date,
            title: title,
            todos: todo,
        };
        await axios.post("https://co-schedule-clone.herokuapp.com/todo", data);
        alert("Todo added to DateBase");
        Navigate("/MainCalender");
    };
    return (
        <>
            <ModalContainer>
                <Modal>
                    <input
                        className="title_task_name"
                        type="text"
                        placeholder="Enter Project Name"
                        required
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <div>
                        <input
                            className="b"
                            type={"text"}
                            value={task}
                            placeholder="Write your task"
                            onChange={handal}
                        ></input>
                        <button className="c" onClick={handclick}>
                            +
                        </button>
                    </div>

                    {todo.map((item) => {
                        return <Todoitem key={item.id} data={item} />;
                    })}

                    <button className="saveButton_todo" onClick={saveToDB}>
                        Save
                    </button>
                </Modal>
            </ModalContainer>
        </>
    );
};
export default Task;
