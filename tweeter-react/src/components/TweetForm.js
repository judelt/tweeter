import React, { useState } from "react";
import './TweetForm.css';

export const TweetForm = (props) => {
  const { addNewTweet } = props;
  const [tweetText, setTweetText] = useState("");
  const tweetRemainingLength = 140 - tweetText.length;
  const outputStyle = { color: tweetRemainingLength >= 0 ? "black" : "red" };

  const submitTweet = event => {
    event.preventDefault()
    if (tweetRemainingLength >= 0 && tweetRemainingLength < 140) {
      addNewTweet(tweetText)
      setTweetText("")
    }
  }
  return (
    <section className="new-tweet">
        <span id="error"></span>
        <form onSubmit={submitTweet} action="/tweets" method="POST">
        <textarea
          value={tweetText}
          onChange={event =>setTweetText(event.target.value)}
            name="text"
            id="tweet-text"
            placeholder="What are you humming about?"
          ></textarea>
          <div className="submit-tweet">
            <button type="submit">Tweet</button>
          <output style={outputStyle} name="counter" className="counter" for="tweet-text">{140 - tweetText.length}</output>
          </div>
        </form>
      </section>
  )
}