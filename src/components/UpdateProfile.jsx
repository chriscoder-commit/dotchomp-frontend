import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import {} from "../styles/AuthForm";

export function UpdateProfile(props) {
const [username, setUsername] = useState("");
const [about_me, setAboutMe] = useState("");
const history = useHistory();
// const { id } = useParams();
// const id = props.match.params.id;

const user = JSON.parse(localStorage.getItem("user"));
const id = user.id;

useEffect(() => {
fetch(`${process.env.REACT_APP_BACKEND_URL}/auth/profile/${id}`, {
    headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
})
    .then((res) => res.json())
    .then((user) => {
    setUsername(user.username);
    setAboutMe(user.about_me);
    });
}, [id]);

async function onFormSubmit(e) {
try {
    e.preventDefault();
    await fetch(`${process.env.REACT_APP_BACKEND_URL}/auth/update-profile/${id}`, {
    method: "PUT",
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify({
        session: {
        username: username,
        about_me: about_me,
        },
    }),
    });
    // redirect_to
    history.push("/profile");
} catch (err) {}
}

return (
<>
    <form onSubmit={onFormSubmit}>
    <label htmlFor="date">Username</label>
    <input
        type="text"
        name="username"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
    />
    <label htmlFor="about_me">About Me</label>
    <textarea
        name="about_me"
        id="about_me"
        value={about_me}
        onChange={(e) => setAboutMe(e.target.value)}
    />
    <button id="submit" type="submit" value="Submit" />
    </form>
</>
);
}
