var canvas = document.getElementById('confetti')
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: false
})

var width = canvas.innerWidth
console.log(width);
var height = width/16*9
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setClearColor(0x191919, 0.3);
renderer.setSize(width, height);

const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 3000);

const scene = new THREE.Scene();

const light2 = new THREE.PointLight(0xffffff, 0.75);
light2.position.x = 0;
light2.position.y = -1500;
light2.position.z = 1500;
scene.add(light2)

const light3 = new THREE.AmbientLight(0xffffff, 0.2);
light3.position.x = 0
light3.position.y = 0
light3.position.z = 0
scene.add(light3)


renderer.render(scene, camera);
