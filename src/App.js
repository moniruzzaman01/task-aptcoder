import { Routes, Route } from "react-router-dom";
import "./App.css";
import Charts from "./Components/Charts";
import Dashboard from "./Components/Dashboard";
import EmpList from "./Components/EmpList";
import Login from "./Components/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Charts />}></Route>
          <Route path="charts" element={<Charts />}></Route>
          <Route path="list" element={<EmpList />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
