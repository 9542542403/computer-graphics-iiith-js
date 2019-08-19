var renderer,camera,controls,scene,stats,points;
var initialize = function(){
    renderer = new THREE.WebGLRenderer( { antialias: false } );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild(renderer.domElement);
    let aspectRatio = window.innerWidth / window.innerHeight;
		let frustumSize = 20;
		camera = new THREE.OrthographicCamera(frustumSize * aspectRatio / -2, frustumSize * aspectRatio / 2, frustumSize / 2, frustumSize / -2, -100, 100);
    camera.position.y = 30;
    controls = new THREE.OrbitControls( camera );
    controls.damping = 0.2;
    controls.staticMoving = false;
    scene = new THREE.Scene();
    stats = new Stats();
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.top = '0px';
    stats.domElement.style.zIndex = 100;
    document.body.appendChild( stats.domElement );
    window.addEventListener( 'resize', onWindowResize, false );
    var req = new XMLHttpRequest();
    req.open("GET","bunnyobj.txt",true);

	  var geometry = new THREE.BoxGeometry( 1, 15, 1 );
		var material = new THREE.MeshBasicMaterial( { color: 0xffffff, wireframe: true, wireframeLinewidth: 2 } );
		var cube = new THREE.Mesh( geometry, material );
		cube.position.set(4, 3, -3.8);
		cube.rotation.x = Math.PI / 22;
		cube.rotation.z = Math.PI / 16 ;
		scene.add( cube );

		var material11 = new THREE.LineBasicMaterial({
				color: 0x00ff00, linewidth: 2
		});
		var geometry11 = new THREE.Geometry();
		geometry11.vertices.push(
				new THREE.Vector3( -0.5, 10, 0 ),
				new THREE.Vector3( -0.5, 6.4, 0 ),
		);
		var line11 = new THREE.Line( geometry11, material11 );
		line11.rotation.x = -Math.PI / 2;
		scene.add( line11 );

		var material12 = new THREE.LineBasicMaterial({
				color: 0x00ff00, linewidth: 2
		});
		var geometry12 = new THREE.Geometry();
		geometry12.vertices.push(
				new THREE.Vector3( -0.5, 2, 0 ),
				new THREE.Vector3( -0.5, -16.4, 0 ),
		);
		var line12 = new THREE.Line( geometry12, material12 );
		line12.rotation.x = -Math.PI / 2;
		scene.add( line12 );

		var material13 = new THREE.LineBasicMaterial({
				color: 0x00ff00, linewidth: 2
		});
		var geometry13 = new THREE.Geometry();
		geometry13.vertices.push(
				new THREE.Vector3( -4.7, 10, 0 ),
				new THREE.Vector3( -4.7, -5, 0 ),
		);
		var line13 = new THREE.Line( geometry13, material13 );
		line13.rotation.x = -Math.PI / 2;
		scene.add( line13 );

		var material21 = new THREE.LineBasicMaterial({
				color: 0xff0000, linewidth: 2 
		});
		var geometry21 = new THREE.Geometry();
		geometry21.vertices.push(
				new THREE.Vector3( -20.3, 1.7, 0 ),
				new THREE.Vector3( 20, 1.7, 0 ),
		);
		var line21 = new THREE.Line( geometry21, material21 );
		line21.rotation.x = -Math.PI / 2;
		scene.add( line21 );

		var material22 = new THREE.LineBasicMaterial({
				color: 0xff0000, linewidth: 2 
		});
		var geometry22 = new THREE.Geometry();
		geometry22.vertices.push(
				new THREE.Vector3( -13.3, -0.7, 0 ),
				new THREE.Vector3( 10, -0.7, 0 ),
		);
		var line22 = new THREE.Line( geometry22, material22 );
		line22.rotation.x = -Math.PI / 2;
		scene.add( line22 );


		var material4 = new THREE.LineDashedMaterial({
			color: 0x00ffff , linewidth : 2
		});
		var geometry4 = new THREE.Geometry();
		geometry4.vertices.push(
				new THREE.Vector3( -2, 4, -20 ),
				new THREE.Vector3( -5, -2, -10 )
		);
		var line4 = new THREE.Line( geometry4, material4 );
		line4.rotation.x = -Math.PI / 2;
		scene.add( line4 );

		var material41 = new THREE.LineDashedMaterial({
			color: 0x00ffff , linewidth : 0.4
		});
		var geometry41 = new THREE.Geometry();
		geometry41.vertices.push(
				new THREE.Vector3( 2, 2, -20 ),
				new THREE.Vector3( -3.4, -10, -10 )
		);
		var line41 = new THREE.Line( geometry41, material41 );
		line41.rotation.x = -Math.PI / 2;
		scene.add( line41 );

	    req.onload = function(){
	        var lines = this.responseText.split("\n");
	        var vertices = [];
	        var normals = [];
	        var vertexNormals = [];
	        var faces = [];
	        var vertexMap = {};
	        var scale = 50;
	        for(var i = 0; i < lines.length; i ++){
	            if(lines[i].indexOf("vn ") === 0 ){
	                var coords = lines[i].split(" ");
	                normals.push(new THREE.Vector3(parseFloat(coords[1]),parseFloat(coords[2]),parseFloat(coords[3])));
	            }
	            else if (lines[i].indexOf("v ") === 0){
	                var coords = lines[i].split(" ");
	                vertices.push(new THREE.Vector3(parseFloat(coords[1]) * scale,parseFloat(coords[2]) * scale,parseFloat(coords[3]) * scale));
	            }
	            else if (lines[i].indexOf("f ") === 0){
	                var coords = lines[i].split(" ");
	                for(var j = 1; j < coords.length; j ++){
	                    var vertNorm = coords[j].split("//");
	                    var index = parseInt(vertNorm[0]) - 1;
	                    vertexMap[index.toString()] = {
	                        v : vertices[index],
	                        n : normals[parseInt(vertNorm[1]) - 1]
	                    }
	                }
	            }
	        }
	        var tempVerts = [];
	        var tempNormals = [];
	        for(var vert in vertexMap){
	            if(vertexMap.hasOwnProperty(vert)){
	                tempVerts.push(vertexMap[vert].v);
	                tempNormals.push(vertexMap[vert].n);
	            }
	        }
	        var p = new debugParticles({
	            vertices : tempVerts,
	            normals : tempNormals
	        })
	    };
	    req.send();
	    animate();
	};


