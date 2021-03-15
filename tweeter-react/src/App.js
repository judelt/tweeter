import React, { useState } from 'react';
import './App.css';

import { Navigation } from './components/Navigation'
import { Profile } from './components/Profile'
import { TweetForm } from './components/TweetForm'
import { Tweet } from './components/Tweet'
import { Tweets } from './components/Tweets';

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

  const addNewTweet = text => {
    const newTweet = {
      name: "Judit Mendez",
      handle: "@judelt",
      profile_image: "https://i.imgur.com/nlhLi3I.png",
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
        <Tweets tweetData={tweetData} />
          
        </section>
      </main>
    </div>
  );
}

export default App;
