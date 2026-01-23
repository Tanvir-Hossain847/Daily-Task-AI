You can create a simple JavaScript function that displays a random fun fact in the console. Here's a sample code snippet for how you can achieve this:

```javascript
// Array of fun facts
const funFacts = [
    "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3000 years old and still perfectly edible.",
    "Bananas are berries, but strawberries are not.",
    "A group of flamingos is called a 'flamboyance'.",
    "Octopuses have three hearts.",
    "Wombat poop is cube-shaped.",
    "A small child could swim through the veins of a blue whale.",
    "The inventor of the Frisbee was turned into a Frisbee after he died.",
    "Avocados are berries, while cucumbers are fruits.",
    "The world's largest desert is Antarctica.",
    "Sharks have been around longer than trees."
];

// Function to display a random fun fact
function displayRandomFunFact() {
    const randomIndex = Math.floor(Math.random() * funFacts.length);
    console.log(funFacts[randomIndex]);
}

// Call the function
displayRandomFunFact();
```

You can run this code in any JavaScript environment (like a web browser’s console, Node.js, etc.) and it will log a random fun fact to the console each time it is called. Feel free to add more fun facts to the `funFacts` array as you like!