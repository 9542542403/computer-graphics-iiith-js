var renderer,camera,controls,scene,stats,points;
var initialize = function(){
	    renderer = new THREE.WebGLRenderer( { antialias: false } );
	    renderer.setPixelRatio( window.devicePixelRatio );
	    renderer.setSize( window.innerWidth, window.innerHeight );
	    document.body.appendChild(renderer.domElement);
	    camera = new THREE.PerspectiveCamera(60,window.innerWidth / window.innerHeight,0.1,100);
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

	    var axis= new THREE.AxisHelper(50);
	    axis.position.set(-25.5,-9.7,12.8);
	    axis.rotation.y=Math.PI/2;
	    scene.add(axis);

	    var sg = new THREE.SphereGeometry( 0.1, 32, 32 );
		var sm = new THREE.MeshBasicMaterial( {color: 0xffffff} );
		var s1 = new THREE.Mesh( sg, sm );
		s1.rotation.y=Math.PI/6;
		s1.rotation.x=Math.PI/2;
		s1.position.set(-25.5,-9.7,12.8);
		scene.add(s1);

		var material4 = new THREE.MeshBasicMaterial( {side: THREE.DoubleSide , transparent: true, opacity: 0.5} );
		var geometry4 = new THREE.PlaneGeometry( 1.5, 1.5, 32 );
		material4.transparent = true;
		material4.alphaTest = 0.5;
		var plane = new THREE.Mesh( geometry4, material4 );
		plane.position.set(3, 1, -2.5);
		plane.rotation.x = -Math.PI / 2;
		scene.add( plane );
		
	    	var material = new THREE.LineBasicMaterial({
				color: 0xffffff , linewidth : 2
			});
			var geometry = new THREE.Geometry();
			geometry.vertices.push(
					new THREE.Vector3( 3, 2.2, 0 ),
					new THREE.Vector3( 12.5, 15, 0 )
			);

			var line = new THREE.Line( geometry, material );
			line.rotation.x = -Math.PI / 2;
			scene.add( line );

			var material1 = new THREE.LineBasicMaterial({
				color: 0xffffff , linewidth : 2
			});
			var geometry1 = new THREE.Geometry();
			geometry1.vertices.push(
					new THREE.Vector3( 3, 2.2, 0 ),
					new THREE.Vector3( -5.5, 15, 5 ),
			);
			var line1 = new THREE.Line( geometry1, material1 );
			line1.rotation.x = -Math.PI / 2;
			scene.add( line1 );

			var material2 = new THREE.LineBasicMaterial({
				color: 0xffffff , linewidth : 2
			});
			var geometry2 = new THREE.Geometry();
			geometry2.vertices.push(
					new THREE.Vector3( 3, 2.2, 0 ),
					new THREE.Vector3( -16,-8, 5 )
			);
			var line2 = new THREE.Line( geometry2, material2 );
			line2.rotation.x = -Math.PI / 2;
			scene.add( line2 );
			
			var material3 = new THREE.LineBasicMaterial({
				color: 0xffffff , linewidth : 2
			});
			var geometry3 = new THREE.Geometry();
			geometry3.vertices.push(
					new THREE.Vector3( 3, 2.2, 0 ),
					new THREE.Vector3( 25, -7, 5 )
			);
			var line3 = new THREE.Line( geometry3, material3 );
			line3.rotation.x = -Math.PI / 2;
			scene.add( line3 );

		  var material4 = new THREE.LineDashedMaterial({
			color: 0x00ffff , linewidth : 2
			});
			var geometry4 = new THREE.Geometry();
			geometry4.vertices.push(
					new THREE.Vector3( -2, 6, -20 ),
					new THREE.Vector3( -10, -2, -10 ),
			);
			var line4 = new THREE.Line( geometry4, material4 );
			line4.rotation.x = -Math.PI / 2;
			scene.add( line4 );

			var material41 = new THREE.LineDashedMaterial({
				color: 0x00ffff , linewidth : 0.4
			});
			var geometry41 = new THREE.Geometry();
			geometry41.vertices.push(
					new THREE.Vector3( 2, 2, -50 ),
					new THREE.Vector3( -35.4, -30, -10 ),
			);
			var line41 = new THREE.Line( geometry41, material41 );
			line41.rotation.x = -Math.PI / 2;
			scene.add( line41 );

			
			var material9 = new THREE.LineDashedMaterial({
				color: 0x00ff00, linewidth: 2 
			});
			var geometry9 = new THREE.Geometry();
			geometry9.vertices.push(
					new THREE.Vector3( 1.3, 50, 0 ),
					new THREE.Vector3( 1.3, 5.9, 0 ),
			);

			var line9 = new THREE.Line( geometry9, material9 );
			line9.rotation.x = -Math.PI / 2;
			scene.add( line9 );			


			var material10 = new THREE.LineDashedMaterial({
				color: 0x00ff00, linewidth: 2 
			});
			var geometry10 = new THREE.Geometry();
			geometry10.vertices.push(
					new THREE.Vector3( 1.3, 1, 0 ),
					new THREE.Vector3( 1.3, -50, 0 ),
			);

			var line10 = new THREE.Line( geometry10, material10 );
			line10.rotation.x = -Math.PI / 2;
			scene.add( line10 );	


			var material11 = new THREE.LineDashedMaterial({
				color: 0x00ff00, linewidth: 2 
			});
			var geometry11 = new THREE.Geometry();
			geometry11.vertices.push(
					new THREE.Vector3( -5.5, 8, 0 ),
					new THREE.Vector3( -5.5, -50, 0 ),
			);

			var line11 = new THREE.Line( geometry11, material11 );
			line11.rotation.x = -Math.PI / 2;
			scene.add( line11 );

	    
			var material7 = new THREE.LineBasicMaterial({
				color: 0xff0000 , linewidth: 2
			});
			var geometry7 = new THREE.Geometry();
			geometry7.vertices.push(
					new THREE.Vector3( -100, 2.5, 0 ),
					new THREE.Vector3( 100, 2.5, 0 ),
			);
			var line7 = new THREE.Line( geometry7, material7 );
			scene.add( line7 );



			var material8 = new THREE.LineBasicMaterial({
				color: 0xff0000 , linewidth : 2
			});
			var geometry8 = new THREE.Geometry();
			geometry8.vertices.push(
					new THREE.Vector3( -100, -3, 0 ),
					new THREE.Vector3( 10, -3, 0 ),
			);
			var line8 = new THREE.Line( geometry8, material8 );
			line8.rotation.x = -Math.PI / 2;
			scene.add( line8 );			

	    var req = new XMLHttpRequest();
	    req.open("GET","bunnyobj.txt",true);
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
			grid.vertices.push(new THREE.Vector3( -10, y, z));
			grid.vertices.push(new THREE.Vector3( -10, -y, z));
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
			grid.vertices.push(new THREE.Vector3( -10, y, z));
			grid.vertices.push(new THREE.Vector3( -10, y, -z));
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
			grid.vertices.push(new THREE.Vector3( -10, y, z));
			grid.vertices.push(new THREE.Vector3( -10, -y, z));
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
			grid.vertices.push(new THREE.Vector3( -10, y, z));
			grid.vertices.push(new THREE.Vector3( -10, y, -z));
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
		var x = 30, z = 30;
		var i = 0;
		for(i = -11; i < 10; i += 1 ) {
			var grid = new THREE.Geometry();
			var gridMaterial = new THREE.LineBasicMaterial({color: 0x4F4F4F});
			grid.vertices.push(new THREE.Vector3( x, 0, z));
			grid.vertices.push(new THREE.Vector3( x, 0, -z));
			var verticalyz = new THREE.Line(grid, gridMaterial, THREE.LineSegments);
			scene.add(verticalyz);
			x = x - 3;
		}

		//Horizontal lines
		var x = 30, z = 30;
		var i = 0;
		for(i = -20; i < 10; i += 1 ) {
			var grid = new THREE.Geometry();
			var gridMaterial = new THREE.LineBasicMaterial({color: 0x4F4F4F});
			grid.vertices.push(new THREE.Vector3( x, 0, z));
			grid.vertices.push(new THREE.Vector3( -x, 0, z));
			var horizontalyz = new THREE.Line(grid, gridMaterial, THREE.LineSegments);
			scene.add(horizontalyz);
			z = z - 3;
		}
	} else {
		// Vertical lines
		var x = 30, z = 30;
		var i = 0;
		for(i = -11; i < 10; i += 1 ) {
			var grid = new THREE.Geometry();
			var gridMaterial = new THREE.LineBasicMaterial({color: 'black'});
			grid.vertices.push(new THREE.Vector3( x, 0, z));
			grid.vertices.push(new THREE.Vector3( x, 0, -z));
			var verticalyz = new THREE.Line(grid, gridMaterial, THREE.LineSegments);
			scene.add(verticalyz);
			x = x - 3;
		}

		//Horizontal lines
		var x = 30, z = 30;
		var i = 0;
		for(i = -20; i < 10; i += 1 ) {
			var grid = new THREE.Geometry();
			var gridMaterial = new THREE.LineBasicMaterial({color: 'black'});
			grid.vertices.push(new THREE.Vector3( x, 0, z));
			grid.vertices.push(new THREE.Vector3( -x, 0, z));
			var horizontalyz = new THREE.Line(grid, gridMaterial, THREE.LineSegments);
			scene.add(horizontalyz);
			z = z - 3;
		}

	}
}

