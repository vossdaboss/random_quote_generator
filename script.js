const quotes = [
    {
      text: "Be the change you wish to see in the world.",
      author: "Mahatma Gandhi"
    },
    {
      text: "The only way to do great work is to love what you do.",
      author: "Steve Jobs"
    },
    {
      text: "Believe you can and you're halfway there.",
      author: "Theodore Roosevelt"
    }
  ];
  
  const newQuoteButton = document.querySelector("#new-quote-button");
  const quoteContainer = document.querySelector("#quote-container");
  
  newQuoteButton.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    const quoteHTML = `
      <p>"${randomQuote.text}"</p>
      <p>- ${randomQuote.author}</p>
    `;
    quoteContainer.innerHTML = quoteHTML;
  });