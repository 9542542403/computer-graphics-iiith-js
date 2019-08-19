var canvas = document.getElementById('frameCanvas');

var c = canvas.getContext('2d');
/* Variable c helps in drawing the lines on canvas */

var number = canvas.getContext("2d");
/* Variable number helps in adding the numbers around frame */
number.font = "12px Arial";

/* arrayX and arrayY are storing the x and y coordinates of Rasterization Line respectively 
and display them on the canvas screen */
var arrayX = [];
var arrayY = [];

/* variable j is used for loop or indexing the array */
var j = 0;

/* numX,  numY and numGrayX, numGrayY will store the x and y coordinates respectively for showing 
the point decided and points in consideration during the next iteration and previous iteration */ 
var numX = [];
var numY = [];
var numGrayX = [];
var numGrayY = [];

/* grayX and grayY will store the x and y coordinates respectively for 
showing gray boxes during the next iteration and previous iteration */ 
var grayX = [];
var grayY = [];

var flag = 0; // Flag is used to call the show_hind_content function

/* The memoryHeight and memoryWidth will have the default values 15 and 15 
because the default frame width and frame height on starting the experiment with default values is 15 and 15 */ 
var memoryHeight = 15; // memoryHeight will remember the frame height entered by the user
var memoryWidth = 15;	// memoryWidth will remember the frame width entered by the user

var horizontalBoxes = 15;
var verticalBoxes = 15;
var division = 15;
var sx = 0;
var sy = 0;

/* Used for storing the 1st end point and 2nd end point */
var startX = 0;
var startY = 0;
var endX = 0;
var endY = 0;

// These variables are for special case when startX == startY && endX == endY
var specialX1 = 0;
var specialY1 = 0;
var specialX2 = 0;
var specialY2 = 0;

var m = 0; // For storing the value of the slope of the line
var intercept = 0; // For storing the y-intercept of the line
// For storing the starting points or 1st end coordinates of the line
var pointX1 = 0;
var pointY1 = 0;
// For storing the ending points or 2nd end coordinates of the line
var pointX2 = 0;
var pointY2 = 0;

/* Variables used in Bresenham's Line Rasterization Algorithm */
var temp = 0;
var deltaX = 0;
var deltaY = 0;
var p = 0;
var indicator = 0;


/* This toggle is used in performing the next iteration and previous iteration */
var toggle = "red";
var index = 0;
var box = canvas.getContext('2d');
var grayBox = canvas.getContext('2d');
var clean = canvas.getContext('2d');

