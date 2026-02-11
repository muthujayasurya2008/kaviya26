const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const alertBox = document.getElementById("alertBox");
const bigMessage = document.getElementById("bigMessage");
const card = document.getElementById("card");

let noCount = 0;
let alertTimeout;

function popAlert(text) {
  alertBox.style.display = "block";
  alertBox.innerHTML = text;

  alertBox.style.animation = "none";
  alertBox.offsetHeight;
  alertBox.style.animation = "popMsg 0.55s ease";
}

function showTempAlert(text) {
  clearTimeout(alertTimeout);
  popAlert(text);

  // disappear time (CHANGE THIS NUMBER)
  alertTimeout = setTimeout(() => {
    alertBox.style.display = "none";
    alertBox.innerHTML = "";
  }, 3000);
}

function showBigMessage(text) {
  bigMessage.style.display = "block";
  bigMessage.innerHTML = text;

  bigMessage.style.animation = "none";
  bigMessage.offsetHeight;
  bigMessage.style.animation = "popMsg 0.6s ease";
}

// Floating hearts effect
function createHearts() {
  const hearts = ["❤️","💖","💗","💕","💘"];
  const interval = setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerText = hearts[Math.floor(Math.random() * hearts.length)];
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-10px";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 3200);
  }, 220);

  setTimeout(() => clearInterval(interval), 3500);
}

// Confetti burst
function confettiBurst() {
  for (let i = 0; i < 30; i++) {
    const c = document.createElement("div");
    c.className = "confetti";
    c.style.left = Math.random() * 100 + "vw";
    c.style.top = "-10px";

    const colors = ["#ff1744", "#ffffff", "#ffb3c1", "#ffe5ec", "#ff4d6d"];
    c.style.background = colors[Math.floor(Math.random() * colors.length)];

    document.body.appendChild(c);
    setTimeout(() => c.remove(), 1600);
  }
}

// NO button logic
noBtn.addEventListener("click", function () {
  noCount++;

  // 1st and 2nd click -> move away + temp alert
  if (noCount <= 2) {
    const x = Math.random() * 260 - 130;
    const y = Math.random() * 200 - 100;
    noBtn.style.transform = "translate(" + x + "px, " + y + "px)";

    if (noCount === 1) {
      showTempAlert("Do I get a chance to be yours, or is it a no?");
    }

    if (noCount === 2) {
      showTempAlert("Its ok,i respect ur decision choose ur final decision");
    }
  }

  // 3rd click -> disappear + big message (DOWN)
  if (noCount === 3) {
    noBtn.style.display = "none";
    alertBox.style.display = "none"; // hide top alert if showing

    showBigMessage("I searched for u i dreamed of you before i ever found you and i loved you without having you, without holding you my happiness was missing your name that why i waited so i would never let u go.not now not ever. I think about you every day loving you wasn't a choice it happened the moment i saw you and it hasn't stopped not even after everything. No matter what happens don't become stranger to Me ❤‍🩹");
  }
});

// YES button logic
yesBtn.addEventListener("click", function () {
  alertBox.style.display = "none"; // hide top alert if showing

  showBigMessage("I want to grow old with you from holding your hand to calling you mine. I want to text you good morning until the mornings are next to you. Until your face is the first thing I see, and I don't need my phone to tell you what happened today anymore. I want to carry your phone when you don't have pockets and Your lip gloss , the small things that matters because they are yours And God knows I want you because you make me weak. When you walk into the room in that deadly, gorgeous eyes.I need you like I need air. Like my body knows you are home before my mind catches up.And that's what I love you really means 💗");

  // glow effect
  card.style.boxShadow =
    "0 0 35px rgba(255,255,255,0.55), 0 0 90px rgba(255,20,147,0.35)";

  // background pulse
  document.body.classList.add("yes-mode");

  // card bounce
  card.classList.remove("yes-bounce");
  card.offsetHeight;
  card.classList.add("yes-bounce");

  // hearts + confetti
  createHearts();
  confettiBurst();

  // disable buttons after YES
  yesBtn.disabled = true;

  yesBtn.style.opacity = "0.7";
  noBtn.style.opacity = "0.7";
  yesBtn.style.cursor = "not-allowed";
  noBtn.style.cursor = "not-allowed";
});
