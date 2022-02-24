import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap";

import Home from "./features/student/pages/Home";
import Edit from "./features/student/components/Edit";
import View from "./features/student/components/View";
import PageNotFound from "./features/PageNotFound";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/edit/:id" element={ <Edit /> } />
          <Route path="/view/:id" element={ <View /> } />
          <Route path="*" element={ <PageNotFound /> } />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;


// #For run sejson server in different port: json-server --watch db.json --port 3333