import  "./styles.css";
import { Routes } from "react-router-dom";
import {
  BrowserRouter,
  Route,
} from "react-router-dom";
import Books from "./pages/Books";
import Add from "./pages/Add";
import Updates from "./pages/Updates";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Books/>} />
        <Route path="/add" element={<Add/>} />
        <Route path="/Updates" element={<Updates/>} />
      </Routes>
      
      </BrowserRouter>
     
    </div>
  );
}

export default App;
