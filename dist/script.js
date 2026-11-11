"use strict";
// Araceli Hernandez Lab 11
const Studentname = "Ada";
let labsCompleted = 6;
let isEnrolled = false;
labsCompleted = labsCompleted + 1;
console.log(`${Studentname} has completed ${labsCompleted} labs.`);
// Save dark mode preference
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
}
const likeBtn = document.querySelector("#like-btn");
const likeCount = document.querySelector("#like-count");
const likeMessage = document.querySelector("#like-message");
// Part 2: Adding Type Annotations
const LikeCounter = {
    likes: Number(localStorage.getItem("likes")) || 0,
    increment() {
        this.likes = this.likes + 1;
        localStorage.setItem("likes", this.likes.toString());
        this.render();
    },
    render() {
        if (likeCount) {
            likeCount.textContent = `${this.likes} likes`;
        }
        if (likeMessage) {
            if (this.likes >= 10) {
                likeMessage.textContent = "Wow, thanks for all the likes!";
            }
            else if (this.likes >= 5) {
                likeMessage.textContent = "Glad you like it!";
            }
            else {
                likeMessage.textContent = "";
            }
        }
    }
};
LikeCounter.render();
if (likeBtn) {
    likeBtn.addEventListener("click", function () {
        LikeCounter.increment();
    });
}
else {
    console.warn("like-btn not found on this page");
}
// Dark mode button
const themeBtn = document.querySelector("#theme-btn");
if (themeBtn) {
    themeBtn.addEventListener("click", function () {
        document.body.classList.toggle("dark");
        const isDark = document.body.classList.contains("dark");
        localStorage.setItem("theme", isDark ? "dark" : "light");
    });
}
// Part 2: Typed Array and Function Parameter
const goals = ["HTML", "CSS", "JavaScript"];
const goalsList = document.querySelector("#goals-list");
goals.forEach(function (goal) {
    const item = document.createElement("li");
    item.textContent = goal;
    if (goalsList) {
        goalsList.appendChild(item);
    }
});
// Promise and async function
function getGreetingAfterDelay() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve("Hello from the future!");
        }, 800);
    });
}
async function showGreeting() {
    const message = await getGreetingAfterDelay();
    console.log(message);
}
showGreeting();
// Cat fact feature
const factBtn = document.querySelector("#fact-btn");
const factDisplay = document.querySelector("#fact-display");
async function loadFact() {
    if (!factDisplay) {
        return;
    }
    factDisplay.textContent = "Loading...";
    try {
        const response = await fetch("https://catfact.ninja/fact");
        if (!response.ok) {
            throw new Error("Server responded with an error");
        }
        const data = (await response.json());
        factDisplay.textContent = data.fact;
    }
    catch (error) {
        factDisplay.textContent = "Couldn't load a fact right now. Try again.";
        console.error(error);
    }
}
if (factBtn) {
    factBtn.addEventListener("click", loadFact);
}
// Location feature
const locationBtn = document.querySelector("#location-btn");
const locationDisplay = document.querySelector("#location-display");
if (locationBtn) {
    locationBtn.addEventListener("click", function () {
        if (!locationDisplay) {
            return;
        }
        if (!("geolocation" in navigator)) {
            locationDisplay.textContent =
                "Geolocation isn't supported.";
            return;
        }
        navigator.geolocation.getCurrentPosition(function (position) {
            const lat = position.coords.latitude.toFixed(2);
            const lon = position.coords.longitude.toFixed(2);
            locationDisplay.textContent =
                `You're near ${lat}, ${lon}`;
        }, function (error) {
            locationDisplay.textContent =
                "Location access was denied.";
            console.warn(error);
        });
    });
}
