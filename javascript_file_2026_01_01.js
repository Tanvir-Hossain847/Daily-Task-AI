Certainly! You can create a JavaScript function that changes the background color of the document every 5 seconds using the `setInterval` function. Here’s a simple implementation:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Change Background Color</title>
    <style>
        body {
            transition: background-color 0.5s ease; /* Smooth transition */
        }
    </style>
</head>
<body>

<script>
    function changeBackgroundColor() {
        // Array of possible colors
        const colors = ['#FF5733', '#33FF57', '#3357FF', '#F1C40F', '#8E44AD', '#E74C3C', '#2ECC71', '#3498DB'];
        
        // Generate a random index to select a color
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        
        // Change the background color
        document.body.style.backgroundColor = randomColor;
    }

    // Change the background color every 5 seconds
    setInterval(changeBackgroundColor, 5000);

    // Call the function once to set an initial color
    changeBackgroundColor();
</script>

</body>
</html>
```

### Explanation:
- **HTML Structure**: A basic HTML structure is provided with a `<body>` tag where the background color will change.
- **CSS**: A transition style is added to the `body` to make the background color change smoothly.
- **JavaScript**:
  - The `changeBackgroundColor` function selects a random color from an array of colors and sets it as the body's background color.
  - The `setInterval` function is set to call `changeBackgroundColor` every 5000 milliseconds (5 seconds).
  - The function is called once initially to set an initial background color immediately when the page loads.

You can run this code in a web browser, and you will see the background color change every 5 seconds. Adjust the colors in the array as per your preference!