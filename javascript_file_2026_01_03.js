Certainly! Below is a simple JavaScript code snippet that generates and displays a random fun fact in the console each time you run it:

```javascript
// Array of fun facts
const funFacts = [
    "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3000 years old and still perfectly edible.",
    "A group of flamingos is called a 'flamboyance'.",
    "Bananas are berries, but strawberries aren’t.",
    "Wombat poop is cube-shaped.",
    "Octopuses have three hearts.",
    "A jiffy is an actual unit of time. It’s 1/100th of a second.",
    "The heart of a blue whale is as big as a car.",
    "A bolt of lightning can strike the same place twice."
];

// Function to get a random fun fact
function getRandomFunFact() {
    const randomIndex = Math.floor(Math.random() * funFacts.length);
    return funFacts[randomIndex];
}

// Display a random fun fact in the console
console.log(getRandomFunFact());
```

### How to Use:
1. Copy the code above.
2. Open your web browser.
3. Press `F12` or right-click and select "Inspect" to open the Developer Tools.
4. Navigate to the "Console" tab.
5. Paste the code into the console and hit `Enter`.

Every time you run the code, it will display a random fun fact!