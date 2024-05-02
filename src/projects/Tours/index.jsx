import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import "./tours.css";
import ToursCard from "./components/ToursCard";

const url = "https://www.course-api.com/react-tours-project";

const Tours = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => setTours(tours.filter((tour) => tour.id !== id));

  const fetchTours = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setTours(tours);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchTours();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <section>
          {tours.length > 0 ? (
            <>
              <div className="title">
                <h2>Our Tours</h2>
                <div className="title-underline"></div>
              </div>
              <div className="tours">
                {tours.map((tour, index) => (
                  <ToursCard key={index} {...tour} removeTour={removeTour} />
                ))}
              </div>
            </>
          ) : (
            <button type="button" className="btn" onClick={fetchTours}>
              Refetch
            </button>
          )}
        </section>
      )}
    </>
  );
};

export default Tours;
