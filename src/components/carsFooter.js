import React from "react";
import "./style/style.css";

const CarsFooter = ({ currentPage, setCurrentPage }) => {
  const totalPages = 12; // Hardcoded total number of pages (10 + 2)

  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  return (
    <section className="navigationlower">
      <div className="container pagination">
        {currentPage > 1 && (
          <div className="btn" onClick={() => setCurrentPage(currentPage - 1)}>
            Previous
          </div>
        )}

        {pageNumbers.map((number) => (
          <div
            key={number}
            className={`btn ${number === currentPage ? "active" : ""}`}
            onClick={() => setCurrentPage(number)}
          >
            {number}
          </div>
        ))}

        {currentPage < totalPages && (
          <div className="btn" onClick={() => setCurrentPage(currentPage + 1)}>
            Next
          </div>
        )}
      </div>
    </section>
  );
};

export default CarsFooter;
