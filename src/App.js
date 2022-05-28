import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import NotFound from "./components/NotFound";
import AddEmployee from "./components/AddEmployee";
import Computer from "./components/Computer";
import CellPhone from "./components/CellPhone";
import UserList from "./components/UserList";



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

          <Route exact path="/employee">
            <AddEmployee/>
          </Route>

          <Route exact path="/employee/new">
              <UserList/>
          </Route>

          <Route path="/*">
            <NotFound/>
          </Route>

        </Switch>
    </div>
  );
}

export default App;
