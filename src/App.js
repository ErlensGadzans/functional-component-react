import "./App.css";
import { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "../src/components/Home";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
    </BrowserRouter>
  );
}

export default App;
