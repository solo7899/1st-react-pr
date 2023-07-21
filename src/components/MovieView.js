import { useParams } from "react-router-dom";
import Hero from "./Hero";
import { useEffect, useState } from "react";

const MovieView = () => {
  const { id } = useParams();

  const [movieDetails, setMovieDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MzljZWRiZGI1NDcxMDM1MDI3YzYxYjdkZmIzZjJiNCIsInN1YiI6IjY0YjU3ODgwYTZkZGNiMDBlNGY2ZGM2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fjmuUqRH5ZsC2IV9zMIfYAS0dl312ZJweKgYM20v3eo",
      },
    };
    fetch(`https://api.themoviedb.org/3/movie/${id}`, options)
      .then((response) => response.json())
      .then((data) => {
        setMovieDetails(data);
        setIsLoading(false);
      });
  }, [id]);
  // console.log(movieDetails);

  const LoadingPage = () => {
    if (isLoading) {
      return <Hero page="Loading..." />;
    }
    if (movieDetails) {
      // console.log(movieDetails)
      return (
        <>
          <Hero
            page={movieDetails.original_title}
            backdrop={`https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`}
            style={{ height: "300px" }}
          />
          <div className="w-100 my-3">
            <div
              className="card mb-3 te mx-auto shadow-lg rounded-4"
              style={{ maxWidth: "1040px" }}
            >
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    className="img-fluid"
                    src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
                    alt={movieDetails.original_title}
                  ></img>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h1 className="lead fw-bold">
                      {movieDetails.original_title}
                    </h1>
                    <hr></hr>
                    <p>{movieDetails.overview}</p>
                    {/* <p className="card-text">
                      <small className="text-body-secondary">
                        Last updated 3 mins ago
                      </small>
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }
  };

  return LoadingPage();
};

export default MovieView;
