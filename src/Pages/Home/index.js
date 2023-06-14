import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { getRepos } from "../../Redux/Actions/repos";

export default function Home() {
  const dispatch = useDispatch();

  const darkMode = useSelector((state) => state.toggleTheme.darkMode);

  React.useEffect(() => {
    dispatch(getRepos());
  }, [dispatch]);

  const repositories = useSelector((state) => state.getRepos);
  // console.log(repositories);

  return (
    <React.Fragment>
      <div
        style={{
          backgroundColor: darkMode ? "black" : "white",
          color: darkMode ? "white" : "black",
        }}
        className="repos-container"
      >
        {repositories &&
          repositories?.items.map((repo, idx) => (
            <div
              key={idx}
              style={{
                border: darkMode ? "2px solid white" : "2px solid black",
              }}
              className="each-repo"
            >
              <div className="d-flex align-items-center gap-5">
                <Link
                  to={`/${repo.id}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <h3 className="repo-name">{repo.name}</h3>
                </Link>
                <p className="ssh-url">SSH URL: {repo.ssh_url}</p>
              </div>
              <div className="d-flex align-items-center gap-5">
                <h6 className="repo-url">URL: {repo.url}</h6>
                <p className="pushed-at">Pushed At: {repo.pushed_at}</p>
              </div>
            </div>
          ))}
      </div>
    </React.Fragment>
  );
}