function onWindowResize() {
    console.log("windowresize");
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
}

function animate() {
    stats.update();
    controls.update();
    requestAnimationFrame(animate);
    renderer.render( scene, camera );
}
function drawYZ() {
var conditon = document.getElementById('yzAxis').checked;
var horizontalyz = [];
var verticalyz = [];
if( conditon == false) {

	// Vertical lines
	var z = 20, y = 20;
	var i = 0;
	for(i = -20; i < 1; i += 1 ) {
		var grid = new THREE.Geometry();
		var gridMaterial = new THREE.LineBasicMaterial({color: 'black'});
		grid.vertices.push(new THREE.Vector3( -15, y, z));
		grid.vertices.push(new THREE.Vector3( -15, -y, z));
		verticalyz[i] = new THREE.Line(grid, gridMaterial, THREE.LineSegments);
		scene.add(verticalyz[i]);
		z = z - 2;
	}

	//Horizontal lines
	var z = 20, y = 20;
	var i = 0;
	for(i = -19; i < 2; i += 1 ) {
		var grid = new THREE.Geometry();
		var gridMaterial = new THREE.LineBasicMaterial({color: 'black'});
		grid.vertices.push(new THREE.Vector3( -15, y, z));
		grid.vertices.push(new THREE.Vector3( -15, y, -z));
		horizontalyz[i] = new THREE.Line(grid, gridMaterial, THREE.LineSegments);
		scene.add(horizontalyz[i]);
		y = y - 2;
	}
}

if( conditon == true) {
	// Vertical lines
	var z = 20, y = 20;
	var i = 0;
	for(i = -20; i < 1; i += 1 ) {
		var grid = new THREE.Geometry();
		var gridMaterial = new THREE.LineBasicMaterial({color: 0x4F4F4F});
		grid.vertices.push(new THREE.Vector3( -15, y, z));
		grid.vertices.push(new THREE.Vector3( -15, -y, z));
		var verticalyz = new THREE.Line(grid, gridMaterial, THREE.LineSegments);
		scene.add(verticalyz);
		z = z - 2;
	}

	//Horizontal lines
	var z = 20, y = 20;
	var i = 0;
	for(i = -19; i < 2; i += 1 ) {
		var grid = new THREE.Geometry();
		var gridMaterial = new THREE.LineBasicMaterial({color: 0x4F4F4F});
		grid.vertices.push(new THREE.Vector3( -15, y, z));
		grid.vertices.push(new THREE.Vector3( -15, y, -z));
		var horizontalyz = new THREE.Line(grid, gridMaterial, THREE.LineSegments);
		scene.add(horizontalyz);
		y = y - 2;
	}
}
}

