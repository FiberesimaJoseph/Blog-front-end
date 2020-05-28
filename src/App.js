import React from "react";
// import Login from "./pages/Login";
import AppBar from "./components/AppBar";
import Navigation from "./components/Navigation";
import General from "./pages/General";
const App = () => {
  return (
    <div>
      <header>
        <AppBar />
        <Navigation />
      </header>
      <General />
    </div>
  );
};

export default App;