if ( !c ) {
	alert("Your Browser doesn't support canvas");
	/* Alert message if the canvas is not supported in browser */
} else {

	drawDefaultFrame();
	/* Initially a default frame is made on canvas screen */

	function drawDefaultFrame() {
		horizontalBoxes = 15;
		verticalBoxes = 15;
		division = 15;
		
		/* In the default frame the framewidth and frameheight are taken as 15 and 15 respectively */

		c.clearRect(0, 0, 575, 575);
		console.log(canvas);
		number.fillStyle = "white";

		sx = 0;
		sy = 0;
		for (var i = 0; i <= horizontalBoxes; i++) {
			if (i > 0) {
				number.fillText(i - 1, sx, 15);
				number.fillText(i - 1, sx, 40 + sy);
			}
			c.beginPath();
			sy = 0;
			c.moveTo(sx + 25, sy + 25);
			sy = verticalBoxes*(500 / division);
			c.lineTo(sx + 25, sy + 25);
			c.strokeStyle = "white";
			c.stroke();
			sx = sx + 500 / division;
		}
		
		sx = 0;
		sy = 0;
		sx = horizontalBoxes*(500 / division);
		for ( i = verticalBoxes; i >= 0; i--) {
			if (i > 0) {
				number.fillText(i - 1, 32 + sx, sy + 40);
				number.fillText(i - 1, 5, sy + 40);
			}
			c.beginPath();
			sx = 0;
			c.moveTo(sx + 25, sy + 25);
			sx = horizontalBoxes*(500 / division);
			c.lineTo(sx + 25, sy + 25);
			c.strokeStyle = "white";
			c.stroke();
			sy = sy + 500 / division;
		}
	}

	function drawFrame() {
		c.clearRect(0, 0, 575, 575);
		console.log(canvas);

		horizontalBoxes = Number(document.getElementById('frameWidth').value);
		verticalBoxes = Number(document.getElementById('frameHeight').value);
		memoryWidth = horizontalBoxes;
		memoryHeight = verticalBoxes;

		if ( horizontalBoxes >= verticalBoxes ) {
			division = horizontalBoxes;
		} else if ( verticalBoxes > horizontalBoxes ) {
			division = verticalBoxes;
		}

		if (verticalBoxes > 25 || horizontalBoxes > 25) {
			alert("Max width = 25 and max height = 25");
			
			drawDefaultFrame();
			document.getElementById('frameWidth').value = 15;
			document.getElementById('frameHeight').value = 15;
		} else if (horizontalBoxes <= 0 || verticalBoxes <= 0) {
			alert("Frame width and height cannot be negative or zero");
			
			drawDefaultFrame();
			document.getElementById('frameWidth').value = 15;
			document.getElementById('frameHeight').value = 15;
		} else if ( Number.isInteger(horizontalBoxes) === false || Number.isInteger(verticalBoxes) === false) {
			alert("Enter the frame width and height as positive integer");
			
			drawDefaultFrame();
			document.getElementById('frameWidth').value = 15;
			document.getElementById('frameHeight').value = 15;
		} else {
			/* If the inputs of user is correct and is satisfied then this else part will be executed */  
			c.clearRect(0, 0, 575, 575);
			console.log(canvas);
			number.fillStyle = "white";

			sx = 0;
			sy = 0;
			for (var i = 0; i <= horizontalBoxes; i++) {
				if (i > 0) {
					number.fillText(i - 1, sx, 15);
					number.fillText(i - 1, sx, 40 + sy);
				}
				c.beginPath();
				sy = 0;
				c.moveTo(sx + 25, sy + 25);
				sy = verticalBoxes*(500 / division);
				c.lineTo(sx + 25, sy + 25);
				c.strokeStyle = "white";
				c.stroke();
				sx = sx + 500 / division;
			}
			
			sx = 0;
			sy = 0;
			sx = horizontalBoxes*(500 / division);
			for ( i = verticalBoxes; i >= 0; i--) {
				if (i > 0) {
					number.fillText(i - 1, 32 + sx, sy + 40);
					number.fillText(i - 1, 5, sy + 40);
				}
				c.beginPath();
				sx = 0;
				c.moveTo(sx + 25, sy + 25);
				sx = horizontalBoxes*(500 / division);
				c.lineTo(sx + 25, sy + 25);
				c.strokeStyle = "white";
				c.stroke();
				sy = sy + 500 / division;
			}
			flag = 100;
		}
		
		if ( flag == 100 ) {
			show_hide_content();
			/*	If the flag == 100 then it will indicate that the user has entered a correct input
				When the input is correct then the show_hind_content function will be called */
		}

		function show_hide_content() {
			/*	If firstInputs are shown previously then firstInputs block will be hidden 
				and secondInputs block will displayed and vis versa */  
			var content1 = document.getElementById('forFirstInputs');
			var content2 = document.getElementById('forSecondInputs');
  			if (content1.style.display === "none") {
    			content1.style.display = "block";
    			content2.style.display = "none";
  			} else {
    			content2.style.display = "block";
    			content1.style.display = "none";
  			}
		}
		console.log(canvas);	
	}

	function change_content() {
		var content1 = document.getElementById('forFirstInputs');
		var content2 = document.getElementById('forSecondInputs');
		var content3 = document.getElementById('forThirdInputs');
		
		index = 0;

		if (content2.style.display === "none") {
    		c.clearRect(0, 0, 575, 575);
    		document.getElementById('frameWidth').value = memoryWidth;
    		document.getElementById('frameHeight').value = memoryHeight;
    		drawFrame();

    		content2.style.display = "block";
    		content3.style.display = "none";
    		content1.style.display = "none";
  		} else {
  			content1.style.display = "none";
    		content2.style.display = "none";
    		content3.style.display = "block";
  		}	
	}

	function coordinatesEntered() {
		startX = Number(document.getElementById('startX').value);
		startY = Number(document.getElementById('startY').value);

		endX = Number(document.getElementById('endX').value);
		endY = Number(document.getElementById('endY').value);

		temp = 0;

		if ( startX > endX ) {
			/* For swaping x coordinates of starting and ending points */
			temp = startX;
			startX = endX;
			endX = temp;
			/* For swaping y coordinates of starting and ending points */
			temp = startY;
			startY = endY;
			endY = temp;
		}

		if ( startX == endX && startY > endY ) {
			/* For swaping y coordinates of starting and ending points */
			temp = startY;
			startY = endY;
			endY = temp;
		}

		if ( (Number.isInteger(startX) === false || Number.isInteger(startY) === false) || (Number.isInteger(endX) === false || Number.isInteger(endY) === false) ) {
			alert("The coordinates of starting and ending points must be integer values according to the experiment");
		} else if ( startX < 0 || startY < 0 || endX < 0 || endY < 0 ) {
			alert("The coordinates of starting and ending points must be positive value according to the experiment");
		} else if ( (startX >= horizontalBoxes || endX >= horizontalBoxes) || (startY >= verticalBoxes || endY >= verticalBoxes) ) {
			alert("The coordinates of starting and ending points must be less than the frame-height and frame-width according to the experiment");
		} else {
			change_content();	

			pointX1 = startX;
			pointY1 = startY;
			pointX2 = endX;
			pointY2 = endY;

			intercept = pointY1 - ( ( (pointY2 - pointY1) / (pointX2 - pointX1) )*pointX1 );

			numX = [];
			numY = [];
			numGrayX = [];
			numGrayY = [];

			arrayX = [];
			arrayY = [];
			
			j = 0;
			
			grayX = [];
			grayY = [];
			
			toggle = "red";

			/* Saving the entered coordinates into another variable for filling the box with color */
			var xbox = startX;
			var ybox = startY;
			var x2box = endX;
			var y2box = endY;

			/* The starting and ending coordinates are copied into (x1, y1) and (x2, y2) respectively */
			var x1 = xbox;
			var y1 = ybox;
			var x2 = x2box;
			var y2 = y2box;

			specialX1 = startX;
			specialY1 = startY;
			specialX2 = endX;
			specialY2 = endY;

			startX = ( startX*( 500 / division ) ) + (250 / division);
			startY = ( startY*( 500 / division ) ) + (250 / division);
		
			endX = ( endX*( 500 / division ) ) + (250 / division);
			endY = ( endY*( 500 / division ) ) + (250 / division);

			startY = (verticalBoxes*(500 / division)) - startY;
			endY = (verticalBoxes*(500 / division)) - endY;

			var box = canvas.getContext('2d');
			/* For filling the box ( pixel ) with color */
			box.beginPath();
			box.fillStyle = "yellow";
			box.fillRect( (xbox*(500/division)) + 25, ((verticalBoxes - 1)*(500/division)) - (ybox*(500/division)) + 25, 500 / division, 500 / division );

			var dot = canvas.getContext('2d');
			/* For adding a blue dot at the starting point of the Rasterization line */
			dot.beginPath();
			dot.arc(startX + 25, startY + 25, 2.5, 0, Math.PI * 2, false);
			dot.fillStyle = "blue";
			dot.fill();
			/* For adding a white dot at the starting point of the Rasterization line */
			dot.beginPath();
			dot.arc(endX + 25, endY + 25, 2.5, 0, Math.PI * 2, false);
			dot.fillStyle = "blue";
			dot.fill();

			/* The slope of the line is calculated and stored in the vairable m */
			m = ( y2 - y1 ) / ( x2 - x1 ); 

			deltaX = 0;
			deltaY = 0;
			p = 0;
			indicator = 0;

			/* Bresenham's Line Rasterization Algorithm */
			if ( m <= 1 && m >= 0 ) {
				/* If slope of the line belongs to [0, 1] */
				deltaX = x2 - x1;
				deltaY = y2 - y1;
				p = 2*deltaY - deltaX;
				
				while( x1 <= x2 ) {
					/*Storing the values into array */
					arrayX[j] = (x1*(500/division)) + 25;
					arrayY[j] = ((verticalBoxes - 1)*(500/division)) - (y1*(500/division)) + 25;
					numX[j] = x1;
					numY[j] = y1;
					indicator = 0;
					x1 += 1;
					
					if ( p < 0 ) {
						p = p + 2*deltaY;
						indicator = -99;
					} else {
						p = p + (2*deltaY) - (2*deltaX);
						y1 += 1;
						indicator = 99;
					}
					
					grayX[j] = (x1*(500/division)) + 25;
					grayY[j] = ((verticalBoxes - 1)*(500/division)) - ((y1-1)*(500/division)) + 25;
					numGrayX[j] = x1;
					numGrayY[j] = y1 - 1;

					j += 1;
				}
			} else if ( m > 1 || m == -Infinity ) {
				/* If slope of the line belongs to (1, infinite) */
				/* Or if the slope of the line is -Infinity */
				deltaX = x2 - x1;
				deltaY = y2 - y1;
				p = 2*deltaX - deltaY;

				while( y1 <= y2 ) {
					/*Storing the values into array */
					arrayX[j] = (x1*(500/division)) + 25;
					arrayY[j] = ((verticalBoxes - 1)*(500/division)) - (y1*(500/division)) + 25;
					numX[j] = x1;
					numY[j] = y1;
					indicator = 0;
					y1 += 1;
					
					if ( p < 0 ) {
						p = p + 2*deltaX;
						indicator = -99;
					} else {
						p = p + (2*deltaX) - (2*deltaY);
						x1 += 1;
						indicator = 99;
					}

					if ( indicator == 99 ) {
						grayX[j] = ((x1-1)*(500/division)) + 25;
						grayY[j] = ((verticalBoxes - 1)*(500/division)) - (y1*(500/division)) + 25;
						numGrayX[j] = x1 - 1;
						numGrayY[j] = y1;
					}

					if ( indicator == -99 ) {
						grayX[j] = ((x1+1)*(500/division)) + 25;
						grayY[j] = ((verticalBoxes - 1)*(500/division)) - (y1*(500/division)) + 25;
						numGrayX[j] = x1 + 1;
						numGrayY[j] = y1;
					}					
					
					j += 1;
				}
			} else if ( m < 0 && m >= -1) {
				/* If slope of the line belongs to [-1, 0) */
				deltaX = x2 - x1;
				deltaY = y1 - y2;
				p = 2*deltaY - deltaX;
				
				while( x1 <= x2 ) {
					/*Storing the values into array */
					arrayX[j] = (x1*(500/division)) + 25;
					arrayY[j] = ((verticalBoxes - 1)*(500/division)) - (y1*(500/division)) + 25;
					numX[j] = x1;
					numY[j] = y1;
					indicator = 0;
					x1 += 1;
					
					if ( p < 0 ) {
						p = p + 2*deltaY;
						indicator = -99;
					} else {
						p = p + (2*deltaY) - (2*deltaX);
						y1 -= 1;
						indicator = 99;
					}

					grayX[j] = (x1*(500/division)) + 25;
					grayY[j] = ((verticalBoxes - 1)*(500/division)) - ((y1+1)*(500/division)) + 25;
					numGrayX[j] = x1;
					numGrayY[j] = y1 + 1;

					j += 1;
				}
			} else if ( m < -1 ) {
				/* If slope of the line belongs to ( -infinite, -1) */
				deltaX = x2 - x1;
				deltaY = y1 - y2;
				p = 2*deltaX - deltaY;
				while( y1 >= y2 ) {
					/*Storing the values into array */
					arrayX[j] = (x1*(500/division)) + 25;
					arrayY[j] = ((verticalBoxes - 1)*(500/division)) - (y1*(500/division)) + 25;
					numX[j] = x1;
					numY[j] = y1;
					indicator = 0;
					y1 -= 1;
					
					if ( p < 0 ) {
						p = p + 2*deltaX;
						indicator = -99;
					} else {
						p = p + (2*deltaX) - (2*deltaY);
						x1 += 1;
						indicator = 99;
					}

					if ( indicator == 99 ) {
						grayX[j] = ((x1-1)*(500/division)) + 25;
						grayY[j] = ((verticalBoxes - 1)*(500/division)) - (y1*(500/division)) + 25;
						numGrayX[j] = x1 - 1;
						numGrayY[j] = y1;
					}

					if ( indicator == -99 ) {
						grayX[j] = ((x1+1)*(500/division)) + 25;
						grayY[j] = ((verticalBoxes - 1)*(500/division)) - (y1*(500/division)) + 25;
						numGrayX[j] = x1 + 1;
						numGrayY[j] = y1;
					}

					j += 1;
				} 
			}

			var line = canvas.getContext('2d');
			/* For drawing the line from the starting point to the ending point */
			line.beginPath();
			line.moveTo( startX + 25, startY + 25 );
			line.strokeStyle = "white";
			line.lineTo( endX + 25, endY + 25);
			line.stroke();

			document.getElementById('pointDecision').innerHTML = "Point in consideration";
			document.getElementById('pointDecision').style.color = "yellow";

			document.getElementById('details').innerHTML = "("+numX[0]+","+numY[0]+")";
			document.getElementById('details').style.color = "yellow";

			document.getElementById('lineEquation').innerHTML = "";
			document.getElementById('extraDetails1').innerHTML = "";
			document.getElementById('extraDetails2').innerHTML = "";
			
			if ( ( specialX1 == specialX2 ) && ( specialY1 == specialY2 ) ) {
				document.getElementById('pointDecision').innerHTML = "Point in consideration";
				document.getElementById('pointDecision').style.color = "yellow";
				document.getElementById('details').innerHTML = "("+specialX1+","+specialY1+")";
				document.getElementById('details').style.color = "yellow";
			}				
		}
	}
}

