const initState = {
  tweets: []
};

const Reducer = (state = initState, action) => {
  if (action.type === "LOAD_TWEET") {
    return {
      ...state,
      tweets: action.tweets
    };
  }

  return state;
};

export default Reducer;
