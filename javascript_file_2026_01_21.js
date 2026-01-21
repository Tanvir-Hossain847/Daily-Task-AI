To create a JavaScript function that changes the background color every 5 seconds, you can use the `setInterval` method. Below is an example of how you can implement this functionality:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Change Background Color</title>
    <style>
        body {
            transition: background-color 1s ease; /* Smooth color transition */
        }
    </style>
</head>
<body>

<script>
    function changeBackgroundColor() {
        // Generate a random color
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        
        // Change the background color
        document.body.style.backgroundColor = randomColor;
    }

    // Call the function every 5000 milliseconds (5 seconds)
    setInterval(changeBackgroundColor, 5000);

    // Optionally, call the function immediately to set an initial color
    changeBackgroundColor();
</script>

</body>
</html>
```

### How This Works:
1. **Function Definition**: The `changeBackgroundColor` function generates a random hexadecimal color and assigns it to the `backgroundColor` property of the `body` element.
  
2. **Random Color Generation**: It uses `Math.random()` to create a random number, converts it to a hexadecimal string, and formats it to a proper color code.

3. **`setInterval`**: This method calls the `changeBackgroundColor` function every 5000 milliseconds (5 seconds).

4. **Initial Call**: The `changeBackgroundColor` function is called once immediately to set the initial background color before any intervals occur.

### Note:
- The CSS transition effect defined in the `<style>` section allows for a smooth transition between background colors, enhancing the visual effect. Adjust the duration as needed.