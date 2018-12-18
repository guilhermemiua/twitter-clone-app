import React, { Component } from "react";
import { connect } from "react-redux";
import api from "../../services/api";
import { loadTweets } from "../../actions/Actions";

class TweetList extends Component {
  componentDidMount() {
    api.get("/tweets/find").then(res => {
      this.props.loadTweets(res.data);
    });
  }

  render() {
    const tweets = this.props.tweets;

    const tweetList = tweets.length ? (
      tweets.map(tweet => {
        return (
          <ul className="tweet-list" key={tweet._id}>
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
    loadTweets: tweets => {
      dispatch(loadTweets(tweets));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TweetList);
