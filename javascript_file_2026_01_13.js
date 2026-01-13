You can create a simple countdown timer in JavaScript using `setInterval` and modify the document's background color when the countdown reaches zero. Below is a sample HTML and JavaScript code that implements a countdown timer starting from 10 seconds.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Countdown Timer</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin-top: 50px;
            font-size: 2em;
        }
    </style>
</head>
<body>

<div id="timer">10</div>

<script>
    let countdownTime = 10; // Countdown starts from 10 seconds
    const timerDisplay = document.getElementById('timer');

    const countdown = setInterval(() => {
        timerDisplay.textContent = countdownTime;
        
        if (countdownTime <= 0) {
            clearInterval(countdown);
            document.body.style.backgroundColor = 'lightcoral'; // Change background color
            timerDisplay.textContent = 'Time\'s up!';
        } else {
            countdownTime--;
        }
    }, 1000); // Update every second
</script>

</body>
</html>
```

### Explanation:

1. **HTML Structure**: The HTML contains a single div element to display the countdown timer.

2. **CSS Styles**: The CSS centers the timer on the page and increases the font size for better visibility.

3. **JavaScript Logic**:
   - A variable `countdownTime` is initialized to `10`.
   - `setInterval` is used to create a countdown that updates the timer display every second.
   - When `countdownTime` reaches `0`, the interval is cleared, the background color changes to `lightcoral`, and the text is updated to inform the user that the time is up.

### Usage:
To use the countdown timer, simply copy the code into an HTML file and open it in a web browser. You should see the countdown timer start from 10 and change the background color once it reaches zero.