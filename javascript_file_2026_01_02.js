Sure! Below is an example of a JavaScript countdown timer that starts from 10 and changes the background color when the timer reaches zero. You can run this code in a simple HTML file.

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
            font-size: 48px;
            transition: background-color 0.5s;
        }
    </style>
</head>
<body>
    <div id="timer">10</div>

    <script>
        let countdown = 10; // Starting number
        const timerElement = document.getElementById("timer");

        const interval = setInterval(() => {
            if (countdown > 0) {
                timerElement.textContent = countdown;
                countdown--;
            } else {
                clearInterval(interval);
                // Change background color when countdown is over
                document.body.style.backgroundColor = "lightblue"; // Change to your preferred color
            }
        }, 1000); // Update countdown every second
    </script>
</body>
</html>
```

### Explanation:

- The HTML consists of a `<div>` element to display the countdown timer.
- CSS is used to center the timer on the screen and add a smooth transition effect for the background color.
- A JavaScript code block initializes the countdown variable to 10 and sets an interval that updates the timer every second.
- When the countdown reaches zero, it clears the interval and changes the background color of the body.

You can change the background color in the script to any color of your choice. Just replace `"lightblue"` with your desired color!