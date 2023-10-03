import React, { useState } from "react";
import CarsList from "./components/carsList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  return (
    <Router>
      <div className="App">
        <h1>Car List</h1>
        <Routes>
          <Route
            path="/"
            element={
              <CarsList currentPage={currentPage} itemsPerPage={itemsPerPage} />
            }
          />
          {/* Add more routes here if needed */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