index = 0;

function nextIteration() {
	box = canvas.getContext('2d');
	grayBox = canvas.getContext('2d');
	
	if ( ( specialX1 == specialX2 ) && ( specialY1 == specialY2 ) ) {
		box.beginPath();
		box.fillStyle = 'red';
		box.fillRect( (specialX1*(500/division)) + 25, ((verticalBoxes - 1)*(500/division)) - (specialY1*(500/division)) + 25, 500 / division, 500 / division);
		
		document.getElementById('pointDecision').innerHTML = "Point Decided";
		document.getElementById('pointDecision').style.color = "red";
		
		document.getElementById('details').innerHTML = "("+specialX1+","+specialY1+")";
		document.getElementById('details').style.color = "red";
		
		document.getElementById('lineEquation').innerHTML = "From the input is a point x = "+specialX1+" ,y = "+specialY1;
		
		toggle = "yellow";
		alert("Line Rasterized");

		drawAgainAgain();

		return;
	}

	if ( index < j ) {
		
		if ( toggle == "red" ) {	
			
			grayBox.beginPath();
			grayBox.fillStyle = "gray";
			grayBox.fillRect( grayX[index - 1], grayY[index - 1], 500 / division, 500 / division );

			box.beginPath();
			box.fillStyle = 'red';
			box.fillRect( arrayX[index], arrayY[index], 500 / division, 500 / division );
			
			document.getElementById('pointDecision').innerHTML = "Point Decided";
			document.getElementById('pointDecision').style.color = "red";

			document.getElementById('details').innerHTML = "("+numX[index]+","+numY[index]+")";
			document.getElementById('details').style.color = "red";

			var present_y = m*numX[index] + intercept;
			var present_x = ( numY[index] - intercept )/m;

			if ( numX[index] == numGrayX[index - 1] ) {

				var y1_diff = present_y - numY[index];
				var y2_diff = present_y - numGrayY[index - 1];

				if ( y1_diff < 0 ) {
					y1_diff = -1*y1_diff;
				}

				if ( y2_diff < 0 ) {
					y2_diff = -1*y2_diff;
				}

				if ( index != 0 ) {
					document.getElementById('extraDetails1').innerHTML = "y_diff for y = "+numY[index]+" is "+y1_diff.toFixed(2);
					document.getElementById('extraDetails2').innerHTML = "y_diff for y = "+numGrayY[index - 1]+" is "+y2_diff.toFixed(2);
				}
			}

			if ( numY[index] == numGrayY[index - 1] ) {

				var x1_diff = present_x - numX[index];
				var x2_diff = present_x - numGrayX[index - 1];

				if ( x1_diff < 0 ) {
					x1_diff = -1*x1_diff;
				}

				if ( x2_diff < 0 ) {
					x2_diff = -1*x2_diff;
				}

				if ( index != 0 ) {
					document.getElementById('extraDetails1').innerHTML = "x_diff for x = "+numX[index]+" is "+x1_diff.toFixed(2);
					document.getElementById('extraDetails2').innerHTML = "x_diff for x = "+numGrayX[index - 1]+" is "+x2_diff.toFixed(2);
				}
			}

			document.getElementById('lineEquation').innerHTML = "From the equation of the line y = "+m.toFixed(2)+"x + "+intercept.toFixed(2)+" at x = "+present_x.toFixed(2)+" ,y = "+present_y.toFixed(2);

			toggle = "yellow";
		
		} else if ( toggle == "yellow" ) {
			
			if ( index > 0 ) {
				grayBox.beginPath();
				grayBox.clearRect( grayX[index - 1], grayY[index - 1], 500 / division, 500 / division );
			}

			document.getElementById('lineEquation').innerHTML = "";
			document.getElementById('extraDetails1').innerHTML = "";
			document.getElementById('extraDetails2').innerHTML = "";

			if ( index < j - 1 ) {
				box.fillStyle = "rgba(208, 196, 0, 0.88)";
				box.fillRect( arrayX[index + 1], arrayY[index + 1], 500 / division, 500 / division );
				
				grayBox.beginPath();
				grayBox.fillStyle = "rgba(208, 196, 0, 0.88)";
				grayBox.fillRect( grayX[index], grayY[index], 500 / division, 500 / division );
			
				document.getElementById('pointDecision').innerHTML = "Points in consideration";
				document.getElementById('pointDecision').style.color = "yellow";

				document.getElementById('details').innerHTML = "("+numX[index + 1]+","+numY[index + 1]+")"+" and "+"("+numGrayX[index]+","+numGrayY[index]+")";
				document.getElementById('details').style.color = "yellow";
			} else {
				document.getElementById('pointDecision').innerHTML = "Line Rasterized";
				document.getElementById('pointDecision').style.color = "red";

				document.getElementById('details').innerHTML = "";
			}

			toggle = "red";
			index += 1;
		}
	} else {
		alert("Line is Rasterized");
	}

	clean = canvas.getContext('2d');
	clean.beginPath();
	clean.clearRect(0, 0, 25, 550);
	clean.clearRect(0, 0, 550, 25);
	clean.clearRect(525, 0, 25, 550);
	clean.clearRect(0, 525, 550, 25);

	drawAgainAgain();
}

