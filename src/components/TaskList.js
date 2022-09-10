import React from "react";
import Task from "./Task"

function TaskList( { tasks, deleteItem, filteredValue }) {

  function handleClick(key) {
    deleteItem(key)
  }
   
  const filteredList = tasks.filter((task) => {
    if (filteredValue === "All") {
      return true
    } else {
      return task.category === filteredValue
    }
  })
  
  const taskListItem = filteredList.map((task) => {
    return <Task key={task.text} text={task.text} category={task.category} deleteItem={deleteItem} handleClick={handleClick}/>
  })

  return (
    <div className="tasks">
      { taskListItem }
    </div>
  );
}

export default TaskList;
