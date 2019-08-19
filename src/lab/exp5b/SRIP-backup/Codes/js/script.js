var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera( 75, (0.62*window.innerWidth) / (0.9*window.innerHeight), 0.001, 100000 );

var camera2 = new THREE.OrthographicCamera(	window.innerWidth / -900, 
											window.innerWidth / 900, 
											window.innerHeight / 800, 
											window.innerHeight / -800,
											0.01,
											10000 );


var renderer = new THREE.WebGLRenderer();
var heightScreen = 0.9*window.innerHeight;
var widthScreen = 0.62*window.innerWidth;
renderer.setSize( widthScreen, heightScreen);
document.body.appendChild( renderer.domElement );

window.addEventListener( 'resize' , function () {
	var width = 0.62*window.innerWidth;
	var height = 0.9*window.innerHeight;
	renderer.setSize( width, height);
	camera.aspect = width / height;
	camera.updateProjectionMatrix();
});

controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.maxPolarAngle = Math.PI / 2;
controls.maxAzimuthAngle = Math.PI / 2;
controls.enableKeys = true;

function camera2D() {
	var condition = document.getElementById('2DCamera').checked;
	if( condition == true) {
		scene.remove(camera2);
		scene.add(camera);
		controls = new THREE.OrbitControls(camera, renderer.domElement);
		controls.enableRotate = true;
		controls.maxPolarAngle = Math.PI / 2;
		controls.maxAzimuthAngle = Math.PI / 2;
		camera.position.set(0.5,-0.25,2.2);
		controls.enableKeys = true;
		camera.rotation.y = Math.PI / 6;
		camera.rotation.x = -Math.PI / 10;
		camera.rotation.z = Math.PI / 16;
		camera.position.x = 1.25;
		camera.position.y = 0.5;
		camera.position.z = 2.2;
		light.position.set( 0, 0.2, -0.5 );
	} else {
		scene.remove(camera);
		scene.add(camera2);
		controls = new THREE.OrbitControls(camera2, renderer.domElement);
		camera2.position.set(0,0,2.2);
		controls.maxPolarAngle = Math.PI / 2;
		controls.maxAzimuthAngle = 0;
		controls.enableKeys = true;
		controls.enableRotate = false;
		camera2.rotation.x = 0;
		camera2.rotation.y = 0;
		camera2.rotation.z = 0;
	}
}

// create the shape
var geometry = new THREE.BoxGeometry(0.1, 0.4, 0.1);
var geometry2 = new THREE.BoxGeometry(0.7, 0.1, 0.1);
var geometry3 = new THREE.BoxGeometry(0.4, 0.1, 0.4);
// create a material, color, or image structure
var material = new THREE.MeshLambertMaterial( { color: 0x099556, flatShading: true, wireframe: false} );
			
var shoulderElbow = new THREE.Mesh( geometry, material);
var elbowForearm = new THREE.Mesh( geometry2, material);
var wristPalm = new THREE.Mesh( geometry3, material);
			
scene.add( shoulderElbow, elbowForearm, wristPalm);

//To change the background color of the scene
scene.background = new THREE.Color( 0x4F4F4F);

//To set the position of objects,camera and lightSource		
shoulderElbow.position.set(0.05,-0.2,0);
elbowForearm.position.set(0.35,-0.35,0);
wristPalm.position.set(0.9,-0.35,0);

// Making the sphers for fixing attaching at the vertices
var sg = new THREE.SphereGeometry( 0.008, 32, 32 );
var sm = new THREE.MeshBasicMaterial( {color: 0xffffff} );
var s1 = new THREE.Mesh( sg, sm );
var s2 = new THREE.Mesh( sg, sm );
var s3 = new THREE.Mesh( sg, sm );
var s4 = new THREE.Mesh( sg, sm );
var s5 = new THREE.Mesh( sg, sm );
var s6 = new THREE.Mesh( sg, sm );
var s7 = new THREE.Mesh( sg, sm );
var s8 = new THREE.Mesh( sg, sm );
var s9 = new THREE.Mesh( sg, sm );
var s10 = new THREE.Mesh( sg, sm );
var s11 = new THREE.Mesh( sg, sm );
var s12 = new THREE.Mesh( sg, sm );
var s13 = new THREE.Mesh( sg, sm );
var s14 = new THREE.Mesh( sg, sm );
var s15 = new THREE.Mesh( sg, sm );
var s16 = new THREE.Mesh( sg, sm );
var s17 = new THREE.Mesh( sg, sm );
var s18 = new THREE.Mesh( sg, sm );

