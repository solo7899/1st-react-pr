import { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import AboutView from "./components/About";
import SearchView from "./components/SearchView";
import MovieView from "./components/MovieView";
import PageNotFound from "./components/PageNotFound";
import { Routes, Route } from "react-router-dom";

// api_key = 939cedbdb5471035027c61b7dfb3f2b4

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState();

  console.log(pageNumber);

  useEffect(() => {
    setIsLoading(false);
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
        // setPageNumber(data.page);
        setTotalPages(data.total_pages);
        setSearchResults(data.results);
        setIsLoading(true);
      })
      .catch((err) => console.error(err));
  }, [searchText]);

  return (
    <div className="bg-light-subtle">
      <NavBar searchText={searchText} setSearchText={setSearchText} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutView />} />
        <Route
          path="/search"
          element={
            <SearchView
              keyword={searchText}
              searchResults={searchResults}
              setSearchResults={setSearchResults}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              pageNumber={pageNumber}
              setPageNumber={setPageNumber}
              totalPages={totalPages}
            />
          }
        />
        <Route path="/movies/:id" element={<MovieView />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
