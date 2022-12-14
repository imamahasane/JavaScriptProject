const sliderContainer = document.querySelector(".slider-container");
const sliderRight = document.querySelector(".right-slide");
const sliderLeft = document.querySelector(".left-slide");
const upButton = document.querySelector(".up-button");
const downButton = document.querySelector(".down-button");
const sliderLength = sliderRight.querySelectorAll("div").length;

let activeSlideIndex = 0;

sliderLeft.style.top = `-${(sliderLength - 1) * 100}vh `;

upButton.addEventListener(`click`, () => {
  changeSlide("up");
});

downButton.addEventListener(`click`, () => {
  changeSlide("down");
});

const changeSlide = (direction) => {
  const sliderHeight = sliderContainer.clientHeight;
  // console.log(sliderHeight);
  if (direction === "up") {
    activeSlideIndex++;

    if (activeSlideIndex > sliderLength - 1) {
      activeSlideIndex = 0;
    }
  } else if (direction === "down") {
    activeSlideIndex--;

    if (activeSlideIndex < 0) {
      activeSlideIndex = sliderLength - 1;
    }
  }

  sliderRight.style.transform = `translateY(-${
    activeSlideIndex * sliderHeight
  }px)`;

  sliderLeft.style.transform = `translateY(${
    activeSlideIndex * sliderHeight
  }px)`;
};
