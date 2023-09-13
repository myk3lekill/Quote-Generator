//Document Object Manipualtion DOM
const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

let apiQuotes = [];

//TypeWriter



//Show Loading
function showLoadingSpinner() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

//Hide Loading
function removeLoadingSpinner() {
    if(!loader.hidden)
    loader.hidden = true;
    quoteContainer.hidden = false;
}

//Show new quote
function newQuote() {
    showLoadingSpinner();//loader loading
    //Pick a random quote from apiQuotes array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
    //Populate the text contet using DOM
      //check if Author field is blank and replace it with 'Unknown'
      if(!quote.author) {
        authorText.textContent = 'Unknown';
      } else {
        authorText.textContent = quote.author;
      }
        //if qute text is long change the font size
        if (quote.text.length > 120) {
            quoteText.classList.add('long-quote') //Add a CSS class called long-quote
        } else {
            quoteText.classList.remove('long-quote') //Remove the CSS class called long-quote
        }
    quoteText.textContent = quote.text; 

     
    //Set Quote and hide loader
    removeLoadingSpinner();
}

// Get quote from API using async javascript
async function getQuotes() {
    showLoadingSpinner();//loader loading
    const apiUrl = "https://jacintodesign.github.io/quotes-api/data/quotes.json";
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json(); //Global variable set value
        newQuote()
    }
    catch (error) {
        //Catch Error Here
        alert(error)
    }
}

// Tweet Quote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/twitter?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');//'_blank' allow to open twitter in a new tab
}

// Event Listeners
newQuoteBtn.addEventListener('click', newQuote) //listen on click of new quote button than activate the function newQuote (don't need ())
twitterBtn.addEventListener('click', tweetQuote) //listen on click of twitter button than activate the function tweetQuote (don't need ())


// On Load Behaviour
getQuotes()

//ALTERNATIVE: Local Quote
// function newQuote() {
//     //Pick a random quote from localQuote array
//     const quote = localQuotes[Math.floor(Math.random() * apiQuotes.length)]
//     console.log(quote)
// }