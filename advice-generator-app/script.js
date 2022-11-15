`use strict`;

const adviceId = document.getElementsByClassName("advice-id")[0];
const adviceText = document.getElementsByClassName("advice-text")[0];

async function getQuote() {
  let response = await fetch("https://api.adviceslip.com/advice");
  let data = await response.json();
  console.log(data);
  return data;
}

getQuote().then((data) => {
  let {
    slip: { id, advice },
  } = data;
  adviceId.textContent = id;
  adviceText.textContent = `"${advice}"`;
});
