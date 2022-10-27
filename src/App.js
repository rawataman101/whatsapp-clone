import "./App.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import Login from "./Login";
import { useDataLayerValue } from "./DataLayer";

function App() {
  // const [user, setUser] = useState(null);
  const [user] = useDataLayerValue();

  return (
    <div className="app">
      {!user ? (
        <h1>
          <Login />
        </h1>
      ) : (
        <div className="app__body">
          <Router>
            <Sidebar />
            <Switch>
              <Route path="/" element={<h1>Home</h1>}></Route>
              <Route path="/rooms/:roomId" element={<Chat />}></Route>
            </Switch>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
