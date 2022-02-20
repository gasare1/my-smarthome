import NavigationBar from "./components/Navbar/NavigationBar";
import "./App.css"
import {
  BrowserRouter as Router,
} from "react-router-dom";
import Overview from "./components/Overview/Overview";
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
