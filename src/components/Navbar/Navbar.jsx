import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to={"/"}>
            Form-Builder
          </Link>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link
                className="nav-link active"
                aria-current="page"
                to={"/createforms"}
              >
                Create Form
              </Link>
              <Link className="nav-link" to={"/:id/edit"}>
                Edit Form
              </Link>
              <Link className="nav-link" to={"/delete"}>
                Delete Form
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
