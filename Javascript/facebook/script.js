var database = [
  { username: "andrei", password: "supersecret" },
  { username: "sally", password: "123" },
  { username: "ingrid", password: "777" },
];

var newsFeed = [
  { username: "Bobby", timeline: "So tired from all that learning!" },
  { username: "Sally", timeline: "Javascript is sooo cool!" },
];

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

function isUserValid(username, password) {
  console.log(username);
  for (var i = 0; i < database.length; i++) {
    if (
      username === database[i].username &&
      password === database[i].password
    ) {
      return true;
    }
  }
  return false;
}

function sigIn(username, password) {
  console.log(isUserValid(username, password));
  if (isUserValid(username, password)) {
    console.log(newsFeed);
    return;
  } else {
    alert("Sorry, wrong username and password!");
  }
}

sigIn(userNamePrompt, passwordPrompt);
