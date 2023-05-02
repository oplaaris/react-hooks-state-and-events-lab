import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature

  const [isDarkMode,setIsDarkMode]=useState(false);

  // create a function to handle the click event on the button 
  function handleDarkModeClick(){
    // toggle the value of isDarkMode by calling setIsDarkMode with the opposite value
    setIsDarkMode(!isDarkMode);
  }

// use the isDarkMode variable to determine the className of the div element
const appClass = isDarkMode ? "App dark" : "App light";

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkModeClick}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
