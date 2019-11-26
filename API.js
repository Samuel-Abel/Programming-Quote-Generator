const baseURL ="https://programming-quotes-api.herokuapp.com/quotes";

const searchForm = document.querySelector('form');
const quoteText = document.querySelector('ul')

searchForm.addEventListener('submit', fetchResults);

function fetchResults(e){
    e.preventDefault();
    fetch(baseURL)
        .then(result => result.json())
        .then(json => {
            console.log(json);
            displayQuotes(json);
        })
        .catch(err => console.log(err));
}

function displayQuotes(quotes){
    quoteText.innerHTML = ''
        let quoteArray = Math.floor(Math.random()*quotes.length);
        let quote = document.createElement('li');
        quote.innerText = quotes[quoteArray].en;
        quoteText.appendChild(quote);
    }   














