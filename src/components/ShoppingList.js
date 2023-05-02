import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  //create a state variable and a setter function for keeping track of the selected category
const[selectedCategory,setSelectedCategory]= useState("All");

//create a function to handle the change event on the select element
function handleFilterChange(event){
  // update the value of selectedCategory by calling setSelectedCategory with the value of the select element
  setSelectedCategory(event.target.value);
}
//filter the items array based on the selectedCategory
const filteredItems=items.filter(item=>selectedCategory==="All" || 
item.category=== selectedCategory);


  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleFilterChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
