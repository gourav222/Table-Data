import "./App.css";
import Header from "./components/Header";
import SalesTable from "./components/SalesTable";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GetAllBransSales from "./components/GetAllBransSales";
function App() {
  return (
    
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<GetAllBransSales/>}></Route>
        <Route path="/add" element={<SalesTable/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
