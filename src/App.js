import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import NotFound from "./components/NotFound";
import Employee from "./components/Employee";
import Computer from "./components/Computer";
import CellPhone from "./components/CellPhone";



function App() {
  return (
    <div>
      <h1>IT Help Desk Ticket System</h1>
      <NavBar/>
      <Switch>
        <Route path="/computer">
          <Computer />
        </Route>
        
        <Route path="/cellphone">
          <CellPhone />
        </Route>

        <Route path="/employee">
          <Employee/>
        </Route>

        <Route path="/*">
          <NotFound/>
        </Route>

      </Switch>
    </div>
  );
}

export default App;
