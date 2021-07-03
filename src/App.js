import './App.css';
import {Route,Switch} from "react-router-dom"
import Navbar from "./containers/navbar/Navbar"
import Home from "./containers/Home/Home"
import Questions from "./containers/Questions/Questions"
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Switch>
       <Route path = "/" exact component = {Home}/>
       <Route path = "/questions" exact component = {Questions}/>
       <Route component = {Questions}/>
     </Switch>
    </div>
  );
}

export default App;
