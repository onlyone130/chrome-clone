const quotes = [
    {
        quote: "That's one small step for a man, a giant leap for mankind",
        author: "Neil Armstrong",
    },
    {
        quote: "The best preparation for tomorrow is doing your best today",
        author: "H. Jackson Brown Jr",
    },
    {
        quote: "The true test of character is not how much we know how to do, but how we behave when we don't know what to do",
        author: "Bill Murphy Jr",
    },
    {
        quote: "Light looks more beautiful in darkness. When there is something beautiful in the middle of a wasteland, we are able to appreciate it more",
        author: "Hidetaka Miyazaki",
    },
    {
        quote: "So many books, so little time.",
        author: "Frank Zappa",
    },
    {
        quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
        author: " Albert Einstein",
    },
    {
        quote: "You only live once, but if you do it right, once is enough.",
        author: "Mae West",
    },
    {
        quote: "Be the change that you wish to see in the world.",
        author: "Mahatma Gandhi",
    },
    {
        quote: "If you tell the truth, you don't have to remember anything.",
        author: "Mark Twain",
    },
    {
        quote: "To live is the rarest thing in the world. Most people exist, that is all.",
        author: "Oscar Wilde",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;  
