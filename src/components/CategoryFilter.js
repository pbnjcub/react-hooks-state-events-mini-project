import React, { useState } from "react";

function CategoryFilter( { categories, setFilteredValue } ) {
  const [selectedCategory, setSelectedCategory] = useState("All")

  


  const handleCategoryClick = (e) => {
    setFilteredValue(e.target.value)
    setSelectedCategory(e.target.value)
    changeBtnClass(selectedCategory)
  }

 

  const categoryBtns = categories.map((category) => {
  return <button className={category} key={category} onClick={handleCategoryClick} value={category}>{category}</button>
  })

  function changeBtnClass(selectedCategory) {
    const selectedBtn = categoryBtns.map(btn => {
      if (btn.props.value === selectedCategory) {
        return {...btn, className: "selected"}
      } else {
        return {...btn}
      }
    })
    return selectedBtn
  }




  return (
    <div className="categories">
      <h5>Category filters</h5>
        { categoryBtns }  
    </div>
  );
}

export default CategoryFilter;
