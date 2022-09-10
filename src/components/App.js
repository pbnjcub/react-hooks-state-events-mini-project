import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [categories, setCategories] = useState(CATEGORIES)
  const [filteredValue, setFilteredValue] = useState("All")
  const [selectedCategory, setSelectedCategory] = useState("")
  const [taskDetail, setTaskDetail] = useState("")
  const [submittedData, setSubmittedData] = useState([]);


  function deleteItem(key) {
    const newTasksArray = tasks.filter((task) => task.text !== key)
    setTasks(newTasksArray)
  }

  function onTaskFormSubmit(submittedData) {
    const newItemArray = [...tasks, submittedData]
    setTasks(newItemArray)
  }
 


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={categories} setFilteredValue={setFilteredValue}  />
      <NewTaskForm categories={categories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} taskDetail={taskDetail} setTaskDetail={setTaskDetail} setSubmittedData={setSubmittedData} onTaskFormSubmit={onTaskFormSubmit} />
      <TaskList tasks={tasks} deleteItem={deleteItem} filteredValue={filteredValue}/>
    </div>
  );
}

export default App;
