"use strict";

const navButtons = document.querySelectorAll(".nav-button");
const screens = document.querySelectorAll(".screen");

function showScreen(screenId) {
  screens.forEach((screen) => {
    screen.classList.remove("active");
  });

  navButtons.forEach((button) => {
    button.classList.remove("active");
  });

  const targetScreen = document.getElementById(screenId);

  if (!targetScreen) {
    console.error(`화면을 찾을 수 없습니다: ${screenId}`);
    return;
  }

  targetScreen.classList.add("active");

  const targetButton = document.querySelector(
    `[data-screen="${screenId}"]`
  );

  if (targetButton) {
    targetButton.classList.add("active");
  }
}

navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const screenId = button.dataset.screen;
    showScreen(screenId);
  });
});

/* 출석 보상 테스트 */

const dailyRewardButton = document.getElementById(
  "daily-reward-button"
);

dailyRewardButton.addEventListener("click", () => {
  alert("출석 보상으로 보석 100개를 획득했습니다!");
});
