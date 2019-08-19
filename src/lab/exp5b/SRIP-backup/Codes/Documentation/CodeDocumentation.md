# Experiment Code Documentation
---
## Introduction
This document captures the experiment implementation details.

## Code Details
##### File Name : index.html

##### File Description :
- This file is the html file which is linked with the indexStyle.css.

- This file contains the links to manual.html and world.html.

- Basic introductory page of the experiment.

##### File Name : manual.html

##### File Description :
- This file is the html file which is linked with the indexStyle.css.

- This file contains the links to world.html and index.html.

- Provides manual of the experiment.

##### File Name : indexStyle.css

##### File Description :
- This file contains the CSS / styling content for index.html and manual.html files.

##### File Name : worldStyle.css

##### File Description :
- This file contains the CSS / styling content for world.html and display.html files.

##### File Name : world.html

##### File Description :
- This is linked with three.js library.

- Theory part of the experiment is provided in this.

- This file contains the world features of the experiment.

- This contains link to the display.html file.

##### File Name : display.html

##### File Description :
- This is linked with three.js library.

- This file contains the display features of the experiment.

- This contains link to the world.html file.

##### File Name : script.js

##### File Description :
- This file contains all the required functions required for the simulation.

- The scene, camera, camera2, renderer are the basic variables required any WebGL ThreeJs to display on the screen.

**Function :** window.addEventListener()

**Function Description :** Resizes the screen when window dimensions change. Makes the screen responsive for dimension change.

**Function :** camera2D()

**Function Description :** Changes the camera from 2D to 3D and vice versa.

**Function :** lockV()

**Function Description :** For highlighting or removing the highlighted vertices of the entire structure Display Tab.

**Function :** world_lockV()

**Function Description :** For highlighting or removing the highlighted vertices of the respective figure or entire structure in World Tab.

**Function :** drawPalm()

**Function Description :** Adds the palm if not present on the screen and vice versa.

**Function :** drawWrist()

**Function Description :** Adds the wrist if not present on the screen and vice versa.

**Function :** drawForearm()

**Function Description :** Adds the Forearm if not present on the screen and vice versa.

**Function :** drawElbow()

**Function Description :** Adds the Elbow if not present on the screen and vice versa.

**Function :** drawArm()

**Function Description :** Adds the Arm if not present on the screen and vice versa.

**Function :** drawShoulder()

**Function Description :** Adds the Shoulder if not present on the screen and vice versa.

**Function :** activePalm()

**Function Description :** Highlights the palm if not highlighted on the screen and vice versa.

**Function :** activeForearm()

**Function Description :** Highlights the Forearm if not highlighted on the screen and vice versa.

**Function :** activeArm()

**Function Description :** Highlights the Arm if not highlighted on the screen and vice versa.

**Function :** wf_Transition()

**Function Description :** Shifts the respective figure to new coordinates entered the user.

**Function :** world_drawXY()

**Function Description :** Adds the XY grid in the scene in World tab.

**Function :** drawYZ()

**Function Description :** Adds the YZ grid, if not present in the scene in Display tab and vice versa.

**Function :** drawZX()

**Function Description :** Adds the ZX grid, if not present in the scene in Display tab and vice versa.

**Function :** drawXY()

**Function Description :** Adds the XY grid, if not present in the scene in Display tab and vice versa.

**Function :** startTransistion()

**Function Description :** Moves the entire structure according the amount of distance (units) entered in x, y and z direction from current point.

**Function :** startAnimation()

**Function Description :** Adds the animation to the structure if checkbox in linked html is checked - Yes else if checkbox is checked - No then the animation is removed from the structure.