// ZX Grid
function drawZX() {
var conditon = document.getElementById('zxAxis').checked;
if( conditon == true) {

	// Vertical lines
	var x = 10, z = 10;
	var i = 0;
	for(i = -11; i < 0; i += 1 ) {
		var grid = new THREE.Geometry();
		var gridMaterial = new THREE.LineBasicMaterial({color: 0x4F4F4F});
		grid.vertices.push(new THREE.Vector3( x, 0, z));
		grid.vertices.push(new THREE.Vector3( x, 0, -z));
		var verticalyz = new THREE.Line(grid, gridMaterial, THREE.LineSegments);
		scene.add(verticalyz);
		x = x - 2;
	}

	//Horizontal lines
	var x = 10, z = 10;
	var i = 0;
	for(i = -10; i < 1; i += 1 ) {
		var grid = new THREE.Geometry();
		var gridMaterial = new THREE.LineBasicMaterial({color: 0x4F4F4F});
		grid.vertices.push(new THREE.Vector3( x, 0, z));
		grid.vertices.push(new THREE.Vector3( -x, 0, z));
		var horizontalyz = new THREE.Line(grid, gridMaterial, THREE.LineSegments);
		scene.add(horizontalyz);
		z = z - 2;
	}
} else {
	// Vertical lines
	var x = 10, z = 10;
	var i = 0;
	for(i = -11; i < 0; i += 1 ) {
		var grid = new THREE.Geometry();
		var gridMaterial = new THREE.LineBasicMaterial({color: 'black'});
		grid.vertices.push(new THREE.Vector3( x, 0, z));
		grid.vertices.push(new THREE.Vector3( x, 0, -z));
		var verticalyz = new THREE.Line(grid, gridMaterial, THREE.LineSegments);
		scene.add(verticalyz);
		x = x - 2;
	}

	//Horizontal lines
	var x = 10, z = 10;
	var i = 0;
	for(i = -10; i < 1; i += 1 ) {
		var grid = new THREE.Geometry();
		var gridMaterial = new THREE.LineBasicMaterial({color: 'black'});
		grid.vertices.push(new THREE.Vector3( x, 0, z));
		grid.vertices.push(new THREE.Vector3( -x, 0, z));
		var horizontalyz = new THREE.Line(grid, gridMaterial, THREE.LineSegments);
		scene.add(horizontalyz);
		z = z - 2;
	}

}
}

// XY Grid
function drawXY() {
var conditon = document.getElementById('xyAxis').checked;
if( conditon == true) {
	var size = 15;
	var divisions = 1;
	var gridHelper = new THREE.GridHelper( size, divisions );
	gridHelper.rotation.x = -Math.PI / 6;
	gridHelper.position.set(5,5.5,1);
	gridHelper.setColors( 0x808080, 0x808080 );
	scene.add( gridHelper );
} else {
   var size = 15;
	var divisions = 1;
	var gridHelper = new THREE.GridHelper( size, divisions );
	gridHelper.rotation.x = -Math.PI / 6;
	gridHelper.position.set(5,5.5,1);
	gridHelper.setColors( 0x000000, 0x000000 );
	scene.add( gridHelper );
}
}

