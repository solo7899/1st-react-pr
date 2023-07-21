import { Link, useNavigate } from "react-router-dom";

const NavBar = ({ searchText, setSearchText }) => {
  const navigate = useNavigate();

  const changeSearchText = (e) => {
    const value = document.getElementById("search").value;
    if (value.trim()) {
      navigate(`/search`);
      // console.log(searchText);
      // setSearchText(e.target.value)
      setSearchText(value);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Movies
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="gonowhere"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="gonowhere">
                    Action
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="gonowhere">
                    Another action
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider"></hr>
                </li>
                <li>
                  <Link className="dropdown-item" to="gonowhere">
                    Something else here
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link disabled" to="gonowhere">
                Disabled
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              id="search"
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              // value={searchText}
              // onChange={changeSearchText}
            ></input>
            <button
              className="btn btn-outline-success"
              type="button"
              onClick={changeSearchText}
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
