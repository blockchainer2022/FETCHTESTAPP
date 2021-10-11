import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Test from "./pages/Test";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />

          <Route exact path="/:id" component={Test} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
