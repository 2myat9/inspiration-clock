const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");
const allHands = document.querySelector(".hand");
const quote = document.querySelector(".quote");
let previousNum = null;

const setDate = () => {
  // seconds
  const now = new Date();
  const seconds = now.getSeconds();

  // add 90deg because the default rotate deg starts 90deg behind
  const secondsDegrees = (seconds / 60) * 360 + 90;

  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  // minutes
  const minutes = now.getMinutes();
  const minutesDegrees = (minutes / 60) * 360 + 90;

  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

  // hours
  const hours = now.getHours();
  const hourDegrees = (hours / 12) * 360 + 90;

  hourHand.style.transform = `rotate(${hourDegrees}deg)`;

  // everytime a full cycle is reached, remove transition time so that there's no glitchy animation
  if (secondsDegrees === 360 || minutesDegrees === 360 || hourDegrees === 360) {
    allHands.style.transition = "unset";
  }
};

// run setDate function every 1 second (1000ms)
setInterval(setDate, 1000);

const generateUniqueRandom = (length) => {
  const randomNum = Math.floor(Math.random() * (length + 1));

  if (previousNum === randomNum) {
    generateUniqueRandom();
  } else {
    previousNum = randomNum;
    return randomNum;
  }
};

// get random quote from API
const getQuote = () => {
  const promise = fetch("https://type.fit/api/quotes");
  promise
    .then((response) => {
      processedResponse = response.json();
      return processedResponse;
    })
    .then((processedResponse) => {
      randomNum = generateUniqueRandom(processedResponse.length);

      randomQuote = processedResponse[randomNum].text;

      quote.innerText = randomQuote;

      // after calling the function once, set timer
      setTimeout(getQuote, 60000);
    });
};

getQuote();