function lockV() {
	var condition = document.getElementById('lockVertices').checked;
	if( condition == true ) {
		shoulderElbow.position.set(0.05,-0.2,0);
		elbowForearm.position.set(0.35,-0.35,0);
		wristPalm.position.set(0.9,-0.35,0);
		
		s1.position.set(0.7, -0.3, 0.2);
		s2.position.set(1.1, -0.3, 0.2);
		s3.position.set(1.1, -0.3, -0.2);
		s4.position.set(0.7, -0.3, -0.2);
		s5.position.set(0.7, -0.4, 0.2);
		s6.position.set(1.1, -0.4, 0.2);
		s7.position.set(1.1, -0.4, -0.2);
		s8.position.set(0.7, -0.4, -0.2);
		s9.position.set(0.1, -0.3, 0.05);
		s10.position.set(0.1, -0.3, -0.05);
		s11.position.set(0, -0.4, 0.05);
		s12.position.set(0, -0.4, -0.05);
		s13.position.set(0, 0, 0.05);
		s14.position.set(0, 0, -0.05);
		s15.position.set(0.1, 0, 0.05);
		s16.position.set(0.1, 0, -0.05);
		s17.position.set(0.7, -0.3, 0.05);
		s18.position.set(0.7, -0.3, -0.05);
		
		scene.add(s1);
		scene.add(s2);
		scene.add(s3);
		scene.add(s4);
		scene.add(s5);
		scene.add(s6);
		scene.add(s7);
		scene.add(s8);
		scene.add(s9);
		scene.add(s10);
		scene.add(s11);
		scene.add(s12);
		scene.add(s13);
		scene.add(s14);
		scene.add(s15);
		scene.add(s16);
		scene.add(s17);
		scene.add(s18);
	} else {
		scene.remove(s1);
		scene.remove(s2);
		scene.remove(s3);
		scene.remove(s4);
		scene.remove(s5);
		scene.remove(s6);
		scene.remove(s7);
		scene.remove(s8);
		scene.remove(s9);
		scene.remove(s10);
		scene.remove(s11);
		scene.remove(s12);
		scene.remove(s13);
		scene.remove(s14);
		scene.remove(s15);
		scene.remove(s16);
		scene.remove(s17);
		scene.remove(s18);
	}
}

// Vertices for world tab
function world_lockV() {
	shoulderElbow.position.set(0.05,-0.2,0);
	elbowForearm.position.set(0.35,-0.35,0);
	wristPalm.position.set(0.9,-0.35,0);
		
		s1.position.set(0.7, -0.3, 0.2);
		s2.position.set(1.1, -0.3, 0.2);
		s3.position.set(1.1, -0.3, -0.2);
		s4.position.set(0.7, -0.3, -0.2);
		s5.position.set(0.7, -0.4, 0.2);
		s6.position.set(1.1, -0.4, 0.2);
		s7.position.set(1.1, -0.4, -0.2);
		s8.position.set(0.7, -0.4, -0.2);
		s9.position.set(0.1, -0.3, 0.05);
		s10.position.set(0.1, -0.3, -0.05);
		s11.position.set(0, -0.4, 0.05);
		s12.position.set(0, -0.4, -0.05);
		s13.position.set(0, 0, 0.05);
		s14.position.set(0, 0, -0.05);
		s15.position.set(0.1, 0, 0.05);
		s16.position.set(0.1, 0, -0.05);
		s17.position.set(0.7, -0.3, 0.05);
		s18.position.set(0.7, -0.3, -0.05);
		
		scene.add(s1);
		scene.add(s2);
		scene.add(s3);
		scene.add(s4);
		scene.add(s5);
		scene.add(s6);
		scene.add(s7);
		scene.add(s8);
		scene.add(s9);
		scene.add(s10);
		scene.add(s11);
		scene.add(s12);
		scene.add(s13);
		scene.add(s14);
		scene.add(s15);
		scene.add(s16);
		scene.add(s17);
		scene.add(s18);
}

// The World figures block functions 

