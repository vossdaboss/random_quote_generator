fetch('quotes.json')
  .then(response => response.text())
  .then(data => {
    const quotes = JSON.parse(data);


    const newQuoteButton = document.querySelector("#new-quote-button");
    const quoteContainer = document.querySelector("#quote-container");

  newQuoteButton.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    const quoteHTML = `
      <p>"${randomQuote.Quote}"</p>
      <p>- ${randomQuote.Author}</p>
    `;
    quoteContainer.innerHTML = quoteHTML;
  });  
}); 
// Path: quotes.json