function previousIteration() {
	box = canvas.getContext('2d');
	grayBox = canvas.getContext('2d');
	
	if ( ( specialX1 == specialX2 ) && ( specialY1 == specialY2 ) ) {
		box.beginPath();
		box.fillStyle = 'yellow';
		box.fillRect( (specialX1*(500/division)) + 25, ((verticalBoxes - 1)*(500/division)) - (specialY1*(500/division)) + 25, 500 / division, 500 / division);
		
		document.getElementById('pointDecision').innerHTML = "Points in consideration";
		document.getElementById('pointDecision').style.color = "yellow";
		
		document.getElementById('details').innerHTML = "("+specialX1+","+specialY1+")";
		document.getElementById('details').style.color = "yellow";
		
		document.getElementById('lineEquation').innerHTML = "";
		
		toggle = "red";

		drawAgainAgain();
		return;
	}

	if ( index >= 0 ) {
		if ( toggle == "yellow" ) {
			box.beginPath();
			box.fillStyle = "rgba(208, 196, 0, 0.88)";
			box.fillRect( arrayX[index], arrayY[index], 500 / division, 500 / division );

			document.getElementById('lineEquation').innerHTML = "";
			document.getElementById('extraDetails1').innerHTML = "";
			document.getElementById('extraDetails2').innerHTML = "";

			if ( index > 0 ) {
				grayBox.beginPath();
				grayBox.fillStyle = "rgba(208, 196, 0, 0.88)";
				grayBox.fillRect( grayX[index - 1], grayY[index - 1], 500 / division, 500 / division );
				
				document.getElementById('pointDecision').innerHTML = "Points in consideration";
				document.getElementById('pointDecision').style.color = "yellow";

				document.getElementById('details').innerHTML = "("+numX[index]+","+numY[index]+")"+" and "+"("+numGrayX[index - 1]+","+numGrayY[index - 1]+")";
				document.getElementById('details').style.color = "yellow";
			} else {
				document.getElementById('pointDecision').innerHTML = "Points in consideration";
				document.getElementById('pointDecision').style.color = "yellow";

				document.getElementById('details').innerHTML = "("+numX[index]+","+numY[index]+")";
				document.getElementById('details').style.color = "yellow";
			}

			toggle = "red";
		
		} else if ( toggle == "red" ) {
			index -= 1;

			if ( index >= 0 ) {
				box.beginPath();
				box.fillStyle = "rgba(208, 196, 0, 0.88)";
				box.clearRect( arrayX[index + 1], arrayY[index + 1], 500 / division, 500 / division );
				
				grayBox.beginPath();
				grayBox.fillStyle = "rgba(208, 196, 0, 0.88)";
				grayBox.clearRect( grayX[index], grayY[index], 500 / division, 500 / division );
				
				document.getElementById('pointDecision').innerHTML = "Point Decided";
				document.getElementById('pointDecision').style.color = "red";

				document.getElementById('details').innerHTML = "("+numX[index]+","+numY[index]+")";
				document.getElementById('details').style.color = "red";

				var present_y = m*numX[index] + intercept;
				var present_x = ( numY[index] - intercept )/m;

				if ( numX[index] == numGrayX[index - 1] ) {

					var y1_diff = present_y - numY[index]; 
					var y2_diff = present_y - numGrayY[index - 1];

					if ( y1_diff < 0 ) {
						y1_diff = -1*y1_diff;
					}

					if ( y2_diff < 0 ) {
						y2_diff = -1*y2_diff;
					}

					if ( index != 0 ) {
						document.getElementById('extraDetails1').innerHTML = "y_diff for y = "+numY[index]+" is "+y1_diff.toFixed(2);
						document.getElementById('extraDetails2').innerHTML = "y_diff for y = "+numGrayY[index - 1]+" is "+y2_diff.toFixed(2);
					}
				}

				if ( numY[index] == numGrayY[index - 1] ) {

					var x1_diff = present_x - numX[index]; 
					var x2_diff = present_x - numGrayX[index - 1];

					if ( x1_diff < 0 ) {
						x1_diff = -1*x1_diff;
					}

					if ( x2_diff < 0 ) {
						x2_diff = -1*x2_diff;
					}

					if ( index != 0 ) {
						document.getElementById('extraDetails1').innerHTML = "x_diff for x = "+numX[index]+" is "+x1_diff.toFixed(2);
						document.getElementById('extraDetails2').innerHTML = "x_diff for x = "+numGrayX[index - 1]+" is "+x2_diff.toFixed(2);
					}
				}

				document.getElementById('lineEquation').innerHTML = "From the equation of the line y = "+m.toFixed(2)+"x + "+intercept.toFixed(2)+" at x = "+present_x.toFixed(2)+" ,y = "+present_y.toFixed(2);

				toggle = "yellow";
			}

		}
	} else {
		alert("Their is no previous iteration");
		index = 0;
	}
	
	clean = canvas.getContext('2d');
	clean.beginPath();
	clean.clearRect(0, 0, 25, 550);
	clean.clearRect(0, 0, 550, 25);
	clean.clearRect(525, 0, 25, 550);
	clean.clearRect(0, 525, 550, 25);

	drawAgainAgain();
}

