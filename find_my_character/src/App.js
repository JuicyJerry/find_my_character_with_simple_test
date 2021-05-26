import react from "react";
import LandingPage from "./Page/LadingPage";
import Question1 from "./Component/Question1";
import Question2 from "./Component/Question2";
import Question3 from "./Component/Question3";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// const { Router, Route, Switch } = require("react-router-dom");

function App() {
  return (
    <Router>
      <Route path="/" component={LandingPage} exact></Route>
      <Switch>
        <Route path="/Question1" component={Question1}></Route>
        <Route path="/Question2" component={Question2}></Route>
        <Route path="/Question3" component={Question3}></Route>
      </Switch>
    </Router>
    // <h1>Hello</h1>
  );
}

export default App;
