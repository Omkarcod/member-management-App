import "./App.css";
import Alluser from "./components/Alluser";
import Formuser from "./components/Formuser";
import Edituser from "./components/Edituser";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<Formuser />} />
          <Route path="/all" element={<Alluser/>}/>
          <Route path="/edit/:id" element={<Edituser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