// XY Grid
function drawXY() {
	var conditon = document.getElementById('xyAxis').checked;
	if( conditon == true) {
	    var size = 15;
		var divisions = 2;
		var gridHelper = new THREE.GridHelper( size, divisions );
		gridHelper.setColors( 0x0000ff, 0x808080 );
		gridHelper.position.set(5,5.5,1);
		scene.add( gridHelper );
	} else {
	    var size = 15;
		var divisions = 2;
		var gridHelper = new THREE.GridHelper( size, divisions );
		gridHelper.setColors( 0x0000ff, 0x000000 );
		gridHelper.position.set(5,5.5,1);
		scene.add( gridHelper );
	}
}

function camera2D() {
	var condition = document.getElementById('2DCamera').checked;
	if( condition == true) {
		
		var material4 = new THREE.MeshBasicMaterial( {side: THREE.DoubleSide , transparent: true, opacity: 0.5} );
		var geometry4 = new THREE.PlaneGeometry( 1.5, 1.5, 32 );
		material4.transparent = true;
		material4.alphaTest = 0.5;
		var plane = new THREE.Mesh( geometry4, material4 );
		plane.position.set(3, 1, -2.5);
		plane.rotation.x = -Math.PI / 2;
		scene.add( plane );
		var axis= new THREE.AxisHelper(50);
	    axis.position.set(-25.5,-9.7,12.8);
	    axis.rotation.y=Math.PI/2;
	    scene.add(axis);

	    var sg = new THREE.SphereGeometry( 0.1, 32, 32 );
		var sm = new THREE.MeshBasicMaterial( {color: 0xffffff} );
		var s1 = new THREE.Mesh( sg, sm );
		s1.rotation.y=Math.PI/6;
		s1.rotation.x=Math.PI/2;
		s1.position.set(-25.5,-9.7,12.8);
		scene.add(s1);
		
	    	var material = new THREE.LineBasicMaterial({
				color: 0xffffff , linewidth : 2
			});
			var geometry = new THREE.Geometry();
			geometry.vertices.push(
					new THREE.Vector3( 3, 2.2, 0 ),
					new THREE.Vector3( 12.5, 15, 0 )
			);

			var line = new THREE.Line( geometry, material );
			line.rotation.x = -Math.PI / 2;
			scene.add( line );

			var material1 = new THREE.LineBasicMaterial({
				color: 0xffffff , linewidth : 2
			});
			var geometry1 = new THREE.Geometry();
			geometry1.vertices.push(
					new THREE.Vector3( 3, 2.2, 0 ),
					new THREE.Vector3( -5.5, 15, 5 ),
					//new THREE.Vector3( 1, 0, 0 )
			);

			var line1 = new THREE.Line( geometry1, material1 );
			line1.rotation.x = -Math.PI / 2;
			scene.add( line1 );
			var material2 = new THREE.LineBasicMaterial({
				color: 0xffffff , linewidth : 2
			});
			var geometry2 = new THREE.Geometry();
			geometry2.vertices.push(
					new THREE.Vector3( 3, 2.2, 0 ),
					new THREE.Vector3( -16,-8, 5 ),
					//new THREE.Vector3( 1, 0, 0 )
			);

			var line2 = new THREE.Line( geometry2, material2 );
			line2.rotation.x = -Math.PI / 2;
			scene.add( line2 );
			var material3 = new THREE.LineBasicMaterial({
				color: 0xffffff , linewidth : 2
			});
			var geometry3 = new THREE.Geometry();
			geometry3.vertices.push(
					new THREE.Vector3( 3, 2.2, 0 ),
					new THREE.Vector3( 25, -7, 5 ),
					//new THREE.Vector3( 1, 0, 0 )
			);

			var line3 = new THREE.Line( geometry3, material3 );
			line3.rotation.x = -Math.PI / 2;
			scene.add( line3 );

		    var material4 = new THREE.LineDashedMaterial({
				color: 0x00ffff , linewidth : 2
			});
			var geometry4 = new THREE.Geometry();
			geometry4.vertices.push(
					new THREE.Vector3( -2, 6, -20 ),
					new THREE.Vector3( -10, -2, -10 ),
			);
			var line4 = new THREE.Line( geometry4, material4 );
			line4.rotation.x = -Math.PI / 2;
			scene.add( line4 );

			var material41 = new THREE.LineDashedMaterial({
				color: 0x00ffff , linewidth : 0.4
			});
			var geometry41 = new THREE.Geometry();
			geometry41.vertices.push(
					new THREE.Vector3( 2, 2, -50 ),
					new THREE.Vector3( -35.4, -30, -10 ),
			);
			var line41 = new THREE.Line( geometry41, material41 );
			line41.rotation.x = -Math.PI / 2;
			scene.add( line41 );

			
			var material9 = new THREE.LineDashedMaterial({
				color: 0x00ff00, linewidth: 2 
			});
			var geometry9 = new THREE.Geometry();
			geometry9.vertices.push(
					new THREE.Vector3( 1.3, 50, 0 ),
					new THREE.Vector3( 1.3, 5.9, 0 ),
			);

			var line9 = new THREE.Line( geometry9, material9 );
			line9.rotation.x = -Math.PI / 2;
			scene.add( line9 );			


			var material10 = new THREE.LineDashedMaterial({
				color: 0x00ff00, linewidth: 2 
			});
			var geometry10 = new THREE.Geometry();
			geometry10.vertices.push(
					new THREE.Vector3( 1.3, 1, 0 ),
					new THREE.Vector3( 1.3, -50, 0 ),
			);

			var line10 = new THREE.Line( geometry10, material10 );
			line10.rotation.x = -Math.PI / 2;
			scene.add( line10 );	


			var material11 = new THREE.LineDashedMaterial({
				color: 0x00ff00, linewidth: 2 
			});
			var geometry11 = new THREE.Geometry();
			geometry11.vertices.push(
					new THREE.Vector3( -5.5, 8, 0 ),
					new THREE.Vector3( -5.5, -50, 0 ),
			);

			var line11 = new THREE.Line( geometry11, material11 );
			line11.rotation.x = -Math.PI / 2;
			scene.add( line11 );

	    
			var material7 = new THREE.LineBasicMaterial({
				color: 0xff0000 , linewidth: 2
			});
			var geometry7 = new THREE.Geometry();
			geometry7.vertices.push(
					new THREE.Vector3( -100, 2.5, 0 ),
					new THREE.Vector3( 100, 2.5, 0 ),
			);
			var line7 = new THREE.Line( geometry7, material7 );
			scene.add( line7 );



			var material8 = new THREE.LineBasicMaterial({
				color: 0xff0000 , linewidth : 2
			});
			var geometry8 = new THREE.Geometry();
			geometry8.vertices.push(
					new THREE.Vector3( -100, -3, 0 ),
					new THREE.Vector3( 10, -3, 0 ),
			);
			var line8 = new THREE.Line( geometry8, material8 );
			line8.rotation.x = -Math.PI / 2;
			scene.add( line8 );			

	    var req = new XMLHttpRequest();
	    req.open("GET","bunnyobj.txt",true);
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


	} else {
			var axis= new THREE.AxisHelper(50);
		    axis.position.set(-25.5,-9.7,12.8);
		    axis.rotation.y=Math.PI/2;
		    scene.add(axis);

		    var sg = new THREE.SphereGeometry( 0.1, 32, 32 );
			var sm = new THREE.MeshBasicMaterial( {color: 0xffffff} );
			var s1 = new THREE.Mesh( sg, sm );
			s1.rotation.y=Math.PI/6;
			s1.rotation.x=Math.PI/2;
			s1.position.set(-25.5,-9.7,12.8);
			scene.add(s1);

			var material4 = new THREE.MeshBasicMaterial( {side: THREE.DoubleSide , transparent: true, opacity: 0.5} );
			var geometry4 = new THREE.PlaneGeometry( 1.5, 1.5, 32 );
			material4.transparent = true;
			material4.alphaTest = 0.5;
			var plane = new THREE.Mesh( geometry4, material4 );
			plane.position.set(3, 1, -2.5);
			plane.rotation.x = -Math.PI / 2;
			scene.add( plane );

		    var material = new THREE.LineBasicMaterial({
			color: 0x000000 , linewidth : 2
			});
			var geometry = new THREE.Geometry();
			geometry.vertices.push(
					new THREE.Vector3( 3, 2.2, 0 ),
					new THREE.Vector3( 12.5, 15, 0 )
			);

			var line = new THREE.Line( geometry, material );
			line.rotation.x = -Math.PI / 2;
			scene.add( line );

			var material1 = new THREE.LineBasicMaterial({
				color: 0x000000 , linewidth : 2
			});
			var geometry1 = new THREE.Geometry();
			geometry1.vertices.push(
					new THREE.Vector3( 3, 2.2, 0 ),
					new THREE.Vector3( -5.5, 15, 5 )
			);

			var line1 = new THREE.Line( geometry1, material1 );
			line1.rotation.x = -Math.PI / 2;
			scene.add( line1 );
			var material2 = new THREE.LineBasicMaterial({
				color: 0x000000 , linewidth : 2
			});
			var geometry2 = new THREE.Geometry();
			geometry2.vertices.push(
					new THREE.Vector3( 3, 2.2, 0 ),
					new THREE.Vector3( -16,-8, 5 )
			);

			var line2 = new THREE.Line( geometry2, material2 );
			line2.rotation.x = -Math.PI / 2;
			scene.add( line2 );
			var material3 = new THREE.LineBasicMaterial({
				color: 0x000000 , linewidth : 2
			});
			var geometry3 = new THREE.Geometry();
			geometry3.vertices.push(
					new THREE.Vector3( 3, 2.2, 0 ),
					new THREE.Vector3( 25, -7, 5 )
			);

			var line3 = new THREE.Line( geometry3, material3 );
			line3.rotation.x = -Math.PI / 2;
			scene.add( line3 );

		    var material4 = new THREE.LineDashedMaterial({
				color: 0x000000 , linewidth : 2
			});
			var geometry4 = new THREE.Geometry();
			geometry4.vertices.push(
					new THREE.Vector3( -2, 6, -20 ),
					new THREE.Vector3( -10, -2, -10 ),
			);
			var line4 = new THREE.Line( geometry4, material4 );
			line4.rotation.x = -Math.PI / 2;
			scene.add( line4 );

			var material41 = new THREE.LineDashedMaterial({
				color: 0x000000 , linewidth : 0.4
			});
			var geometry41 = new THREE.Geometry();
			geometry41.vertices.push(
					new THREE.Vector3( 2, 2, -50 ),
					new THREE.Vector3( -35.4, -30, -10 ),
			);
			var line41 = new THREE.Line( geometry41, material41 );
			line41.rotation.x = -Math.PI / 2;
			scene.add( line41 );

			
			var material5 = new THREE.LineDashedMaterial({
				color: 0x000000 , linewidth : 2
			});
			var geometry5 = new THREE.Geometry();
			geometry5.vertices.push(
					new THREE.Vector3( -19.3, 50, 0 ),
					new THREE.Vector3( -19.3, -9.7, 0 ),
			);

			var material8 = new THREE.LineBasicMaterial({
				color: 0xff0000 , linewidth : 2
			});
			var geometry8 = new THREE.Geometry();
			geometry8.vertices.push(
					new THREE.Vector3( -100, -3, 0 ),
					new THREE.Vector3( 10, -3, 0 ),
			);
			var line8 = new THREE.Line( geometry8, material8 );
			line8.rotation.x = -Math.PI / 2;
			scene.add( line8 );	

			var material9 = new THREE.LineDashedMaterial({
				color: 0x000000, linewidth: 2 
			});
			var geometry9 = new THREE.Geometry();
			geometry9.vertices.push(
					new THREE.Vector3( 1.3, 50, 0 ),
					new THREE.Vector3( 1.3, 5.9, 0 ),
			);		

			var line9 = new THREE.Line( geometry9, material9 );
			line9.rotation.x = -Math.PI / 2;
			scene.add( line9 );			


			var material10 = new THREE.LineDashedMaterial({
				color: 0x000000, linewidth: 2 
			});
			var geometry10 = new THREE.Geometry();
			geometry10.vertices.push(
					new THREE.Vector3( 1.3, 1, 0 ),
					new THREE.Vector3( 1.3, -50, 0 ),
			);

			var line10 = new THREE.Line( geometry10, material10 );
			line10.rotation.x = -Math.PI / 2;
			scene.add( line10 );	


			var material11 = new THREE.LineDashedMaterial({
				color: 0x000000, linewidth: 2 
			});
			var geometry11 = new THREE.Geometry();
			geometry11.vertices.push(
					new THREE.Vector3( -5.5, 8, 0 ),
					new THREE.Vector3( -5.5, -50, 0 ),
			);

			var line11 = new THREE.Line( geometry11, material11 );
			line11.rotation.x = -Math.PI / 2;
			scene.add( line11 );


	    
			var material7 = new THREE.LineBasicMaterial({
				color: 0x000000 , linewidth: 2
			});
			var geometry7 = new THREE.Geometry();
			geometry7.vertices.push(
					new THREE.Vector3( -100, 2.5, 0 ),
					new THREE.Vector3( 100, 2.5, 0 ),
			);
			var line7 = new THREE.Line( geometry7, material7 );
			scene.add( line7 );



			var material8 = new THREE.LineBasicMaterial({
				color: 0x000000 , linewidth : 2
			});
			var geometry8 = new THREE.Geometry();
			geometry8.vertices.push(
					new THREE.Vector3( -100, -3, 0 ),
					new THREE.Vector3( 10, -3, 0 ),
			);
			var line8 = new THREE.Line( geometry8, material8 );
			line8.rotation.x = -Math.PI / 2;
			scene.add( line8 );

		var req = new XMLHttpRequest();
	    req.open("GET","bunnyobj.txt",true);
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
	}
}

function startTransistion() {

	xd = Number(document.getElementById('xUnits').value);
	yd = Number(document.getElementById('yUnits').value);
	zd = Number(document.getElementById('zUnits').value);

	camera.rotation.x = xd;
	camera.rotation.y = yd;
	camera.rotation.z = zd;

}