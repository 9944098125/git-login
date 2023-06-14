import axios from "axios";

export const getRepos = () => async (dispatch) => {
  try {
    const res = await axios.get(
      "https://api.github.com/search/repositories?q=stars:%3E1&sort=stars&order=desc"
    );
    if (res) {
      // console.log(res);
      dispatch({
        type: "GET_REPOS_SUCCESS",
        payload: res.data && res.data.items,
      });
    }
  } catch (err) {
    console.log(err);
    dispatch({
      type: "GET_REPOS_FAIL",
      payload: err.response.data.message,
    });
  }
};
