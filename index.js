"use strict";

// Async await :

function githubData() {
  fetch("https://api.github.com/users/jatinn21")
    .then((response) => response.json())
    .then((data) => console.log("Sync", data));
}
githubData();

async function asyncGithubData() {
  const response = await fetch("https://api.github.com/users/jatinn21");
  const data = await response.json();
  console.log("Async", data);
}

asyncGithubData();
