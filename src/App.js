import React, { useState } from "react";
import CarsList from "./components/carsList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CarsHeader from "./components/carsHeader.js";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  return (
    <Router>
      <div className="App">
        <CarsHeader setSearchQuery={setSearchQuery} searchQuery={searchQuery} />
        <h1>Car List</h1>
        <Routes>
          <Route
            path="/"
            element={
              <CarsList
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                itemsPerPage={itemsPerPage}
                searchQuery={searchQuery}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