var geometry3 = new THREE.BoxGeometry(0.4, 0.1, 0.4);
var material = new THREE.MeshLambertMaterial( { color: 0x099556, flatShading: true, wireframe: false} );	
var newWP1 = new THREE.Mesh( geometry3, material);
newWP1.position.set(0.9,0.05,0);

function drawPalm() {
	var condition = document.getElementById('palmDraw').checked;
	if( condition == true) {
		scene.add(newWP1);
	} else {
		scene.remove(newWP1);
		document.getElementById('palmActive').checked = false;
		document.getElementById('wristActive').checked = false;
		activePalm();
	}
}

var geometry3 = new THREE.BoxGeometry(0.4, 0.1, 0.4);
var material = new THREE.MeshLambertMaterial( { color: 0xFF250E, flatShading: true, wireframe: false} );	
var newWP2 = new THREE.Mesh( geometry3, material);
newWP2.position.set(0.9,0.05,0);

function drawWrist() {
	var condition = document.getElementById('wristDraw').checked;
	if( condition == true) {
		scene.add(newWP2);
	} else {
		scene.remove(newWP2);
		document.getElementById('palmActive').checked = false;
		document.getElementById('wristActive').checked = false;
		activePalm();
	}
}

var geometry2 = new THREE.BoxGeometry(0.7, 0.1, 0.1);
var material = new THREE.MeshLambertMaterial( { color: 0x099556, flatShading: true, wireframe: false} );
var newEF1 = new THREE.Mesh( geometry2, material);
newEF1.position.set(0.35,0.05,0);

function drawForearm() {
	var condition = document.getElementById('forearmDraw').checked;
	if( condition == true) {
		scene.add(newEF1);
	} else {
		scene.remove(newEF1);
		document.getElementById('forearmActive').checked = false;
		document.getElementById('elbowActive').checked = false;
		activeForearm();
	}
}

var geometry2 = new THREE.BoxGeometry(0.7, 0.1, 0.1);
var material = new THREE.MeshLambertMaterial( { color: 0xFF250E, flatShading: true, wireframe: false} );
var newEF2 = new THREE.Mesh( geometry2, material);
newEF2.position.set(0.35,0.05,0);

function drawElbow() {
	var condition = document.getElementById('elbowDraw').checked;
	if( condition == true) {
		scene.add(newEF2);
	} else {
		scene.remove(newEF2);
		document.getElementById('forearmActive').checked = false;
		document.getElementById('elbowActive').checked = false;
		activeForearm();
	}
}

var geometry = new THREE.BoxGeometry(0.1, 0.4, 0.1);
var material = new THREE.MeshLambertMaterial( { color: 0x099556, flatShading: true, wireframe: false} );
var newSA1 = new THREE.Mesh( geometry, material);
newSA1.position.set(0.05,0.25,0);

function drawArm() {
	var condition = document.getElementById('armDraw').checked;
	if( condition == true) {
		scene.add(newSA1);
	} else {
		scene.remove(newSA1);
		document.getElementById('armActive').checked = false;
		document.getElementById('shoulderActive').checked = false;
		activeArm();
	}
}

var geometry = new THREE.BoxGeometry(0.1, 0.4, 0.1);
var material = new THREE.MeshLambertMaterial( { color: 0xFF250E, flatShading: true, wireframe: false} );
var newSA2 = new THREE.Mesh( geometry, material);
newSA2.position.set(0.05,0.25,0);

var light2 = new THREE.PointLight( 0xffffff, 3, 100 );
light2.position.set( 0.15, 0.3, 0 );

function drawShoulder() {
	var condition = document.getElementById('shoulderDraw').checked;
	if( condition == true) {
		scene.add(newSA2);
		scene.add(light2);
	} else {
		scene.remove(newSA2);
		scene.remove(light2);
		document.getElementById('armActive').checked = false;
		document.getElementById('shoulderActive').checked = false;
		activeArm();
	}
}

