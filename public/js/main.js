// prepare dom to render
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

window.addEventListener("resize", () => {
  let width = window.innerWidth;
  let height = window.innerHeight;
  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
});

// add object to scene
var geometry = new THREE.SphereGeometry(5, 20, 20);
var material = new THREE.MeshBasicMaterial({
  color: 0xffff00,
  wireframe: true
});
var sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

// set camera position
camera.position.z = 32;

//update logic
var update = function() {
  sphere.rotation.x += 0.01;
  sphere.rotation.y += 0.01;
};

//draw scene
var render = function() {
  renderer.render(scene, camera);
};

//run game loop (update, render, repeat)
var GameLoop = function() {
  requestAnimationFrame(GameLoop);

  update();
  render();
};

GameLoop();
