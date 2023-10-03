import React from "react";
import "./style/style.css";

const CarsHeader = () => {
  return (
    <>
      <section class="navigatioupper">
        <div class="container">
          <nav class="upper">
            <input type="text" placeholder="Search... " class="search-input" />
            <i class="fas fa-search search-icon"></i>
          </nav>
        </div>
      </section>
    </>
  );
};

export default CarsHeader;
