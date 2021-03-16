
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
