<<<<<<< HEAD
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

setInterval(generateQuote(), 1000);

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
=======

const affirmationContainer = document.querySelector(".affirmation-container");
const apiURL = "https://api.quotable.io/random";
const jsonData = '../data/quotes.json'
let toggleCount = 0
let quoteData = null

const handleClick = (e) => {
  e.preventDefault()
  let { target } = e

  const prevButton = document.querySelector('.Previous')
  if (toggleCount === 0 && target.innerHTML === 'Previous') {
    prevButton.disabled = true
    displayErr()
  } else if (target.innerHTML === 'Previous') {
    toggleCount -= 1
    generateQuote()
  } else {
    toggleCount += 1
    generateQuote()
    prevButton.disabled = false
  }
}


const displayErr = () => {
  const errContainer = document.querySelector('#error-message')
  errContainer.innerHTML = 'No more previous affirmations please press next to see a new affirmation'
}

const createButtons = () => {
  const buttons = ['Previous', 'Next']

  const buttonContainer = document.createElement('div')

  buttonContainer.className = 'bttn-container'

  const listOfButtons = buttons.map(button => {
    const createdButton = document.createElement('button')
    createdButton.innerHTML = button
    createdButton.className = button
    createdButton.addEventListener('click', handleClick)
    buttonContainer.appendChild(createdButton)
    affirmationContainer.appendChild(buttonContainer);
  })

}

const getQuoteData = () => {
  fetch(jsonData)
    .then((jsonFileRes) => jsonFileRes.json())
    .then((jsonData) => {
      quoteData = jsonData
      generateQuote()
    })
    .catch((err) => console.log(err));
}

const generateQuote = () => {
  const quoteText = quoteData[toggleCount].text
  const quoteAuthor = quoteData[toggleCount].author

  let authorHeader = document.querySelector('.author-header');
  let contentPara = document.querySelector('.content-para');

  authorHeader.innerHTML = quoteAuthor;
  contentPara.innerHTML = quoteText;

  affirmationContainer.appendChild(authorHeader);
  affirmationContainer.appendChild(contentPara);

}

getQuoteData()
createButtons()
>>>>>>> roger
