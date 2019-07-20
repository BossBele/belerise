# belerise
belerise is a jQuery tool allows users to use any gradient seen in the https://uigradients.com website in their webpages. The tool requires the user to specify the gradient name and the element to which the gradient will be applied on; hence saving the user from the hassle of copying and pasting gradient css from the website (https://uigradients.com).

This project extends a truly awesome "uiGradients" project by Indrashish Ghosh gotten from https://github.com/Ghosh/uiGradients

## Set-Up
# 1. CDN
This project can be easily added to your webpages through jsDelivr - A free, fast, and reliable Open Source CDN for npm & GitHub.
You only need a single JavaScript file: belerise.js
```html 
<script src="https://cdn.jsdelivr.net/gh/BossBelle/belerise@latest/belerise.js" defer></script>
```
### OR
Add a minified version of the file: belerise.min.js
```html 
<script src="https://cdn.jsdelivr.net/gh/BossBelle/belerise@latest/belerise.min.js" defer></script>
```
Make sure you also include jQuery before you include *belerise.js*

# 2. Download
The alternative is to download this repository and add belerise.js according to the file structure associated with your webpages.
You only need a single JavaScript file: belerise.js
```html 
<script src="path/to/belerise/belerise.js" defer></script>
```
Make sure you also include jQuery before you include *belerise.js*

## Usage
After linking *belerise.js* and jQuery, you can use belerise like:
Initialize the gradient and run some code to use the generated colour like so:

```javascript
<script>
    $(document).ready(function(){
      $("element").belerise("Hello World");
    });
 </script>
```

The *belerise()* function takes in the name of the gradient provided that it exists on https://uigradients.com

It is also possible to specify the direction of the gradient like so:

```javascript
<script>
    $(document).ready(function(){
      $("element").belerise("Beleko", "left");
    });
 </script>
```

By default, the gradient direction is "right"/"to right".

# Notes
This project uses the *gradients.json* file from Indrashish Ghosh's uiGradients repository. The file is dynamically fetched by jsdelivr hence all updated gradients are available
I welcome contributors; I currently can't see how to improve this project but I'm sure you can. And if you can, then you should improve this project or perhaps create another that extends uiGradients
As Indrashish Ghosh gave us a way to see things differently, I hope this project, together with all uiGradients' projects, inspire other awesome "eye-catching" projects.
Another jQuery project,
Thanks.