function drawAgainAgain() {
	/* Re-Drawing the frame so that lines are clearly visible */ 
	horizontalBoxes = memoryWidth;
	verticalBoxes = memoryHeight;
			
	if ( horizontalBoxes >= verticalBoxes ) {
		division = horizontalBoxes;
	} else if ( verticalBoxes > horizontalBoxes ) {
		division = verticalBoxes;
	}

	number.fillStyle = "white";

	sx = 0;
	sy = 0;
	for (var i = 0; i <= horizontalBoxes; i++) {
		if (i > 0) {
			number.fillText(i - 1, sx, 15);
			number.fillText(i - 1, sx, 40 + sy);
		}
		c.beginPath();
		sy = 0;
		c.moveTo(sx + 25, sy + 25);
		sy = verticalBoxes*(500 / division);
		c.lineTo(sx + 25, sy + 25);
		c.strokeStyle = "white";
		c.stroke();
		sx = sx + 500 / division;
	}
			
	sx = 0;
	sy = 0;
	sx = horizontalBoxes*(500 / division);
	for (i = verticalBoxes; i >= 0; i--) {
		if (i > 0) {
			number.fillText(i - 1, 32 + sx, sy + 40);
			number.fillText(i - 1, 5, sy + 40);
		}
		c.beginPath();
		sx = 0;
		c.moveTo(sx + 25, sy + 25);
		sx = horizontalBoxes*(500 / division);
		c.lineTo(sx + 25, sy + 25);
		c.strokeStyle = "white";
		c.stroke();
		sy = sy + 500 / division;
	}

	var line = canvas.getContext('2d');
	/* For drawing the line from the starting point to the ending point */
	line.beginPath();
	line.moveTo( startX + 25, startY + 25 );
	line.strokeStyle = "white";
	line.lineTo( endX + 25, endY + 25);
	line.stroke();

	var dot = canvas.getContext('2d');
	/* For adding a blue dot at the starting point of the Rasterization line */
	dot.beginPath();
	dot.arc(startX + 25, startY + 25, 2.5, 0, Math.PI * 2, false);
	dot.fillStyle = "blue";
	dot.fill();
	/* For adding a white dot at the starting point of the Rasterization line */
	dot.beginPath();
	dot.arc(endX + 25, endY + 25, 2.5, 0, Math.PI * 2, false);
	dot.fillStyle = "blue";
	dot.fill();
}

