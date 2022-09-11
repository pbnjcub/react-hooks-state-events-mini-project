import React, { useState } from "react";

function CategoryFilter( { categories, setFilteredValue, filteredValue } ) {
  const [isSelected, setIsSelected] = useState(false)



  const handleCategoryClick = (e) => {
    setFilteredValue(e.target.value)
    setIsSelected((isSelected) => !isSelected)
  }

  // const selectBtn = (filteredValue) => {
  //   categoryBtns.map(btn => {
  //     if( btn.props.value === filteredValue) {
  //       return {...btn, className: "selected"}
  //     } else {
  //       return {...btn, className: " "}
  //     }
  //   })
  // }

  const categoryBtns = categories.map((category) => {
    if(isSelected === true) {
      return <button className="selected" key={category} onClick={handleCategoryClick} value={category}>{category}</button>
    } else {
    return <button className=" " key={category} onClick={handleCategoryClick} value={category}>{category}</button>
    }
  })

  return (
    <div className="categories">
      <h5>Category filters</h5>
        { categoryBtns }  
    </div>
  );
}

export default CategoryFilter;
