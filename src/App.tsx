import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./Component/Home/HomePage";
import {color1} from "./Component/colors";
import BookComponent from "./Component/Book/BookComponent";
import "../src/reset.css"
import FiliiComponent from "./Component/Filii/FiliiComponent";
import EmployeePage from "./Component/Employee/EmployeePage";

function App() {
  return (
    <div className="App" style={{
        background: color1
    }}>
        <BrowserRouter>
          <Routes>
            <Route path={"/"} element={<HomePage/>}/>
            <Route path={"/listBook"} element={<BookComponent/>}/>
            <Route path={"/listBranch"} element={<FiliiComponent/>}/>
            <Route path={"/listEmployee"} element={<EmployeePage/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
