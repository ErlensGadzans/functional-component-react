import "./App.css";
import { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "../src/components/Home";
import NavBar from "../src/components/NavBar";

function App() {
  return (
    <BrowserRouter>
      {/* <NavBar /> */}
      <div>
        <Route exact path="/" component={Home} />
      </div>
    </BrowserRouter>
  );
}

export default App;
