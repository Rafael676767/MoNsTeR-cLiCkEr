let cookies = 0;
 
let cursors = 0;
 
let grandmas = 0;
 
let cookiesPerSecond = 0;
 
 
const cookieButton = document.getElementById("cookie");
 
const cookieCount = document.getElementById("cookieCount");
 
const cookiesPerSecondText =
 
    document.getElementById("cookiesPerSecond");
 
const cursorButton =
 
    document.getElementById("cursorButton");
 
const cursorInfo =
 
    document.getElementById("cursorInfo");
 
const grandmaButton =
 
    document.getElementById("grandmaButton");
 
const grandmaInfo =
 
    document.getElementById("grandmaInfo");
 
const saveButton =
 
    document.getElementById("saveButton");
 
const resetButton =
 
    document.getElementById("resetButton");
 
 
function updateScreen() {
 
    cookieCount.textContent =
 
        Math.floor(cookies) + " cookies";
 
    cookiesPerSecondText.textContent =
 
        cookiesPerSecond + " cookies per second";
 
    cursorInfo.textContent =
 
        "Cursors: " + cursors;
 
    grandmaInfo.textContent =
 
        "Grandmas: " + grandmas;
 
 
    // Check if player can afford upgrades
 
    cursorButton.disabled = cookies < 15;
 
    grandmaButton.disabled = cookies < 100;
 
}
 
cookieButton.addEventListener("click", function () {
 
    cookies++;
 
    updateScreen();
 
});
 
 
cursorButton.addEventListener("click", function () {
 
    if (cookies >= 15) {
 
        cookies -= 15;
 
        cursors++;
 
        cookiesPerSecond++;
 
        updateScreen();
 
    }
 
});
 
 
grandmaButton.addEventListener("click", function () {
 
    if (cookies >= 100) {
 
        cookies -= 100;
 
        grandmas++;
 
        cookiesPerSecond += 5;
 
        updateScreen();
 
    }
 
});
 
 
setInterval(function () {
 
    cookies += cookiesPerSecond;
 
    updateScreen();
 
}, 1000);
 
saveButton.addEventListener("click", function () {
 
    const gameData = {
 
        cookies: cookies,
 
        cursors: cursors,
 
        grandmas: grandmas
 
    };
 
 
    localStorage.setItem(
 
        "cookieClickerSave",
 
        JSON.stringify(gameData)
 
    );
 
 
    alert("Game saved!");
 
});
 
function loadGame() {
 
    const savedGame =
 
        localStorage.getItem("cookieClickerSave");
 
 
    if (savedGame) {
 
        const gameData =
 
            JSON.parse(savedGame);
 
 
        cookies =
 
            gameData.cookies || 0;
 
        cursors =
 
            gameData.cursors || 0;
 
        grandmas =
 
            gameData.grandmas || 0;
 
 
        cookiesPerSecond =
 
            cursors + (grandmas * 5);
 
    }
 
 
    updateScreen();
 
}
 
 
resetButton.addEventListener("click", function () {
 
    const confirmReset =
 
        confirm(
 
            "Are you sure you want to reset your game?"
 
        );
 
 
    if (confirmReset) {
 
        cookies = 0;
 
        cursors = 0;
 
        grandmas = 0;
 
        cookiesPerSecond = 0;
 
 
        localStorage.removeItem(
 
            "cookieClickerSave"
 
        );
 
 
        updateScreen();
 
    }
 
});
 
loadGame();