// Vertices of the figures in the world
function activePalm() {
	var condition1 = document.getElementById('palmActive').checked;
	var condition2 = document.getElementById('wristActive').checked;
	var condition3 = document.getElementById('palmDraw').checked;
	var condition4 = document.getElementById('wristDraw').checked;
	if( (condition1 == true || condition2 == true) && (condition3 == true || condition4 == true) ) {
		newWP1.position.set(0.9,0.05,0);
		newWP2.position.set(0.9,0.05,0);

		s1.position.set(0.7, 0.1, 0.2);
		s2.position.set(1.1, 0.1, 0.2);
		s3.position.set(1.1, 0.1, -0.2);
		s4.position.set(0.7, 0.1, -0.2);
		s5.position.set(0.7, 0, 0.2);
		s6.position.set(1.1, 0, 0.2);
		s7.position.set(1.1, 0, -0.2);
		s8.position.set(0.7, 0, -0.2);
		
		scene.add(s1);
		scene.add(s2);
		scene.add(s3);
		scene.add(s4);
		scene.add(s5);
		scene.add(s6);
		scene.add(s7);
		scene.add(s8);
	} else {
		scene.remove(s1);
		scene.remove(s2);
		scene.remove(s3);
		scene.remove(s4);
		scene.remove(s5);
		scene.remove(s6);
		scene.remove(s7);
		scene.remove(s8);
	}
}

function activeForearm() {
	var condition1 = document.getElementById('forearmActive').checked;
	var condition2 = document.getElementById('elbowActive').checked;
	var condition3 = document.getElementById('forearmDraw').checked;
	var condition4 = document.getElementById('elbowDraw').checked;
	if( (condition1 == true || condition2 == true) && (condition3 == true || condition4 == true) ) {
		newEF1.position.set(0.35,0.05,0);
		newEF2.position.set(0.35,0.05,0);

		s9.position.set(0.1, 0.1, 0.05);
		s10.position.set(0.1, 0.1, -0.05);
		s11.position.set(0, 0, 0.05);
		s12.position.set(0, 0, -0.05);
		s17.position.set(0.7, 0.1, 0.05);
		s18.position.set(0.7, 0.1, -0.05);
		
		scene.add(s9);
		scene.add(s10);
		scene.add(s11);
		scene.add(s12);
		scene.add(s17);
		scene.add(s18);
	} else {
		scene.remove(s9);
		scene.remove(s10);
		scene.remove(s11);
		scene.remove(s12);
		scene.remove(s17);
		scene.remove(s18);
	}
}

function activeArm() {
	var condition1 = document.getElementById('armActive').checked;
	var condition2 = document.getElementById('shoulderActive').checked;
	var condition3 = document.getElementById('armDraw').checked;
	var condition4 = document.getElementById('shoulderDraw').checked;
	if( (condition1 == true || condition2 == true) && (condition3 == true || condition4 == true) ) {
		newSA1.position.set(0.05,0.25,0);
		newSA2.position.set(0.05,0.25,0);

		s9.position.set(0.1, 0.1, 0.05);
		s10.position.set(0.1, 0.1, -0.05);
		s11.position.set(0, 0, 0.05);
		s12.position.set(0, 0, -0.05);
		s13.position.set(0, 0.45, 0.05);
		s14.position.set(0, 0.45, -0.05);
		s15.position.set(0.1, 0.45, 0.05);
		s16.position.set(0.1, 0.45, -0.05);
		
		scene.add(s9);
		scene.add(s10);
		scene.add(s11);
		scene.add(s12);
		scene.add(s13);
		scene.add(s14);
		scene.add(s15);
		scene.add(s16);
	} else {
		scene.remove(s9);
		scene.remove(s10);
		scene.remove(s11);
		scene.remove(s12);
		scene.remove(s13);
		scene.remove(s14);
		scene.remove(s15);
		scene.remove(s16);
	}
}


