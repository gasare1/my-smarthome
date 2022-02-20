import NavigationBar from "./Components/Navbar/NavigationBar";
import "./App.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Overview from "./Components/Overview/Overview";
function App() {
  const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 2,
            marginTop:'59px'
        }}
    />
);
  return (
    <Router>
      <NavigationBar />
      <ColoredLine color="#17223B"/>
      <Overview/>
    </Router>
  );
}

export default App;
