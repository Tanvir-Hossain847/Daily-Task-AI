You can create a JavaScript function that changes the background color of the webpage every 5 seconds by using the `setInterval` method. Below is an example of how to implement this:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
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
            const colors = ['#FF5733', '#33FF57', '#3357FF', '#F1C40F', '#8E44AD', '#E74C3C', '#3498DB', '#2ECC71', '#F39C12', '#D35400'];
            const randomIndex = Math.floor(Math.random() * colors.length);
            document.body.style.backgroundColor = colors[randomIndex];
        }

        // Change background color every 5 seconds
        setInterval(changeBackgroundColor, 5000);

        // Optional: call it immediately to set the initial color
        changeBackgroundColor();
    </script>
</body>
</html>
```

### Explanation:
- The `changeBackgroundColor` function randomly selects a color from the `colors` array and assigns it to the background color of the `body`.
- The `setInterval` function calls `changeBackgroundColor` every 5 seconds (5000 milliseconds).
- There's also a smooth transition effect for the background color change, which is achieved through CSS using `transition: background-color 0.5s ease;`. This provides a nice visual effect during color changes. 

You can simply copy and paste this code into an HTML file and open it in a web browser to see it in action!