function wf_Transition() {
	document.getElementById('palmActive').checked = false;
	document.getElementById('wristActive').checked = false;
	document.getElementById('forearmActive').checked = false;
	document.getElementById('elbowActive').checked = false;
	document.getElementById('armActive').checked = false;
	document.getElementById('shoulderActive').checked = false;
	activePalm();
	activeForearm();
	activeArm();
	
	var px = Number(document.getElementById('palmX').value);
	var py = Number(document.getElementById('palmY').value);
	var pz = Number(document.getElementById('palmZ').value);
	
	newWP1.position.x += px*0.1;
	newWP1.position.y += py*0.1;
	newWP1.position.z += pz*0.1;

	var wx = Number(document.getElementById('wristX').value);
	var wy = Number(document.getElementById('wristY').value);
	var wz = Number(document.getElementById('wristZ').value);

	newWP2.position.x += wx*0.1;
	newWP2.position.y += wy*0.1;
	newWP2.position.z += wz*0.1;

	var fx = Number(document.getElementById('forearmX').value);
	var fy = Number(document.getElementById('forearmY').value);
	var fz = Number(document.getElementById('forearmZ').value);

	newEF1.position.x += fx*0.1;
	newEF1.position.y += fy*0.1;
	newEF1.position.z += fz*0.1;

	var ex = Number(document.getElementById('elbowX').value);
	var ey = Number(document.getElementById('elbowY').value);
	var ez = Number(document.getElementById('elbowZ').value);

	newEF2.position.x += ex*0.1;
	newEF2.position.y += ey*0.1;
	newEF2.position.z += ez*0.1;

	var ax = Number(document.getElementById('armX').value);
	var ay = Number(document.getElementById('armY').value);
	var az = Number(document.getElementById('armZ').value);

	newSA1.position.x += ax*0.1;
	newSA1.position.y += ay*0.1;
	newSA1.position.z += az*0.1;

	var sx = Number(document.getElementById('shoulderX').value);
	var sy = Number(document.getElementById('shoulderY').value);
	var sz = Number(document.getElementById('shoulderZ').value);

	newSA2.position.x += sx*0.1;
	newSA2.position.y += sy*0.1;
	newSA2.position.z += sz*0.1;
}


//camera.position.set(0.5,-0.25,1.5)
camera.position.set(0.5,-0.25,2.2);

var ambientLight = new THREE.AmbientLight(0x099556, 0.7);
scene.add(ambientLight);

var light = new THREE.PointLight( 0xffffff, 3, 100 );
light.position.set( 0, 0.2, -0.5 );
scene.add( light );

// Moving Light by using arrows
var xSpeed = 2;
var ySpeed = 2;

document.addEventListener("keydown", onDocumentKeyDown, false);
function onDocumentKeyDown(event) {
    var keyCode = event.which;
    if (keyCode == 40) {
        light.position.y += ySpeed;
    } else if (keyCode == 38) {
        light.position.y -= ySpeed;
    } else if (keyCode == 39) {
        light.position.x -= xSpeed;
    } else if (keyCode == 37) {
        light.position.x += xSpeed;
    }
};


// XY Grid for world/index;
function world_drawXY() {

	// Vertical lines
	var x = 2, y = 2;
	var i = 0;
	for(i = -20; i < 20; i += 1 ) {
		var grid = new THREE.Geometry();
		var gridMaterial = new THREE.LineBasicMaterial({color: 'black'});
		grid.vertices.push(new THREE.Vector3( x, y, 0));
		grid.vertices.push(new THREE.Vector3( x, -y, 0));
		var verticalyz = new THREE.Line(grid, gridMaterial, THREE.LineSegments);
		scene.add(verticalyz);
		x = x - 0.1;
	}

	//Horizontal lines
	var x = 2, y = 2;
	var i = 0;
	for(i = -19; i < 20; i += 1 ) {
		var grid = new THREE.Geometry();
		var gridMaterial = new THREE.LineBasicMaterial({color: 'black'});
		grid.vertices.push(new THREE.Vector3( x, y, 0));
		grid.vertices.push(new THREE.Vector3( -x, y, 0));
		var horizontalyz = new THREE.Line(grid, gridMaterial, THREE.LineSegments);
		scene.add(horizontalyz);
		y = y - 0.1;
	}
}


//X-axis red line 
var X = new THREE.Geometry();
var x_material = new THREE.LineBasicMaterial({color: 'red'});
X.vertices.push(new THREE.Vector3( -0.6, 0, 0));
X.vertices.push(new THREE.Vector3(0.6, 0, 0));
var X_direction = new THREE.Line(X, x_material, THREE.LineSegments);
scene.add(X_direction);

//Y-axis green line 
var Y = new THREE.Geometry();
var y_material = new THREE.LineBasicMaterial({color: 0x3EF70F});
Y.vertices.push(new THREE.Vector3( 0, 0.6, 0));
Y.vertices.push(new THREE.Vector3(0, -0.6, 0));
var Y_direction = new THREE.Line(Y, y_material, THREE.LineSegments);
scene.add(Y_direction);

//Z-axis blue line
var Z = new THREE.Geometry();
var z_material = new THREE.LineBasicMaterial({color: 0x3CEFF1});
Z.vertices.push(new THREE.Vector3( 0, 0, -0.6));
Z.vertices.push(new THREE.Vector3(0, 0, 0.6));
var Z_direction = new THREE.Line(Z, z_material, THREE.LineSegments);
scene.add(Z_direction);

