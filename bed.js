var camera, controls, scene, renderer;
init();
animate();

function init() {
  scene = new THREE.Scene();
  scene.background = new THREE.Color( 0xEDF6F6 );

  renderer = new THREE.WebGLRenderer();
  renderer.setClearColor( 0xffffff, 0);
  renderer.setSize( 500, 500 );
  document.getElementById("bed").appendChild(renderer.domElement);

  camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 1000 );
  camera.position.z = 1000;

  controls = new THREE.OrbitControls( camera, renderer.domElement );
  controls.enableZoom = true;

  var geometry = new THREE.BoxGeometry( 1000, 100, 500 );

  var material = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    vertexColors: THREE.FaceColors
  });

  geometry.faces[0].color = new THREE.Color(0x333333);
  geometry.faces[1].color = new THREE.Color(0x333333);
  geometry.faces[2].color = new THREE.Color(0x333333);
  geometry.faces[3].color = new THREE.Color(0x333333);
  geometry.faces[4].color = new THREE.Color(0xffffff);
  geometry.faces[5].color = new THREE.Color(0xffffff);
  geometry.faces[6].color = new THREE.Color(0xffffff);
  geometry.faces[7].color = new THREE.Color(0xffffff);
  geometry.faces[8].color = new THREE.Color(0x333333);
  geometry.faces[9].color = new THREE.Color(0x333333);
  geometry.faces[10].color = new THREE.Color(0x333333);
  geometry.faces[11].color = new THREE.Color(0x333333);

  var cube = new THREE.Mesh( geometry, material );
  scene.add( cube );

}
  function animate() {
      requestAnimationFrame( animate );
      controls.update();
      render();
    }


  function render() {
    renderer.render( scene, camera );
  }
