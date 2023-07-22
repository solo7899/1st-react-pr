import Hero from "./Hero";
import { Link } from "react-router-dom";

const ChangePage = ({
  searchText,
  setSearchResults,
  pageNumber,
  setPageNumber,
  setIsLoading,
}) => {
  setIsLoading(false);
  setPageNumber(pageNumber + 1);
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MzljZWRiZGI1NDcxMDM1MDI3YzYxYjdkZmIzZjJiNCIsInN1YiI6IjY0YjU3ODgwYTZkZGNiMDBlNGY2ZGM2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fjmuUqRH5ZsC2IV9zMIfYAS0dl312ZJweKgYM20v3eo",
    },
  };
  //https://api.themoviedb.org/3/search/movie?query=${searchText}
  const url = `https://api.themoviedb.org/3/search/movie?query=${searchText}&page=${pageNumber}`;
  fetch(url, options)
    .then((response) => response.json())
    .then((data) => {
      setSearchResults(data.results);
      setIsLoading(true);
      console.log(data);
    });
};

const CardView = ({ movie }) => {
  let posterUrl = null;
  if (movie.poster_path) {
    posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  } else {
    posterUrl = `https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Question_mark_%28black%29.svg/800px-Question_mark_%28black%29.svg.png`;
  }
  return (
    <div className="col-md-3 col-lg-4 my-3">
      <div className="card text-center shadow-lg" style={{ width: "18rem" }}>
        <img
          src={posterUrl}
          className="card-img-top"
          alt={movie.original_title}
        ></img>
        <div className="card-body">
          <h5 className="card-title">{movie.original_title}</h5>
          <Link to={`/movies/${movie.id}`} className="btn btn-primary">
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

const SearchView = ({
  keyword,
  searchResults,
  setSearchResults,
  isLoading,
  setIsLoading,
  pageNumber,
  setPageNumber,
  totalPages,
}) => {
  // console.log(isLoading, setIsLoading);

  const movies = searchResults.map((movie, i) => {
    return <CardView movie={movie} key={i} />;
  });

  return (
    <>
      <Hero page={keyword} isLoading={isLoading} />

      {searchResults.length > 0 ? (
        <div className="container">
          <div className="row">{movies}</div>
        </div>
      ) : (
        <div class="mx-auto card text-bg-transparent mb-3 text-center border-0 w-75">
          <div class="card-body">
            <h1 class="card-title">No Movie Found</h1>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => {
          ChangePage(
            keyword,
            setSearchResults,
            pageNumber,
            setPageNumber,
            setIsLoading
          );
        }}
      >
        Next
      </button>
    </>
  );
};

export default SearchView;
