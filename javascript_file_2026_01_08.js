Certainly! Below is a simple JavaScript countdown timer that starts from 10 and changes the background color when the countdown reaches zero. You can directly use the provided HTML and JavaScript code in an HTML file.

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
            font-size: 48px;
            transition: background-color 0.5s;
        }
    </style>
</head>
<body>

<div id="timer">10</div>

<script>
    let countdownValue = 10;

    const timerElement = document.getElementById('timer');

    const countdown = setInterval(() => {
        timerElement.textContent = countdownValue;
        
        if (countdownValue === 0) {
            clearInterval(countdown);
            document.body.style.backgroundColor = 'lightblue'; // Change to your desired color
        }

        countdownValue--;
    }, 1000);
</script>

</body>
</html>
```

### Instructions

1. **Copy the code** above into a text editor.
2. **Save it as `countdown.html`.**
3. **Open the file in a web browser** to see the countdown from 10, and once it reaches 0, the background color will change to light blue.

### Customization
- You can modify the `backgroundColor` value in the JavaScript code to change it to any color you prefer.
- You can adjust the initial countdown value by changing `let countdownValue = 10;` to any other integer.