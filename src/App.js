import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import NotFound from "./components/NotFound";
import AddEmployee from "./components/AddEmployee";
import AddTicket from "./components/AddTicket";
import CellPhone from "./components/CellPhone";
import UserList from "./components/UserList";
import TicketList from "./components/TicketList";
import { Link } from "react-router-dom";
import Restart from "./components/Restart";




function App() {
  return (
    <div>
      <Link exact to="/" style={{border:"red"}}>
      <h1 className="ithds-header">IT Help Desk Ticket System</h1>
      </Link>
      <NavBar/>
        <Switch>
          <Route path="/computer">
            <AddTicket />
          </Route>

          <Route path="/ticketlist">
            <TicketList />
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

          <Route path="/restart">
            <Restart/>
          </Route>
          
          <Route path="/*">
            <NotFound/>
          </Route>

        </Switch>
        {/* giving credit to artist is below if publishing app  */}
        {/* <footer>
          <a href="https://www.freepik.com/vectors/data-background">Data background vector created by starline - www.freepik.com</a>
        </footer> */}
    </div>
  );
}

export default App;
