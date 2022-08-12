// Progress Bar Script Code Here..!
let container = document.querySelector(".container");
let scrollBar = document.querySelector(".outer");
let innerCircle = document.querySelector(".inner");
let horizontalBar = document.querySelector(".horizontal-bar");

let btn = document.querySelector(".btn");

// EventListener Accessing Progress Bar by using Button Here...!

btn.addEventListener("click", () => {
  let progressValue = 0;
  let progressEndValue = 100;
  let speed = 30;
  

  // Added Percentage Increament to progress Bar Using setInterval Here...!

  let progress = setInterval(() => {
    progressValue++;
    innerCircle.innerHTML = progressValue + "%";
    horizontalBar.innerHTML = progressValue + "%";

    scrollBar.style.background = `conic-gradient(
            #ff4500 ${progressValue}%,
            #cadcff ${progressValue}%
        )`;

    horizontalBar.style.width = progressValue + "%";
    horizontalBar.style.background = "#4d5bf9";

    // popUp Function Here..!

    let popUp = document.querySelector(".popup");
    let btn = document.querySelector(".popup-btn");

    function openPopUp() {
      popUp.classList.add("open-popup");
    }

    btn.addEventListener("click", () => {
      function closePopUp() {
        popUp.classList.remove("open-popup");
      }
      closePopUp();
     

    });
    

    // Added If Condition to stop the time of percentage if condition is true...!

    if (progressValue == progressEndValue) {
      clearInterval(progress);
      setTimeout(() => {
        openPopUp();
      }, 500);
    }
  }, speed);
});