function drawYZ() {
var conditon = document.getElementById('yzAxis').checked;
var horizontalyz = [];
var verticalyz = [];
if( conditon == false) {

	// Vertical lines
	var z = 20, y = 20;
	var i = 0;
	for(i = -20; i < 1; i += 1 ) {
		var grid = new THREE.Geometry();
		var gridMaterial = new THREE.LineBasicMaterial({color: 'black'});
		grid.vertices.push(new THREE.Vector3( -10, y, z));
		grid.vertices.push(new THREE.Vector3( -10, -y, z));
		verticalyz[i] = new THREE.Line(grid, gridMaterial, THREE.LineSegments);
		verticalyz[i].rotation.z= -Math.PI / 9;
		//verticalyz[i].rotation.y= -Math.PI / 6;
		verticalyz[i].rotation.x= -Math.PI / 9;
		scene.add(verticalyz[i]);
		z = z - 2;
	}

	//Horizontal lines
	var z = 20, y = 20;
	var i = 0;
	for(i = -19; i < 2; i += 1 ) {
		var grid = new THREE.Geometry();
		var gridMaterial = new THREE.LineBasicMaterial({color: 'black'});
		grid.vertices.push(new THREE.Vector3( -10, y, z));
		grid.vertices.push(new THREE.Vector3( -10, y, -z));
		horizontalyz[i] = new THREE.Line(grid, gridMaterial, THREE.LineSegments);
		horizontalyz[i].rotation.z= -Math.PI / 9;
		//horizontalyz[i].rotation.y= -Math.PI / 6;
		horizontalyz[i].rotation.x= -Math.PI / 9;
		scene.add(horizontalyz[i]);
		y = y - 2;
	}
}

if( conditon == true) {
	// Vertical lines
	var z = 20, y = 20;
	var i = 0;
	for(i = -20; i < 1; i += 1 ) {
		var grid = new THREE.Geometry();
		var gridMaterial = new THREE.LineBasicMaterial({color: 0x4F4F4F});
		grid.vertices.push(new THREE.Vector3( -10, y, z));
		grid.vertices.push(new THREE.Vector3( -10, -y, z));
		var verticalyz = new THREE.Line(grid, gridMaterial, THREE.LineSegments);
		verticalyz.rotation.z = -Math.PI / 9;
		//verticalyz.rotation.y = -Math.PI / 6;
		verticalyz.rotation.x = -Math.PI / 9;
		scene.add(verticalyz);
		z = z - 2;
	}

	//Horizontal lines
	var z = 20, y = 20;
	var i = 0;
	for(i = -19; i < 2; i += 1 ) {
		var grid = new THREE.Geometry();
		var gridMaterial = new THREE.LineBasicMaterial({color: 0x4F4F4F});
		grid.vertices.push(new THREE.Vector3( -10, y, z));
		grid.vertices.push(new THREE.Vector3( -10, y, -z));
		var horizontalyz = new THREE.Line(grid, gridMaterial, THREE.LineSegments);
		horizontalyz.rotation.z= -Math.PI / 9;
		//horizontalyz.rotation.y= -Math.PI / 6;
		horizontalyz.rotation.x= -Math.PI / 9;
		scene.add(horizontalyz);
		y = y - 2;
	}
}
}
function camera2D() {
var condition = document.getElementById('2DCamera').checked;
if( condition == true) {
	controls.enableRotate = true;
	controls.maxPolarAngle = Math.PI / 2;
	controls.maxAzimuthAngle = Math.PI / 2;
	camera.position.set(0.5,-0.25,2.2);
	controls.enableKeys = true;
	camera.rotation.y = Math.PI / 2;
	camera.rotation.x = -Math.PI / 2;
	camera.rotation.z = Math.PI / 2;
	//camera.position.x = 1.25;
	camera.position.y = 20;
	//camera.position.z = 2.2;
} else {
	camera.position.set(0,0,2.2);
	controls.maxPolarAngle = Math.PI / 2;
	controls.maxAzimuthAngle = Math.PI / 4;
	controls.enableKeys = true;
	controls.enableRotate = false;
	camera.rotation.x = Math.PI/2;
	camera.position.y = 30;
	camera.rotation.z = Math.PI/2;
}
}

