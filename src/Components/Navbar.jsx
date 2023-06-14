import React from "react";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { toggleThem } from "../Redux/Actions/theme";
import { useDispatch, useSelector } from "react-redux";

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutUser = () => {
    navigate("/login", { replace: true });
  };
  const [toggleTheme, setToggleTheme] = React.useState(false);

  const changeTheTheme = () => {
    dispatch(toggleThem(toggleTheme));
    setToggleTheme(!toggleTheme);
  };

  const darkMode = useSelector((state) => state.toggleTheme.darkMode);

  return (
    <React.Fragment>
      <div
        style={{
          backgroundColor: darkMode ? "black" : "white",
          borderBottom: darkMode ? "2px solid white" : "2px solid black",
        }}
        className="d-flex align-items-center justify-content-between px-3 py-2"
      >
        <h3
          className="app-name"
          style={{ color: darkMode ? "white" : "black" }}
        >
          Git Repositories
        </h3>
        <div className="d-flex align-items-center gap-4">
          {darkMode ? (
            <BsFillSunFill
              fontSize="25px"
              onClick={changeTheTheme}
              style={{ cursor: "pointer", color: "white" }}
            />
          ) : (
            <BsFillMoonFill
              fontSize="25px"
              onClick={changeTheTheme}
              style={{ cursor: "pointer" }}
            />
          )}

          <button onClick={logoutUser} className="btn btn-danger">
            Logout
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Navbar;
