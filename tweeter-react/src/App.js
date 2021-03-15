import React, { useState } from 'react';
import './App.css';

import { Navigation } from './components/Navigation'
import { Profile } from './components/Profile'
import { TweetForm } from './components/TweetForm'
import { Tweet } from './components/Tweet'
import { text } from 'body-parser';

const initialTweetData = [
  {
    name: "Descartes",
    handle: "@rd",
    profile_image: "https://i.imgur.com/73hZDYK.png",
    text: "Je pense , donc je suis",
    date: "1 days ago"
  },
  {
    name: "Newton",
    handle: "@SirIsaac",
    profile_image: "https://i.imgur.com/73hZDYK.png",
    text: "If I have seen further it is by standing on the shoulders of giants",
    date: "2 days ago"
  }
]


function App() {
  const [tweetData, setTweetData] = useState(initialTweetData)

  const tweets = tweetData.map((tweetData, index) => {
    return <Tweet key={index} name={tweetData.name} handle={tweetData.handle} profile_image={tweetData.profile_image} text={tweetData.text} date={tweetData.date} />

  })

  const addNewTweet = (text) => {
    const newTweet = {
      name: "Judit Mendez",
      handle: "@judelt",
      profile_image: "http://i.imgur.com/2WZt0D6.png",
      text,
      date: "5 days ago"
    }
    setTweetData([newTweet, ...tweetData])
  }

  return (
    <div className="App">
      <Navigation />
      <Profile />
      <main className="container">
        <TweetForm addNewTweet={addNewTweet} />
        <section id="tweets-container">
          {tweets}
        </section>
      </main>
    </div>
  );
}

export default App;
