const axios = require("axios");

// const urls = [
//   "https://google.com",
//   "http://derpbadurl.asdf",
//   "https://amazon.com",
// ];

p1 = axios.get("https://google.com");
p2 = axios.get("http://badurl.asdf");

// p2 = axios({
//   method: "get",
//   url: "http://badurl.asdf",
//   timeout: 1000 * 2, // Wait for 2 seconds before giving up
// }).catch(() => {
//   return "error";
// });

p3 = axios.get("https://amazon.com");

Promise.all([p1, p2, p3]).then((responses) => {
  console.log(responses);
});

//what am i trying to do
//i want to console log response.data for each promise on resolution
//if it does not resolve by 2 seconds, exit
