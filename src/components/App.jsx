import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "@fortawesome/react-fontawesome";
import "../App.css";
import {
  faCircleCheck,
  faPencil,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  const [toDo, setToDo] = useState([
    { id: 1, title: "Task 1", status: false },
    { id: 2, title: "Task 2", status: false },
    { id: 3, title: "Task 3", status: false },
  ]);
  //Holds new Task Data
  const [newTask, setNewTask] = useState("");

  //Holds Previous or updated data
  const [updateData, setUpdateData] = useState("");

  const addTask = () => {};
  const updateTask = (id) => {};
  const deleteTask = (id) => {};
  const markDone = (id) => {};
  const cancelUpdate = () => {};
  //Change the Updated task
  const changeTask = (e) => {};

  return (
    <div className="App Container">
      <br />
      <br />
      <h2> TODO List App(ReactJS)</h2>
      <br />
      <br />
    </div>
  );
}

export default App;
