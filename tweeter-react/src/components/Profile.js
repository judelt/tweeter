import React from "react";
import './Profile.css';

export const Profile = () => {
  return (
    <header>
      <div className="avatar-name">
        <img className="avatar" src="/profile-hex.png" />
      </div>
      <br />
      <div className="avatar-name">
        <h2 className="no-border"><strong>Judit </strong> Mendez</h2>
      </div>
    </header>
  )
}
