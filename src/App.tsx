import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Landing from "./Routes/Landing/Landing";
import Resume from "./Routes/Resume/Resume";
import Footer from "./Components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/resume" component={Resume} />
        <Route path="/" component={Landing} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