function startWithDefaultValue() {
	drawDefaultFrame();

	var content1 = document.getElementById('forFirstInputs');
	var content2 = document.getElementById('forSecondInputs');
	var content3 = document.getElementById('forThirdInputs');
	var content4 = document.getElementById('forThirdDefaultInputs');

	content1.style.display = "none";
    content2.style.display = "none";
    content3.style.display = "none";
    content4.style.display = "block";

    startX = 2;
	startY = 5;

	endX = 9;
	endY = 10;

	index = 0;

	if ( startX > endX ) {
		/* For swaping x coordinates of starting and ending points */
		temp = startX;
		startX = endX;
		endX = temp;
		/* For swaping y coordinates of starting and ending points */
		temp = startY;
		startY = endY;
		endY = temp;
	}

	if ( startX == endX && startY > endY ) {
		/* For swaping y coordinates of starting and ending points */
		temp = startY;
		startY = endY;
		endY = temp;
	}

	pointX1 = startX;
	pointY1 = startY;
	pointX2 = endX;
	pointY2 = endY;

	intercept = pointY1 - ( ( (pointY2 - pointY1) / (pointX2 - pointX1) )*pointX1 );

	numX = [];
	numY = [];
	numGrayX = [];
	numGrayY = [];

	arrayX = [];
	arrayY = [];
			
	j = 0;
			
	grayX = [];
	grayY = [];
			
	toggle = "red";

	/* Saving the entered coordinates into another variable for filling the box with color */
	var xbox = startX;
	var ybox = startY;
	var x2box = endX;
	var y2box = endY;

	/* The starting and ending coordinates are copied into (x1, y1) and (x2, y2) respectively */
	var x1 = xbox;
	var y1 = ybox;
	var x2 = x2box;
	var y2 = y2box;

	startX = ( startX*( 500 / division ) ) + (250 / division);
	startY = ( startY*( 500 / division ) ) + (250 / division);
		
	endX = ( endX*( 500 / division ) ) + (250 / division);
	endY = ( endY*( 500 / division ) ) + (250 / division);

	startY = (verticalBoxes*(500 / division)) - startY;
	endY = (verticalBoxes*(500 / division)) - endY;

	var box = canvas.getContext('2d');
	/* For filling the box ( pixel ) with color */
	box.beginPath();
	box.fillStyle = "yellow";
	box.fillRect( (xbox*(500/division)) + 25, ((verticalBoxes - 1)*(500/division)) - (ybox*(500/division)) + 25, 500 / division, 500 / division );

	var dot = canvas.getContext('2d');
	/* For adding a blue dot at the starting point of the Rasterization line */
	dot.beginPath();
	dot.arc(startX + 25, startY + 25, 2.5, 0, Math.PI * 2, false);
	dot.fillStyle = "blue";
	dot.fill();
	/* For adding a white dot at the starting point of the Rasterization line */
	dot.beginPath();
	dot.arc(endX + 25, endY + 25, 2.5, 0, Math.PI * 2, false);
	dot.fillStyle = "blue";
	dot.fill();

	/* The slope of the line is calculated and stored in the vairable m */
	m = ( y2 - y1 ) / ( x2 - x1 ); 

	deltaX = 0;
	deltaY = 0;
	p = 0;
	indicator = 0;

	/* Bresenham's Line Rasterization Algorithm */
	if ( m <= 1 && m >= 0 ) {
		/* If slope of the line belongs to [0, 1] */
		deltaX = x2 - x1;
		deltaY = y2 - y1;
		p = 2*deltaY - deltaX;
				
		while( x1 <= x2 ) {
			/*Storing the values into array */
			arrayX[j] = (x1*(500/division)) + 25;
			arrayY[j] = ((verticalBoxes - 1)*(500/division)) - (y1*(500/division)) + 25;
			numX[j] = x1;
			numY[j] = y1;
			indicator = 0;
			x1 += 1;
					
			if ( p < 0 ) {
				p = p + 2*deltaY;
				indicator = -99;
			} else {
				p = p + (2*deltaY) - (2*deltaX);
				y1 += 1;
				indicator = 99;
			}
					
			grayX[j] = (x1*(500/division)) + 25;
			grayY[j] = ((verticalBoxes - 1)*(500/division)) - ((y1-1)*(500/division)) + 25;
			numGrayX[j] = x1;
			numGrayY[j] = y1 - 1;

			j += 1;
		}
	} else if ( m > 1 || m == -Infinity ) {
		/* If slope of the line belongs to (1, infinite) */
		/* Or if the slope of the line is -Infinity */
		deltaX = x2 - x1;
		deltaY = y2 - y1;
		p = 2*deltaX - deltaY;

		while( y1 <= y2 ) {
			/*Storing the values into array */
			arrayX[j] = (x1*(500/division)) + 25;
			arrayY[j] = ((verticalBoxes - 1)*(500/division)) - (y1*(500/division)) + 25;
			numX[j] = x1;
			numY[j] = y1;
			indicator = 0;
			y1 += 1;
					
			if ( p < 0 ) {
				p = p + 2*deltaX;
				indicator = -99;
			} else {
				p = p + (2*deltaX) - (2*deltaY);
				x1 += 1;
				indicator = 99;
			}

			if ( indicator == 99 ) {
				grayX[j] = ((x1-1)*(500/division)) + 25;
				grayY[j] = ((verticalBoxes - 1)*(500/division)) - (y1*(500/division)) + 25;
				numGrayX[j] = x1 - 1;
				numGrayY[j] = y1;
			}

			if ( indicator == -99 ) {
				grayX[j] = ((x1+1)*(500/division)) + 25;
				grayY[j] = ((verticalBoxes - 1)*(500/division)) - (y1*(500/division)) + 25;
				numGrayX[j] = x1 + 1;
				numGrayY[j] = y1;
			}					
					
			j += 1;
		}
	} else if ( m < 0 && m >= -1) {
		/* If slope of the line belongs to [-1, 0) */
		deltaX = x2 - x1;
		deltaY = y1 - y2;
		p = 2*deltaY - deltaX;
				
		while( x1 <= x2 ) {
			/*Storing the values into array */
			arrayX[j] = (x1*(500/division)) + 25;
			arrayY[j] = ((verticalBoxes - 1)*(500/division)) - (y1*(500/division)) + 25;
			numX[j] = x1;
			numY[j] = y1;
			indicator = 0;
			x1 += 1;
					
			if ( p < 0 ) {
				p = p + 2*deltaY;
				indicator = -99;
			} else {
				p = p + (2*deltaY) - (2*deltaX);
				y1 -= 1;
				indicator = 99;
			}

			grayX[j] = (x1*(500/division)) + 25;
			grayY[j] = ((verticalBoxes - 1)*(500/division)) - ((y1+1)*(500/division)) + 25;
			numGrayX[j] = x1;
			numGrayY[j] = y1 + 1;

			j += 1;
		}
	} else if ( m < -1 ) {
		/* If slope of the line belongs to ( -infinite, -1) */
		deltaX = x2 - x1;
		deltaY = y1 - y2;
		p = 2*deltaX - deltaY;
		while( y1 >= y2 ) {
			/*Storing the values into array */
			arrayX[j] = (x1*(500/division)) + 25;
			arrayY[j] = ((verticalBoxes - 1)*(500/division)) - (y1*(500/division)) + 25;
			numX[j] = x1;
			numY[j] = y1;
			indicator = 0;
			y1 -= 1;
					
			if ( p < 0 ) {
				p = p + 2*deltaX;
				indicator = -99;
			} else {
				p = p + (2*deltaX) - (2*deltaY);
				x1 += 1;
				indicator = 99;
			}

			if ( indicator == 99 ) {
				grayX[j] = ((x1-1)*(500/division)) + 25;
				grayY[j] = ((verticalBoxes - 1)*(500/division)) - (y1*(500/division)) + 25;
				numGrayX[j] = x1 - 1;
				numGrayY[j] = y1;
			}

			if ( indicator == -99 ) {
				grayX[j] = ((x1+1)*(500/division)) + 25;
				grayY[j] = ((verticalBoxes - 1)*(500/division)) - (y1*(500/division)) + 25;
				numGrayX[j] = x1 + 1;
				numGrayY[j] = y1;
			}

			j += 1;
		} 
	}

	var line = canvas.getContext('2d');
	/* For drawing the line from the starting point to the ending point */
	line.beginPath();
	line.moveTo( startX + 25, startY + 25 );
	line.strokeStyle = "white";
	line.lineTo( endX + 25, endY + 25);
	line.stroke();

	document.getElementById('pointDecisionDef').innerHTML = "Point in consideration";
	document.getElementById('pointDecisionDef').style.color = "yellow";

	document.getElementById('detailsDef').innerHTML = "("+numX[0]+","+numY[0]+")";
	document.getElementById('detailsDef').style.color = "yellow";

	document.getElementById('lineEquationDef').innerHTML = "";
	document.getElementById('extraDetails1Def').innerHTML = "";
	document.getElementById('extraDetails2Def').innerHTML = "";

}

