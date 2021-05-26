import react from "react";
import LandingPage from "./page/LadingPage";
import Question1 from "./component/Question1";
import Question2 from "./component/Question2";
import Question3 from "./component/Question3";
import Result1 from "./component/Result1";
import Result2 from "./component/Result2";
import Result3 from "./component/Result3";
import Result4 from "./component/Result4";
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
        <Route path="/Result1" component={Result1}></Route>
        <Route path="/Result2" component={Result2}></Route>
        <Route path="/Result3" component={Result3}></Route>
        <Route path="/Result4" component={Result4}></Route>
      </Switch>
    </Router>
    // <h1>Hello</h1>
  );
}

export default App;
