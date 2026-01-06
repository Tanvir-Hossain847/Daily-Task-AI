Certainly! You can create a JavaScript function that changes the background color of the document every 5 seconds using the `setInterval` method. Below is a simple implementation that cycles through a set of predefined colors. You can embed this in an HTML file to see it in action.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Change Background Color</title>
    <style>
        body {
            transition: background-color 1s; /* Smooth transition for color change */
        }
    </style>
</head>
<body>

<script>
    function changeBackgroundColor() {
        const colors = ['#FF5733', '#33FF57', '#3357FF', '#F3FF33', '#FF33A1'];
        let index = 0;

        setInterval(() => {
            document.body.style.backgroundColor = colors[index];
            index = (index + 1) % colors.length; // Loop through colors
        }, 5000); // Change color every 5000 milliseconds (5 seconds)
    }

    // Start the background color change on page load
    window.onload = changeBackgroundColor;
</script>

</body>
</html>
```

### Explanation:
- **Array of Colors**: The `colors` array contains the colors you want to cycle through.
- **setInterval**: This function is used to run the code inside it every 5000 milliseconds (5 seconds).
- **Index Management**: The index is updated to loop back to the start of the colors array using the modulus operator `%`.
- **Smooth Transition**: CSS transition is added to the `body` style for a smooth color change effect.

You can customize the colors in the `colors` array to fit your needs! Just copy and paste the above code into an HTML file and open it in a web browser to see the color changing effect in action.