//Arrow +x
var geometry = new THREE.ConeGeometry( 0.01, 0.1, 100, 100);
var material = new THREE.MeshBasicMaterial( {color: 'red'} );
var cone = new THREE.Mesh( geometry, material );
cone.position.set(0.55,0,0);
cone.rotation.x = 90*(Math.PI / 180);
cone.rotation.z = 270*(Math.PI / 180);
scene.add( cone );

//Arrow -x
var geometry = new THREE.ConeGeometry( 0.01, 0.1, 100, 100);
var material = new THREE.MeshBasicMaterial( {color: 'red'} );
var cone = new THREE.Mesh( geometry, material );
cone.position.set(-0.55,0,0);
cone.rotation.x = 90*(Math.PI / 180);
cone.rotation.z = 90*(Math.PI / 180);
scene.add( cone );

//Arrow +y
var geometry = new THREE.ConeGeometry( 0.01, 0.1, 100, 100);
var material = new THREE.MeshBasicMaterial( {color: 0x3EF70F} );
var cone = new THREE.Mesh( geometry, material );
cone.position.set(0,0.55,0);
scene.add( cone );

//Arrow -y
var geometry = new THREE.ConeGeometry( 0.01, 0.1, 100, 100);
var material = new THREE.MeshBasicMaterial( {color: 0x3EF70F} );
var cone = new THREE.Mesh( geometry, material );
cone.position.set(0,-0.55,0);
cone.rotation.x = 180*(Math.PI / 180);
scene.add( cone );

//Arrow +z
var geometry = new THREE.ConeGeometry( 0.01, 0.1, 100, 100);
var material = new THREE.MeshBasicMaterial( {color: 0x3CEFF1} );
var cone = new THREE.Mesh( geometry, material );
cone.position.set(0, 0, 0.55);
cone.rotation.x = 90*(Math.PI / 180);
scene.add( cone );

//Arrow -z
var geometry = new THREE.ConeGeometry( 0.01, 0.1, 100, 100);
var material = new THREE.MeshBasicMaterial( {color: 0x3CEFF1} );
var cone = new THREE.Mesh( geometry, material );
cone.position.set(0, 0, -0.55);
cone.rotation.x = -90*(Math.PI / 180);
scene.add( cone );

									//   EXTRA ARROWS

//Arrow +x
var geometry = new THREE.ConeGeometry( 0.01, 0.1, 100, 100);
var material = new THREE.MeshBasicMaterial( {color: 0XF7FF00} );
var cone = new THREE.Mesh( geometry, material );
cone.position.set(0.15,0,0);
cone.rotation.x = 90*(Math.PI / 180);
cone.rotation.z = 270*(Math.PI / 180);
scene.add( cone );

//Arrow -x
var geometry = new THREE.ConeGeometry( 0.01, 0.1, 100, 100);
var material = new THREE.MeshBasicMaterial( {color: 0XF7FF00} );
var cone = new THREE.Mesh( geometry, material );
cone.position.set(-0.15,0,0);
cone.rotation.x = 90*(Math.PI / 180);
cone.rotation.z = 90*(Math.PI / 180);
scene.add( cone );

//Arrow +y
var geometry = new THREE.ConeGeometry( 0.01, 0.1, 100, 100);
var material = new THREE.MeshBasicMaterial( {color: 0x3EF70F} );
var cone = new THREE.Mesh( geometry, material );
cone.position.set(0,0.15,0);
scene.add( cone );

//Arrow -y
var geometry = new THREE.ConeGeometry( 0.01, 0.1, 100, 100);
var material = new THREE.MeshBasicMaterial( {color: 0x3EF70F} );
var cone = new THREE.Mesh( geometry, material );
cone.position.set(0,-0.15,0);
cone.rotation.x = 180*(Math.PI / 180);
scene.add( cone );

//Arrow +z
var geometry = new THREE.ConeGeometry( 0.01, 0.1, 100, 100);
var material = new THREE.MeshBasicMaterial( {color: 0x3CEFF1} );
var cone = new THREE.Mesh( geometry, material );
cone.position.set(0, 0, 0.15);
cone.rotation.x = 90*(Math.PI / 180);
scene.add( cone );

