import { text } from 'body-parser';
import React from 'react'
import { Tweet } from '../components/Tweet'


export default { title: "Singular Tweet" }

export const emptyTweet = () => <Tweet />

export const populatedTweet = () => {

  const singleTweet = {
    name: "Judit Mendez",
    handle: "@judelt",
    profile_image: "https://i.imgur.com/nlhLi3I.png",
    text: "Hello everyone!",
    date: "5 days ago"
  }

  // return <Tweet name={singleTweet.name} handle={singleTweet.handle} profile_image={singleTweet.profile_image}
  //   text={text} date={singleTweet.date} />;

  return <Tweet {...singleTweet} />
}