document.getElementById("leia").onclick = function (e) {
  userChoice = "leia";
};
document.getElementById("boba").onclick = function (e) {
  userChoice = "boba";
};
document.getElementById("yoda").onclick = function (e) {
  userChoice = "yoda";
};

let computerChoice = Math.random();
if (computerChoice < 0.34) {
  computerChoice = "leia";
} else if (computerChoice > 0.34 && computerChoice <= 0.67) {
  computerChoice = "boba";
} else {
  computerChoice = "yoda";
}

function compare() {
  if (userChoice === computerChoice) {
    if (confirm("It's a tie! Try again")) {
      window.location.reload();
    }
  } else if (userChoice === "leia" && computerChoice === "boba") {
    if (confirm("You lose! Boba captures Leia")) {
      window.location.reload();
    }
  } else if (userChoice === "leia" && computerChoice === "yoda") {
    if (confirm("You win! Leia is better-looking than Yoda")) {
      window.location.reload();
    }
  } else if (userChoice === "boba" && computerChoice === "leia") {
    if (confirm("You win! Boba captures Leia")) {
      window.location.reload();
    }
  } else if (userChoice === "boba" && computerChoice === "yoda") {
    if (confirm("You lose! The Force is with Yoda, not Boba")) {
      window.location.reload();
    }
  } else if (userChoice === "yoda" && computerChoice === "leia") {
    if (confirm("You lose! Leia is better-looking than Yoda")) {
      window.location.reload();
    }
  } else if (userChoice === "yoda" && computerChoice === "boba") {
    if (confirm("You win! The Force is with Yoda, not Boba")) {
      window.location.reload();
    }
  }
}

leia.addEventListener("click", compare);

boba.addEventListener("click", compare);

yoda.addEventListener("click", compare);
