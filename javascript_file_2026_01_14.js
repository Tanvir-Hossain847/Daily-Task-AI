Sure! Below is a simple JavaScript code snippet that generates a random fun fact and displays it in the console:

```javascript
// Array of fun facts
const funFacts = [
    "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3000 years old and still edible.",
    "Bananas are berries, but strawberries aren't.",
    "Octopuses have three hearts.",
    "A group of flamingos is called a 'flamboyance.'",
    "Wombat poop is cube-shaped.",
    "Cows have best friends and get stressed when they are separated.",
    "The world's largest desert is actually Antarctica.",
    "The Unicorn is the national animal of Scotland.",
    "A day on Venus is longer than a year on Venus.",
    "There's a basketball court on the top floor of the US Supreme Court building."
];

// Function to display a random fun fact
function displayRandomFunFact() {
    const randomIndex = Math.floor(Math.random() * funFacts.length);
    const randomFact = funFacts[randomIndex];
    console.log(randomFact);
}

// Call the function to display a random fun fact
displayRandomFunFact();
```

You can run this code in any JavaScript environment (like a web browser console or Node.js). Each time you run the function `displayRandomFunFact()`, it will select a random fact from the `funFacts` array and print it to the console.