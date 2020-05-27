import React from "react";
// import Login from "./pages/Login";
import AppBar from "./components/AppBar";
import Navigation from "./components/Navigation";
import Carousel from "./components/Carousel";
const App = () => {
  return (
    <div>
      <header>
        <AppBar />
        <Navigation />
      </header>
      {/* <Carousel /> */}
    </div>
  );
};

export default App;
