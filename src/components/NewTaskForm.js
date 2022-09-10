import React from "react";

function NewTaskForm( { categories, selectedCategory, setSelectedCategory, taskDetail, setTaskDetail,  setSubmittedData, onTaskFormSubmit}) {

  const categoryOptions = categories.map((category) => {
    if (category !== "All") return <option key={category} value={category}>{category}</option>
  })

  function handleCategoryChange(e) {
    setSelectedCategory(e.target.value)
  }

  function handleTaskDetailChange(e) {
    setTaskDetail(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    const formData = { text: taskDetail, category: selectedCategory}
    const dataArray = formData
    setSubmittedData(dataArray)
    onTaskFormSubmit(dataArray)
    setSelectedCategory(" ")
    setTaskDetail(" ")
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleTaskDetailChange}/>
      </label>
      <label>
        Category
        <select name="category" onChange={handleCategoryChange}>
          { categoryOptions }
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
