You can use the following JavaScript code to display a random fun fact in the console. This code snippet includes an array of fun facts and randomly selects one to log to the console.

```javascript
// Array of fun facts
const funFacts = [
    "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3000 years old and still edible.",
    "Octopuses have three hearts and blue blood.",
    "Bananas are berries, but strawberries are not.",
    "A group of flamingos is called a 'flamboyance.'",
    "Wombat poop is cube-shaped.",
    "Cows have best friends and can become stressed when separated from them.",
    "Pineapples take about two years to grow.",
    "A jiffy is an actual unit of time: 1/100th of a second.",
    "The inventor of the Pringles can is buried in one.",
    "Humans share 50% of their DNA with bananas."
];

// Function to display a random fun fact
function displayRandomFunFact() {
    const randomIndex = Math.floor(Math.random() * funFacts.length);
    console.log(funFacts[randomIndex]);
}

// Call the function to display a random fun fact
displayRandomFunFact();
```

You can run this code in your browser's console or in a Node.js environment to see a random fun fact. Each time you call the `displayRandomFunFact` function, a different fact will be displayed.