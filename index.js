require('dotenv').config()
console.log(process.env.PORT);

const express = require("express");
const app = express();
const port = 4000;

const githubData = {
    "login": "Sxhil296",
    "id": 108786416,
    "node_id": "U_kgDOBnvy8A",
    "avatar_url": "https://avatars.githubusercontent.com/u/108786416?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Sxhil296",
    "html_url": "https://github.com/Sxhil296",
    "followers_url": "https://api.github.com/users/Sxhil296/followers",
    "following_url": "https://api.github.com/users/Sxhil296/following{/other_user}",
    "gists_url": "https://api.github.com/users/Sxhil296/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Sxhil296/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Sxhil296/subscriptions",
    "organizations_url": "https://api.github.com/users/Sxhil296/orgs",
    "repos_url": "https://api.github.com/users/Sxhil296/repos",
    "events_url": "https://api.github.com/users/Sxhil296/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Sxhil296/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Sahil",
    "company": null,
    "blog": "https://sahil-malik.netlify.app/",
    "location": null,
    "email": null,
    "hireable": true,
    "bio": "Aspiring Full Stack Web Developer",
    "twitter_username": "tf3mir",
    "public_repos": 158,
    "public_gists": 0,
    "followers": 7,
    "following": 10,
    "created_at": "2022-07-06T06:25:51Z",
    "updated_at": "2023-10-22T11:02:19Z"
  }

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("Heyy twitter!");
});

app.get("/login", (req, res) => {
    res.send("<h1>You are logged in!</h1>");
})

app.get('/chai', (req, res) => {
    res.send('<h2>Chai is the best!</h2>');
} )

app.get("/github", (req, res) => {
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
