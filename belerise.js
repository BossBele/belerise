// beleriseJSON expected to capture uiGradients' gradients.json file
var beleriseJSON;
// beleriseGradient expected to capture object of gradient specified by user
var beleriseGradient;
// beleriseGradientColors expected to capture colors value of specified gradient object
var beleriseGradientColors;
// beleriseGradientColors expected to capture gradient direction value of belerise (method) options
var beleriseGradientDirection;
// jquery ajax call to gradients.json via jsdelivr cdn
$.ajax({
    url: 'https://cdn.jsdelivr.net/gh/Ghosh/uiGradients/gradients.json',
    dataType: 'json',
    success: function( data ) {
      beleriseJSON = data;
      console.log("Success loading beleriseJSON");
    },
    error: function( data ) {
      console.error("Error loading beleriseJSON");
    }
  });
// used jQuery.fn.extend() method to provide new methods that can be chained to the jQuery() function
// in our case - $(element).belerise()
jQuery.fn.extend({
  belerise: function (gradientName, options = {
                // default gradient direction is 'to right'
                direction: "right",
            }) {
                // scripts to run if gradients.json file is captured successfully
                if (beleriseJSON.length > 0) {
                    // function to set the gradient's direction
                    switch (options.direction) {
                        case "right":
                        case "to right":
                            beleriseGradientDirection = "to right";
                            break;
                        case "bottom":
                        case "to bottom":
                            beleriseGradientDirection = "to bottom";
                            break;
                        case "left":
                        case "to left":
                            beleriseGradientDirection = "to left";
                            break;
                        case "top":
                        case "to top":
                            beleriseGradientDirection = "to top";
                            break; 
                        default: 
                            beleriseGradientDirection = "to right";
                    }
                    // beleriseGradient captured by searching for the object with name equal to the gradient name specified
                    beleriseGradient = searchObjectsArray(gradientName, beleriseJSON);
                    // beleriseGradientColors captured by accessing the beleriseGradient object's colors value
                    beleriseGradientColors = beleriseGradient.colors.toString();
                    // beleriseGradientColorsArray captured by splitting the beleriseGradient object's colors string
                    beleriseGradientColorsArray = beleriseGradient.colors.toString().split(",");
                    // beleriseFirstGradientColor captured by taking the first value of the beleriseGradientColorsArray array
                    beleriseFirstGradientColor = beleriseGradientColorsArray[0];
                    // the css of the object at hand as observed in the https://uigradients.com website
                    $(this).css({
                        "background": "" + beleriseFirstGradientColor + "",  /* fallback for old browsers */
                        "background": "-webkit-linear-gradient(" + beleriseGradientDirection + ", " + beleriseGradientColors + ")",  /* Chrome 10-25, Safari 5.1-6 */
                        "background": "linear-gradient(" + beleriseGradientDirection + ", " + beleriseGradientColors + ")", /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
                    });
                }
            }
});
// function to search an array of objects
// function takes in value to search for out of the objects' name values; and the array of objects itself
function searchObjectsArray(nameKey, myArray){
    for (var i=0; i < myArray.length; i++) {
        if (myArray[i].name === nameKey) {
            return myArray[i];
        }
    }
}