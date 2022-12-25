import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [theme , setTheme] = useState("App light");

  function handelTheme() {
    if (theme === "App light") {
      setTheme("App dark")
    } else if (theme === "App dark") {
      setTheme("App light")
    }
  };


  return (
    <div className={theme}>
      <header>
        <h2>Shopster</h2>
        <button  onClick={handelTheme}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
