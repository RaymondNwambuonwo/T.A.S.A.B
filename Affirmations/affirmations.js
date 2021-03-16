// Setup for axios call and file write up
// let URL = "https://type.fit/api/quotes"
// let path = '../data/quotes.json'
// const fs = require('fs')
// let axios = require('axios')
// let errorCheck = (err) => err ? console.log(err) : console.log('Data written')

// Use axios to get data and write it to json file using FS
// axios.get(URL)
//   .then(res => {
//     console.log(res)
//     let { data } = res
//     let stringifiedData = JSON.stringify(data)
//     console.log(stringifiedData)
//     return stringifiedData
//   })
//   .then(results => {
//     fs.writeFileSync(path, results, errorCheck)
//   })
//   .catch(err => console.log(err))

const body = document.querySelector(".main");
const url1 = "https://api.quotable.io/random";
function generateQuote() {
  fetch(url1)
    .then((data) => data.json())
    .then((data) => {
      console.log(data.author);
      console.log(data.content);
      let createH1 = document.createElement("h2");
      let createPara = document.createElement("p");

      createH1.innerHTML = data.author;
      createPara.innerHTML = data.content;

      body.appendChild(createH1);
      body.appendChild(createPara);
    })
    .catch((err) => console.log(err));
}
// Repeat generateQuote() every 10 seconds
setInterval(generateQuote(), 1000);