//Arrow -z
var geometry = new THREE.ConeGeometry( 0.01, 0.1, 100, 100);
var material = new THREE.MeshBasicMaterial( {color: 0x3CEFF1} );
var cone = new THREE.Mesh( geometry, material );
cone.position.set(0, 0, -0.15);
cone.rotation.x = -90*(Math.PI / 180);
scene.add( cone );

//Dynamic JavaScript part taking inputs from checkBox

// YZ Grid
var horizontalyz = [];
var verticalyz = [];
var z = 2, y = 2;
var i = 0;
for(i = -20; i < 20; i += 1 ) {
	var grid = new THREE.Geometry();
	var gridMaterial = new THREE.LineBasicMaterial({color: 'black'});
	grid.vertices.push(new THREE.Vector3( 0, y, z));
	grid.vertices.push(new THREE.Vector3( 0, -y, z));
	verticalyz[i] = new THREE.Line(grid, gridMaterial, THREE.LineSegments);
	z = z - 0.1;
}

var z = 2, y = 2;
var i = 0;
for(i = -19; i < 20; i += 1 ) {
	var grid = new THREE.Geometry();
	var gridMaterial = new THREE.LineBasicMaterial({color: 'black'});
	grid.vertices.push(new THREE.Vector3( 0, y, z));
	grid.vertices.push(new THREE.Vector3( 0, y, -z));
	horizontalyz[i] = new THREE.Line(grid, gridMaterial, THREE.LineSegments);
	y = y - 0.1;
}
function drawYZ() {
	var condition = document.getElementById('yzAxis').checked;
	if( condition == true) {

		// Vertical lines
		var z = 2, y = 2;
		var i = 0;
		for(i = -20; i < 20; i += 1 ) {
			scene.add(verticalyz[i]);
			z = z - 0.1;
		}

		//Horizontal lines
		var z = 2, y = 2;
		var i = 0;
		for(i = -19; i < 20; i += 1 ) {
			scene.add(horizontalyz[i]);
			y = y - 0.1;
		}
	}
	
	if( condition == false) {
		// Vertical lines
		var z = 2, y = 2;
		var i = 0;
		for(i = -20; i < 20; i += 1 ) {
			scene.remove(verticalyz[i]);
			z = z - 0.1;
		}

		//Horizontal lines
		var z = 2, y = 2;
		var i = 0;
		for(i = -19; i < 20; i += 1 ) {
			scene.remove(horizontalyz[i]);
			y = y - 0.1;
		}
	}
}

// ZX Grid
var horizontalzx = [];
var verticalzx = [];
var z = 2, x = 2;
var i = 0;
for(i = -20; i < 20; i += 1 ) {
	var grid = new THREE.Geometry();
	var gridMaterial = new THREE.LineBasicMaterial({color: 'black'});
	grid.vertices.push(new THREE.Vector3( x, 0, z));
	grid.vertices.push(new THREE.Vector3( -x, 0, z));
	verticalzx[i] = new THREE.Line(grid, gridMaterial, THREE.LineSegments);
	z = z - 0.1;
}

var z = 2, x = 2;
var i = 0;
for(i = -19; i < 20; i += 1 ) {
	var grid = new THREE.Geometry();
	var gridMaterial = new THREE.LineBasicMaterial({color: 'black'});
	grid.vertices.push(new THREE.Vector3( x, 0, z));
	grid.vertices.push(new THREE.Vector3( x, 0, -z));
	horizontalzx[i] = new THREE.Line(grid, gridMaterial, THREE.LineSegments);
	x = x - 0.1;
}
function drawZX() {
	var condition = document.getElementById('zxAxis').checked;
	if( condition == true) {

		// Vertical lines
		var z = 2, x = 2;
		var i = 0;
		for(i = -20; i < 20; i += 1 ) {
			scene.add(verticalzx[i]);
			z = z - 0.1;
		}

		//Horizontal lines
		var z = 2, x = 2;
		var i = 0;
		for(i = -19; i < 20; i += 1 ) {
			scene.add(horizontalzx[i]);
			x = x - 0.1;
		}
	}
	
	if( condition == false) {
		// Vertical lines
		var z = 2, y = 2;
		var i = 0;
		for(i = -20; i < 20; i += 1 ) {
			scene.remove(verticalzx[i]);
			z = z - 0.1;
		}

		//Horizontal lines
		var z = 2, x = 2;
		var i = 0;
		for(i = -19; i < 20; i += 1 ) {
			scene.remove(horizontalzx[i]);
			x = x - 0.1;
		}
	}
}

