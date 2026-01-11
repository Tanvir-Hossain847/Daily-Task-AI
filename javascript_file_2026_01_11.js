You can create a JavaScript function that changes the background color every 5 seconds using the `setInterval` method. Here’s an example of how to accomplish this:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Change Background Color</title>
    <style>
        body {
            transition: background-color 1s; /* Smooth transition for background color change */
        }
    </style>
</head>
<body>

<script>
    function changeBackgroundColor() {
        // Array of colors to choose from
        const colors = ['#FF5733', '#33FF57', '#3357FF', '#F3FF33', '#FF33A1', '#33FFF2', '#FF8533'];
        // Get a random color from the array
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        // Change the body's background color
        document.body.style.backgroundColor = randomColor;
    }

    // Change background color every 5 seconds
    setInterval(changeBackgroundColor, 5000);
    
    // Initial color change when the page loads
    changeBackgroundColor();
</script>

</body>
</html>
```

### Explanation:
1. **HTML Structure**: The basic structure is defined using `<!DOCTYPE html>` and includes a `head` and `body` section.
2. **CSS Transition**: A CSS transition has been added to the body to make the background color change smoother.
3. **JavaScript Function**:
   - **`changeBackgroundColor` Function**: This function randomly selects a color from an array of colors and applies it to the body's background.
   - **`setInterval`**: This method calls `changeBackgroundColor` every 5 seconds (5000 milliseconds).
   - The function is also called once immediately after the page loads to set an initial background color.

You can run this code in a web browser, and you will see the background color change every 5 seconds.