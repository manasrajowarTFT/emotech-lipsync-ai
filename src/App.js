import React, { useState } from "react";
import Navbar from "./components/UI/Navbar/Navbar";
import Home from "./components/Home/Home";

function App() {
  const [state, setState] = useState(false);

  // const toggleDrawer = (event) => {
  //   if (
  //     event &&
  //     event.type === "keydown" &&
  //     (event.key === "Tab" || event.key === "Shift")
  //   ) {
  //     return;
  //   }

  //   setState((prevState) => !prevState);
  // };
  return (
    <>
      <Navbar open={state} toggleDrawer={setState} />
      <Home open={state} toggleDrawer={setState} />
    </>
  );
}

export default App;
