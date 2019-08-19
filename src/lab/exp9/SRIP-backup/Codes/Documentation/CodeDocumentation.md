# Experiment Code Documentation
---
## Introduction
This document captures the experiment implementation details.

## Code Details
##### File Name : home.html

##### File Description :
- This file is the html file which is linked with the style2.css.

- This file contains the links to manual.html and index.html.

- Basic introductory page of the experiment.

##### File Name : manual.html

##### File Description :
- This file is the html file which is linked with the style2.css.

- This file contains the links to home.html and index.html.

- Provides manual of the experiment.

##### File Name : style2.css

##### File Description :
- This file contains the CSS / styling content for home.html and manual.html files.

##### File Name : index.html

##### File Description :
- This file is the main html file which is linked with the style.css and canvas.js files.

- Within the body tags at the begin we can find division for heading, declaration of canvas width and height, and we can find the link for the script "canvas.js file".

- Then we can find four division with id :

> **id = "forFirstInputs"** We can enter the frame width and height or start the experiment with default values.      

> **id = "forSecondInputs"** We can enter the coordinates of 1st end point and 2nd point of the line or go back.

> **id = "forThirdInputs"** We can perform next iterations and previous iterations or go back.

> **id = "forThirdDefaultInputs"** This is for performing next iterations and pervious iterations when we clicked on the button "Start with default values".

##### File Name : style.css

##### File Description :
- This file contains all the CSS / styling part for the index.html.

##### File Name : canvas.js

##### File Description :
- This file contains all the required functions and canvas with 2d context required for the simulation.

- All the major variable used in the file are declared at the beginning
of the file.

- The first if - else block is used for checking whether the canvas is supported by the browser or not.

- If *the canvas is not supported then we get a alert message* else *the rest of the code is executed*.  

- In the else block we have many functions for making the simulation work.

**Function :** drawDefaultFrame()

**Function Description :** We can use this function for drawing the frame with width = 15 and height = 15.

**Function :** drawFrame()

**Function Description :** We can use this function for drawing the frame with width entered by the user and height entered by the user.

**Function :** show_hide_content()

**Function Description :** If html content with id = forFirstInputs are shown previously then id = forFirstInputs block will be hidden and id = forSecondInputs block will displayed and vis versa.

**Function :** change_content()

**Function Description :** If html content with id = forSecondInputs are shown previously then id = forSecondInputs block will be hidden and id = forThirdInputs block will displayed and vis versa.

**Function :** coordinatesEntered()

**Function Description :**
- The entered 1st end point and 2nd end point will be verified with the respective constrains and range of the experiment.

- Then the Rasterization line will be drawn on the canvas.

- All the Rasterization pixels coordinates will stored into their respective arrays using the Bresenham's Line Rasterization Algorithm.

- The points stored in the arrays are used for displaying them in next iteration and previous iteration.

**Function :** nextIteration()

**Function Description :** Used for performing next iteration in the simulation with respective conditions.

**Function :** previousIteration()

**Function Description :** Used for performing previous iteration in the simulation with respective conditions.

**Function :** drawAgainAgain()

**Function Description :** Used for drawing the frame again because after every iteration the borders of the iterated box will be covered with color of the box.

**Function :** startWithDefaultValue()

**Function Description :**
- The function starts on clicking the button "Start With Default Values".

- Used for drawing the frame with default values and staring the simulation with default 1st and 2nd end points of the line.

## Other Details
1. Algorithm used is the Bresenham's Line Rasterization Algorithm.

2. Completely their are 6 input values required for starting the simulation.
  - Frame height
  - Frame Width
  - x-coordinate of 1st end point
  - y-coordinate of 1st end point
  - x-coordinate of 2nd end point
  - y-coordinate of 2nd end point


3. Completely their are 7 buttons required for performing the simulation.

  - Enter button, Start With Default Values button
  - Start button, Back button
  - Next Iteration, Previous Iteration and Back button


4. Default the frame width and height are 15 and 15.
