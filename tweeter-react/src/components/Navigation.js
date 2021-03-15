import React from "react";
import './Navigation.css';

export const Navigation = () => {
  return (
    <nav>
      <span className="logo">tweeter</span>
      <div>
        <p>
          <strong>Write</strong> a new tweet
        </p>
        <p className="arrow">⩔</p>
      </div>
    </nav>
  );
};
