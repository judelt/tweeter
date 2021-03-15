import { text } from "body-parser";
import React from "react";
import { Tweets } from "../components/Tweets";

export default { title: "Tweet Container" };

export const emptyTweets = () => <Tweets />;

export const populatedTweet = () => {
  const tweets = [
    {
      name: "Judit Mendez",
      handle: "@judelt",
      profile_image: "https://i.imgur.com/nlhLi3I.png",
      text: "Hello everyone!",
      date: "5 days ago",
    },
    {
      name: "Descartes",
      handle: "@rd",
      profile_image: "https://i.imgur.com/73hZDYK.png",
      text: "Je pense , donc je suis",
      date: "1 days ago",
    },
    {
      name: "Newton",
      handle: "@SirIsaac",
      profile_image: "https://i.imgur.com/73hZDYK.png",
      text:
        "If I have seen further it is by standing on the shoulders of giants",
      date: "2 days ago",
    },
  ];

  return <Tweets tweetData={tweets} />;
};
