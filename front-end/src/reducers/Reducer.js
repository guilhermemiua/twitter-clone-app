import api from "../services/api";

const initState = {
  tweets: []
};

const Reducer = (state = initState, action) => {
  if (action.type === "LOAD_TWEET") {
    const newTweets = api.get("/tweets/find").then(res => res.data);

    return {
      ...state,
      tweets: [...state.tweets, newTweets]
    };
  }

  return state;
};

export default Reducer;
