import React, { Component } from "react";
import { connect } from "react-redux";
//import { loadTweet } from "../../actions/Actions";

class TweetList extends Component {
  componentDidMount() {
    this.props.loadTweet();
  }

  render() {
    const tweets = this.props.tweets;

    const tweetList = tweets.length ? (
      tweets.map(tweet => {
        return (
          <ul className="tweet-list" key={tweet.id}>
            <li className="tweet">
              <p> {tweet.content} </p>
            </li>
          </ul>
        );
      })
    ) : (
      <p> No tweets</p>
    );

    return <div> {tweetList} </div>;
  }
}

const mapStateToProps = state => {
  return {
    tweets: state.tweets
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadTweet: () => {
      dispatch({ type: "LOAD_TWEET" });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TweetList);
