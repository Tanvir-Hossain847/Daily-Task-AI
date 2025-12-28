You can create a simple countdown timer in JavaScript that starts from 10 and changes the background color when it reaches zero. Below is an example of how to implement this using HTML and JavaScript:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Countdown Timer</title>
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            font-family: Arial, sans-serif;
            font-size: 2rem;
            transition: background-color 0.5s;
        }
    </style>
</head>
<body>
    <div id="timer">10</div>

    <script>
        let countdownValue = 10;
        const timerElement = document.getElementById('timer');

        const countdownTimer = setInterval(() => {
            timerElement.textContent = countdownValue;
            countdownValue--;

            if (countdownValue < 0) {
                clearInterval(countdownTimer);
                document.body.style.backgroundColor = 'lightcoral'; // Change background color
                timerElement.textContent = 'Time is up!';
            }
        }, 1000);
    </script>
</body>
</html>
```

### Explanation:

1. **HTML Structure**: The HTML consists of a simple `div` that displays the countdown timer.

2. **CSS**: The styles in the `<style>` tag center the timer on the screen and give it a basic appearance. The `transition` property will allow for a smooth change in background color.

3. **JavaScript Code**:
   - Initializes `countdownValue` to 10.
   - Gets the timer element by its ID.
   - Sets a `setInterval` to run every second (1000 milliseconds).
   - Updates the text content of the timer element with the current countdown value.
   - Decreases `countdownValue` by one each second.
   - When the countdown reaches zero, it clears the interval to stop the timer, changes the background color of the body, and updates the timer text to indicate that time is up.

You can copy this code into an HTML file, save it, and open it in your browser to see the countdown timer in action!