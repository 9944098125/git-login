import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getRepos } from "../../Redux/Actions/repos";

export default function RepoDetails() {
  const dispatch = useDispatch();
  const params = useParams();
  //   console.log(params);
  React.useEffect(() => {
    dispatch(getRepos());
  }, [dispatch]);

  const [repo, setRepo] = React.useState([]);

  const repositories = useSelector((state) => state.getRepos);
  // console.log(repositories);
  const darkMode = useSelector((state) => state.toggleTheme.darkMode);

  React.useEffect(() => {
    const filteredRepo =
      repositories &&
      repositories.items.filter(
        (repo) => Number(repo.id) === Number(params.id)
      );
    setRepo(filteredRepo[0]);
  }, [params.id, repo]);

  return (
    <React.Fragment>
      {repo && (
        <>
          <div
            style={{
              background: darkMode ? "black" : "white",
              color: darkMode ? "white" : "black",
            }}
            className="h-100"
          >
            <h2>Repository Name: {repo?.name}</h2>
            <h3>Repo URL: {repo?.url}</h3>
            <h2>Repository owner: {repo?.owner?.login}</h2>
            <h1>Repository Score: {repo?.score}</h1>
            <h3>SSH URL: {repo?.ssh_url}</h3>
            <h3>Licensed By: {repo?.license?.name}</h3>
          </div>
        </>
      )}
    </React.Fragment>
  );
}