// XY Grid
var horizontalxy = [];
var verticalxy = [];
var x = 2, y = 2;
var i = 0;
for(i = -20; i < 20; i += 1 ) {
	var grid = new THREE.Geometry();
	var gridMaterial = new THREE.LineBasicMaterial({color: 'black'});
	grid.vertices.push(new THREE.Vector3( x, y, 0));
	grid.vertices.push(new THREE.Vector3( x, -y, 0));
	verticalxy[i] = new THREE.Line(grid, gridMaterial, THREE.LineSegments);
	x = x - 0.1;
}

var x = 2, y = 2;
var i = 0;
for(i = -19; i < 20; i += 1 ) {
	var grid = new THREE.Geometry();
	var gridMaterial = new THREE.LineBasicMaterial({color: 'black'});
	grid.vertices.push(new THREE.Vector3( x, y, 0));
	grid.vertices.push(new THREE.Vector3( -x, y, 0));
	horizontalxy[i] = new THREE.Line(grid, gridMaterial, THREE.LineSegments);
	y = y - 0.1;
}
function drawXY() {
	var condition = document.getElementById('xyAxis').checked;
	if( condition == true) {

		// Vertical lines
		var x = 2, y = 2;
		var i = 0;
		for(i = -20; i < 20; i += 1 ) {
			scene.add(verticalxy[i]);
			x = x - 0.1;
		}

		//Horizontal lines
		var x = 2, y = 2;
		var i = 0;
		for(i = -19; i < 20; i += 1 ) {
			scene.add(horizontalxy[i]);
			y = y - 0.1;
		}
	}
	
	if( condition == false) {
		// Vertical lines
		var z = 2, y = 2;
		var i = 0;
		for(i = -20; i < 20; i += 1 ) {
			scene.remove(verticalxy[i]);
			x = x - 0.1;
		}

		//Horizontal lines
		var z = 2, y = 2;
		var i = 0;
		for(i = -19; i < 20; i += 1 ) {
			scene.remove(horizontalxy[i]);
			y = y - 0.1;
		}
	}
}

var xd = 0, yd = 0, zd = 0;
function startTransistion() {

	document.getElementById('lockVertices').checked = false;
	lockV();

	xd = Number(document.getElementById('xco').value);
	yd = Number(document.getElementById('yco').value);
	zd = Number(document.getElementById('zco').value);

	xd = xd*0.1;
	yd = yd*0.1;
	zd = zd*0.1;
	
	shoulderElbow.position.set(0.05+xd,-0.2+yd,0+zd);
	elbowForearm.position.set(0.35+xd,-0.35+yd,0+zd);
	wristPalm.position.set(0.9+xd,-0.35+yd,0+zd);
}

function startAnimation() {

	var conditionAnimation = document.getElementById('animation').checked;

	if(conditionAnimation == false) {
		document.getElementById('lockVertices').checked = false;
		lockV();

		shoulderElbow.position.set(0,-0.2,-0.05);
		elbowForearm.position.set(0,-0.1615,-0.35);
		wristPalm.position.set(0,0.1395,-0.625);
		wristPalm.rotation.x = 90*(Math.PI / 180);
		elbowForearm.rotation.y = 90*(Math.PI / 180);
		elbowForearm.rotation.x = 35*(Math.PI / 180);
	} else {
		document.getElementById('lockVertices').checked = true;
		lockV();

		wristPalm.rotation.x = 0*(Math.PI / 180);
		elbowForearm.rotation.y = 0*(Math.PI / 180);
		elbowForearm.rotation.x = 0*(Math.PI / 180);
		shoulderElbow.position.set(0.05,-0.2,0);
		elbowForearm.position.set(0.35,-0.35,0);
		wristPalm.position.set(0.9,-0.35,0);
	}
}

													//GAME LOGIC

var update = function() {
};

//draw scene
var render = function() {
	var someCondition = document.getElementById('2DCamera').checked;
	if( someCondition === false) {
		renderer.render(scene, camera2);
	} else {
		renderer.render( scene, camera);
	}
};

//run game loop (update, render, repeat)
var GameLoop = function() {
	requestAnimationFrame(GameLoop);
	update();
	render();
};

GameLoop();
