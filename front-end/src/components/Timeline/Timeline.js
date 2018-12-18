import React, { Component } from "react";
import TweetList from "../Tweet/TweetList";

class Timeline extends Component {
  render() {
    return <TweetList />;
  }
}

export default Timeline;

/*
const mapStateToProps = state => {
  return {
    tweets: state.tweets
  };
};

export default connect(mapStateToProps)(Timeline);
*/
