const initialState = {
  items: [],
  failMessage: "",
};

export default function getRepos(state = initialState, action) {
  switch (action.type) {
    case "GET_REPOS_SUCCESS":
      return {
        ...state,
        items: action.payload,
      };
    case "GET_REPOS_FAIL":
      return {
        ...state,
        failMessage: action.payload,
      };
    default:
      return state;
  }
}
