import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import CourseSelect from "./components/CourseSelect";
import Error from "./components/Error";
import Subject from "./components/Subject";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/chooseCourse" exact>
          <CourseSelect />
        </Route>
        <Route path="/subject" exact>
          <Subject />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
