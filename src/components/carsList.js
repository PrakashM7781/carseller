import React, { useEffect, useState } from "react";
import "./style/style.css";
import CarsFooter from "./carsFooter";
import { useNavigate, useParams } from "react-router-dom";
import carsData from "./carsapi.js";

const CarsList = () => {
  const [carData, setCarData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const navigate = useNavigate();

  const { pageNumber } = useParams();

  // Set currentPage state based on URL params when the component mounts
  useEffect(() => {
    if (pageNumber && !isNaN(pageNumber)) {
      setCurrentPage(parseInt(pageNumber));
    }
  }, [pageNumber]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await Promise.resolve(carsData);
        setCarData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // const totalPages = Math.ceil(carData.length / itemsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    navigate(`/${newPage}`); // Change URL to match the new page number
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = carData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      <section className="cards">
        {currentItems.map((car, index) => (
          <div className="firstrow" key={index}>
            {/* Image starts here */}
            <div className="firstCard">
              <div className="photo">
                <img src={car.image} alt="" />
              </div>
              {/* Image ends here */}

              {/* Car Name And year */}
              <div className="details">
                <div className="text">
                  <div className="carname">
                    <h2>{car.name}</h2>
                  </div>
                  <div className="year">
                    <span>{car.year}</span>
                  </div>
                </div>
                {/* Car Name and year ends */}

                {/* Feature starts here */}
                <div className="list">
                  <div className="list1 listCard">
                    <div className="features">
                      <i
                        className="fa-solid fa-user icon"
                        style={{ color: "#709beb" }}
                      ></i>
                      {car.noOfPeople} People
                    </div>
                    <div className="features">
                      <i
                        className="fa-solid fa-gas-pump icon"
                        style={{ color: "#709beb" }}
                      ></i>
                      {car.fuel}
                    </div>
                  </div>

                  <div className="list1 listCard">
                    <div className="features">
                      <i
                        className="fa-solid fa-gauge icon"
                        style={{ color: "#709beb" }}
                      ></i>
                      {car.mileage}/1-Litre
                    </div>
                    <div className="features">
                      <i
                        className="fa-solid fa-gear icon"
                        style={{ color: "#709beb" }}
                      ></i>
                      {car.type}
                    </div>
                  </div>
                </div>
                {/* Feature ends here */}
                <hr width="85%" />
              </div>

              {/* Price and rent button */}
              <div className="book">
                <div>
                  <span className="price">${car.price}</span>/month
                </div>
                <div style={{ paddingTop: "4px" }}>
                  <span className="wishlist">
                    {" "}
                    <i
                      className="fa-regular fa-heart"
                      style={{ color: "#4681ed" }}
                    ></i>
                  </span>
                  <button>Rent now</button>
                </div>
              </div>
              {/* Price and rent button ends here */}
            </div>
          </div>
        ))}
      </section>
      <CarsFooter
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        totalItems={carData.length}
        setCurrentPage={setCurrentPage}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default CarsList;
