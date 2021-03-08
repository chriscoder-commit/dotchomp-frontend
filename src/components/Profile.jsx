import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function Profile(props) {
  const [profile, setProfile] = useState("null");
  // const [moderator, setModerator] = useState("");
  const id = props.match.params.id;
  // const user = JSON.parse(localStorage.getItem("user"));
  // const id = user.id;

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/auth/profile/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then(( profile) => {
        setProfile(profile);
      });
  }, [id]);

  return (
    profile && (
      <>
        <h1>Your Profile:</h1>
            <p> Username: {profile.username}</p>
            <p> Email: {profile.email}</p>
            <p> About Me: {profile.about_me}</p>
      </>
    )
    );
}