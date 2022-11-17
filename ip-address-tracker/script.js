`use strict`;

async function getIPDetails(url) {
  let response = await fetch(url);
  let data = await response.json();
  return data;
}

function displayIPDetails() {
  const ipAddress =
    document.getElementsByClassName("search-bar-input")[0].value;
  const url = `https://geo.ipify.org/api/v2/country?apiKey=at_vMIjof1g6XVqaF1luAuKpjEHZwIvf&ipAddress=${ipAddress}`;

  getIPDetails(url).then((data) => {
    console.log(data);
    data.ip ? addIPDetailsContent(data) : alert("Enter valid IP address");
  });
}

const addIPDetailsContent = (data) => {
  const {
    ip,
    location: { country, region, timezone },
    isp,
  } = data;
  console.log(ip, country, region, timezone, isp);
  document.querySelector(".ip-address .ip-details-content").textContent = ip;
  document.querySelector(
    ".ip-location .ip-details-content"
  ).textContent = `${region}, ${country}`;
  document.querySelector(
    ".ip-timezone .ip-details-content"
  ).textContent = `UTC ${timezone}`;
  document.querySelector(".ip-isp .ip-details-content").textContent = isp;
};

let mapOptions = {
  center: [17.37, 78.78],
  zoom: 10,
};
let map = new L.map("map", mapOptions);
let layer = new L.TileLayer(
  "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
);
map.addLayer(layer);
