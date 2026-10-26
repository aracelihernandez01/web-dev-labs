//Araceli Hernandez Lab 9


const name = "Ada";
let labsCompleted = 6;
let isEnrolled = false;

labsCompleted = labsCompleted + 1;
console.log(`${name} has completed ${labsCompleted} labs.`);

const likeBtn = document.querySelector("#like-btn");
const likeCount = document.querySelector("#like-count");
const likeMessage = document.querySelector("#like-message");

const LikeCounter = {
    likes: 0,

    increment() {
        this.likes = this.likes + 1;
        this.render();
    },

    render() {
        likeCount.textContent = `${this.likes} likes`;

        if (this.likes >= 10) {
            likeMessage.textContent = "Wow, thanks for all the likes!";
        } else if (this.likes >= 5) {
            likeMessage.textContent = "Glad you like it!";
        } else {
            likeMessage.textContent = "";
        }
    }
};

if (likeBtn) {
    likeBtn.addEventListener("click", function() {
        LikeCounter.increment();
    });
} else {
    console.warn("like-btn not found on this page");
}


const themeBtn = document.querySelector("#theme-btn");
themeBtn.addEventListener("click", function() {
  document.body.classList.toggle("dark");
});
const goals = ["HTML", "CSS", "JavaScript"];
const goalsList = document.querySelector("#goals-list");

goals.forEach(function(goal) {
  const item = document.createElement("li");
  item.textContent = goal;
  goalsList.appendChild(item);
});





function getGreetingAfterDelay() {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve("Hello from the future!");
    }, 800);
  });
}



async function showGreeting() {
  const message = await getGreetingAfterDelay();
  console.log(message);
}

showGreeting();


const factBtn = document.querySelector("#fact-btn");
const factDisplay = document.querySelector("#fact-display");

async function loadFact() {
  factDisplay.textContent = "Loading...";
  try {
    const response = await fetch("https://catfact.ninja/fact");
    if (!response.ok) {
      throw new Error("Server responded with an error");
    }
    const data = await response.json();
    factDisplay.textContent = data.fact;
  } catch (error) {
    factDisplay.textContent = "Couldn't load a fact right now. Try again.";
    console.error(error);
  }
}

factBtn.addEventListener("click", loadFact);