// On click for BACK Button which appears on starting the experiment with default values 
function default_content() {
	drawDefaultFrame();

	var content1 = document.getElementById('forFirstInputs');
	var content2 = document.getElementById('forSecondInputs');
	var content3 = document.getElementById('forThirdInputs');
	var content4 = document.getElementById('forThirdDefaultInputs');

	content1.style.display = "block";
    content2.style.display = "none";
    content3.style.display = "none";
    content4.style.display = "none";	
} 

// NEXT Iteration function for Default values
function nextIterationDef() {
	box = canvas.getContext('2d');
	grayBox = canvas.getContext('2d');
	
	if ( index < j ) {
		
		if ( toggle == "red" ) {	
			
			grayBox.beginPath();
			grayBox.fillStyle = "gray";
			grayBox.fillRect( grayX[index - 1], grayY[index - 1], 500 / division, 500 / division );

			box.beginPath();
			box.fillStyle = 'red';
			box.fillRect( arrayX[index], arrayY[index], 500 / division, 500 / division );
			
			document.getElementById('pointDecisionDef').innerHTML = "Point Decided";
			document.getElementById('pointDecisionDef').style.color = "red";

			document.getElementById('detailsDef').innerHTML = "("+numX[index]+","+numY[index]+")";
			document.getElementById('detailsDef').style.color = "red";

			var present_y = m*numX[index] + intercept;
			var present_x = ( numY[index] - intercept )/m;

			if ( numX[index] == numGrayX[index - 1] ) {

				var y1_diff = present_y - numY[index];
				var y2_diff = present_y - numGrayY[index - 1];

				if ( y1_diff < 0 ) {
					y1_diff = -1*y1_diff;
				}

				if ( y2_diff < 0 ) {
					y2_diff = -1*y2_diff;
				}

				if ( index != 0 ) {
					document.getElementById('extraDetails1Def').innerHTML = "y_diff for y = "+numY[index]+" is "+y1_diff.toFixed(2);
					document.getElementById('extraDetails2Def').innerHTML = "y_diff for y = "+numGrayY[index - 1]+" is "+y2_diff.toFixed(2);
				}
			}

			if ( numY[index] == numGrayY[index - 1] ) {

				var x1_diff = present_x - numX[index];
				var x2_diff = present_x - numGrayX[index - 1];

				if ( x1_diff < 0 ) {
					x1_diff = -1*x1_diff;
				}

				if ( x2_diff < 0 ) {
					x2_diff = -1*x2_diff;
				}

				if ( index != 0 ) {
					document.getElementById('extraDetails1Def').innerHTML = "x_diff for x = "+numX[index]+" is "+x1_diff.toFixed(2);
					document.getElementById('extraDetails2Def').innerHTML = "x_diff for x = "+numGrayX[index - 1]+" is "+x2_diff.toFixed(2);
				}
			}

			document.getElementById('lineEquationDef').innerHTML = "From the equation of the line y = "+m.toFixed(2)+"x + "+intercept.toFixed(2)+" at x = "+present_x.toFixed(2)+" ,y = "+present_y.toFixed(2);

			toggle = "yellow";
		
		} else if ( toggle == "yellow" ) {
			
			if ( index > 0 ) {
				grayBox.beginPath();
				grayBox.clearRect( grayX[index - 1], grayY[index - 1], 500 / division, 500 / division );
			}

			document.getElementById('lineEquationDef').innerHTML = "";
			document.getElementById('extraDetails1Def').innerHTML = "";
			document.getElementById('extraDetails2Def').innerHTML = "";

			if ( index < j - 1 ) {
				box.fillStyle = "rgba(208, 196, 0, 0.88)";
				box.fillRect( arrayX[index + 1], arrayY[index + 1], 500 / division, 500 / division );
				
				grayBox.beginPath();
				grayBox.fillStyle = "rgba(208, 196, 0, 0.88)";
				grayBox.fillRect( grayX[index], grayY[index], 500 / division, 500 / division );
			
				document.getElementById('pointDecisionDef').innerHTML = "Points in consideration";
				document.getElementById('pointDecisionDef').style.color = "yellow";

				document.getElementById('detailsDef').innerHTML = "("+numX[index + 1]+","+numY[index + 1]+")"+" and "+"("+numGrayX[index]+","+numGrayY[index]+")";
				document.getElementById('detailsDef').style.color = "yellow";
			} else {
				document.getElementById('pointDecisionDef').innerHTML = "Line Rasterized";
				document.getElementById('pointDecisionDef').style.color = "red";

				document.getElementById('detailsDef').innerHTML = "";
			}

			toggle = "red";
			index += 1;
		}
	} else {
		alert("Line is Rasterized");
	}

	clean = canvas.getContext('2d');
	clean.beginPath();
	clean.clearRect(0, 0, 25, 550);
	clean.clearRect(0, 0, 550, 25);
	clean.clearRect(525, 0, 25, 550);
	clean.clearRect(0, 525, 550, 25);

	memoryHeight = 15;
	memoryWidth = 15;
	drawAgainAgain();
}

