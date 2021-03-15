import React from "react";
import "./Tweet.css";

export const Tweet = (props) => {
  const { name, handle, text, profile_image, date } = props;
  return (
    <>
      {name && handle && text && profile_image && date && (
        <article className="tweet">
          <header>
            <div className="user">
              <img src={profile_image} />
              <span>{name}</span>
            </div>
            <p>
              <strong className="account">{handle}</strong>
            </p>
          </header>
          <p>
            <strong>{text}</strong>
          </p>
          <footer className="log">
            <p>{date}</p>
            <div className="icons">
              <i
                className="fab fa-font-awesome-flag fa-xs"
                aria-hidden="true"
              ></i>
              <i className="fas fa-retweet fa-xs" aria-hidden="true"></i>
              <i className="fas fa-heart fa-xs" aria-hidden="true"></i>
            </div>
          </footer>
        </article>
      )}
    </>
  );
};
