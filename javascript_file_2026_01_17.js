You can use the following JavaScript code to display a random fun fact in the console. This code creates an array of fun facts, selects a random one, and logs it to the console.

```javascript
function displayRandomFunFact() {
    const funFacts = [
        "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3000 years old.",
        "A group of flamingos is called a 'flamboyance'.",
        "Bananas are berries, but strawberries aren't.",
        "Octopuses have three hearts.",
        "Wombat poop is cube-shaped.",
        "The Eiffel Tower can be 15 cm taller during the summer due to thermal expansion.",
        "A bolt of lightning contains enough energy to toast 100,000 slices of bread.",
        "The shortest war in history lasted just 38 to 45 minutes, fought between Britain and Zanzibar on August 27, 1896.",
        "There's a species of jellyfish that is biologically immortal.",
        "Avocados are technically a fruit, but they’re often mistaken for vegetables."
    ];

    const randomIndex = Math.floor(Math.random() * funFacts.length);
    const randomFunFact = funFacts[randomIndex];

    console.log(randomFunFact);
}

// Call the function to display a random fun fact
displayRandomFunFact();
```

You can run this code in any JavaScript environment, such as a web browser's developer console or a Node.js environment. Each time you call the `displayRandomFunFact()` function, it will print a different fun fact to the console.