// PREVIOUS Iteration function for default values
function previousIterationDef() {
	box = canvas.getContext('2d');
	grayBox = canvas.getContext('2d');
	
	if ( index >= 0 ) {
		if ( toggle == "yellow" ) {
			box.beginPath();
			box.fillStyle = "rgba(208, 196, 0, 0.88)";
			box.fillRect( arrayX[index], arrayY[index], 500 / division, 500 / division );

			document.getElementById('lineEquationDef').innerHTML = "";
			document.getElementById('extraDetails1Def').innerHTML = "";
			document.getElementById('extraDetails2Def').innerHTML = "";

			if ( index > 0 ) {
				grayBox.beginPath();
				grayBox.fillStyle = "rgba(208, 196, 0, 0.88)";
				grayBox.fillRect( grayX[index - 1], grayY[index - 1], 500 / division, 500 / division );
				
				document.getElementById('pointDecisionDef').innerHTML = "Points in consideration";
				document.getElementById('pointDecisionDef').style.color = "yellow";

				document.getElementById('detailsDef').innerHTML = "("+numX[index]+","+numY[index]+")"+" and "+"("+numGrayX[index - 1]+","+numGrayY[index - 1]+")";
				document.getElementById('detailsDef').style.color = "yellow";
			} else {
				document.getElementById('pointDecisionDef').innerHTML = "Points in consideration";
				document.getElementById('pointDecisionDef').style.color = "yellow";

				document.getElementById('detailsDef').innerHTML = "("+numX[index]+","+numY[index]+")";
				document.getElementById('detailsDef').style.color = "yellow";
			}

			toggle = "red";
		
		} else if ( toggle == "red" ) {
			index -= 1;

			if ( index >= 0 ) {
				box.beginPath();
				box.fillStyle = "rgba(208, 196, 0, 0.88)";
				box.clearRect( arrayX[index + 1], arrayY[index + 1], 500 / division, 500 / division );
				
				grayBox.beginPath();
				grayBox.fillStyle = "rgba(208, 196, 0, 0.88)";
				grayBox.clearRect( grayX[index], grayY[index], 500 / division, 500 / division );
				
				document.getElementById('pointDecisionDef').innerHTML = "Point Decided";
				document.getElementById('pointDecisionDef').style.color = "red";

				document.getElementById('detailsDef').innerHTML = "("+numX[index]+","+numY[index]+")";
				document.getElementById('detailsDef').style.color = "red";

				var present_y = m*numX[index] + intercept;
				var present_x = ( numY[index] - intercept )/m;

				if ( numX[index] == numGrayX[index - 1] ) {

					var y1_diff = present_y - numY[index]; 
					var y2_diff = present_y - numGrayY[index - 1];

					if ( y1_diff < 0 ) {
						y1_diff = -1*y1_diff;
					}

					if ( y2_diff < 0 ) {
						y2_diff = -1*y2_diff;
					}

					if ( index != 0 ) {
						document.getElementById('extraDetails1Def').innerHTML = "y_diff for y = "+numY[index]+" is "+y1_diff.toFixed(2);
						document.getElementById('extraDetails2Def').innerHTML = "y_diff for y = "+numGrayY[index - 1]+" is "+y2_diff.toFixed(2);
					}
				}

				if ( numY[index] == numGrayY[index - 1] ) {

					var x1_diff = present_x - numX[index]; 
					var x2_diff = present_x - numGrayX[index - 1];

					if ( x1_diff < 0 ) {
						x1_diff = -1*x1_diff;
					}

					if ( x2_diff < 0 ) {
						x2_diff = -1*x2_diff;
					}

					if ( index != 0 ) {
						document.getElementById('extraDetails1Def').innerHTML = "x_diff for x = "+numX[index]+" is "+x1_diff.toFixed(2);
						document.getElementById('extraDetails2Def').innerHTML = "x_diff for x = "+numGrayX[index - 1]+" is "+x2_diff.toFixed(2);
					}
				}

				document.getElementById('lineEquationDef').innerHTML = "From the equation of the line y = "+m.toFixed(2)+"x + "+intercept.toFixed(2)+" at x = "+present_x.toFixed(2)+" ,y = "+present_y.toFixed(2);

				toggle = "yellow";
			}

		}
	} else {
		alert("Their is no previous iteration");
		index = 0;
	}
	
	clean = canvas.getContext('2d');
	clean.beginPath();
	clean.clearRect(0, 0, 25, 550);
	clean.clearRect(0, 0, 550, 25);
	clean.clearRect(525, 0, 25, 550);
	clean.clearRect(0, 525, 550, 25);

	memoryWidth = 15;
	memoryHeight = 15;
	drawAgainAgain();
}



