Certainly! Below is a simple implementation of a countdown timer in JavaScript that starts from 10 seconds and changes the background color when the countdown ends.

You can create an HTML file and include the following code:

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
            background-color: white;
            font-family: Arial, sans-serif;
            font-size: 2rem;
        }
    </style>
</head>
<body>

<div id="timer">10</div>

<script>
    let countdown = 10;
    const timerElement = document.getElementById('timer');

    const countdownInterval = setInterval(() => {
        countdown--;
        timerElement.textContent = countdown;

        if (countdown <= 0) {
            clearInterval(countdownInterval);
            document.body.style.backgroundColor = 'lightcoral'; // Change the background color
        }
    }, 1000);
</script>

</body>
</html>
```

### Explanation:

1. **HTML Structure:** 
   - A `div` with the ID `"timer"` is used to display the countdown.
   
2. **CSS Styles:**
   - The body is styled to center the timer text both vertically and horizontally. The default background color is white.

3. **JavaScript Code:**
   - A variable `countdown` is initialized to 10.
   - We get a reference to the timer element.
   - The `setInterval` function is called every 1000 milliseconds (1 second) to decrease the countdown value.
   - The text content of the timer element is updated with the current countdown value.
   - Once the countdown reaches zero, the interval is cleared with `clearInterval`, and the background color is changed to 'lightcoral'.

You can copy and paste this code into an HTML file and open it in your web browser to see the countdown timer in action!