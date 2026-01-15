import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const loader = new GLTFLoader();
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });  

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const ambientLight = new THREE.AmbientLight(0xffffff, 10);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 4); 
directionalLight.position.set(10, 10, 10); 
scene.add(directionalLight);

const pointLight = new THREE.PointLight(0xffffff, 10, 100); 
pointLight.position.set(5, 5, 5); 
scene.add(pointLight);

const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x444444, 1); 
scene.add(hemisphereLight);

ambientLight.intensity = 20; 
directionalLight.intensity = 5;

const pointLight2 = new THREE.PointLight(0xffffff, 2, 100);
pointLight2.position.set(0, 10, 0); 
scene.add(pointLight2);

const pointLight3 = new THREE.PointLight(0xffffff, 2, 100); 
pointLight3.position.set(0, 0, 10); 
scene.add(pointLight3);

const directionalLight2 = new THREE.DirectionalLight(0xffffff, 6);
directionalLight2.position.set(-10, 10, -10); 
scene.add(directionalLight2);

renderer.toneMapping = THREE.ACESFilmicToneMapping; 
renderer.toneMappingExposure = 5;

const container = document.getElementById('canvas-container');
container.appendChild(renderer.domElement);

renderer.setSize(container.clientWidth, container.clientHeight);

const modelPath = './textured_mesh.glb';

loader.load(
    modelPath, 
    function (glb) {
        glb.scene.traverse(function (child) {
            if (child.isMesh && child.name === "nombre_base_o_plano") {
                scene.remove(child);  
            }
        });
        scene.add(glb.scene);
    },
    undefined,
    function (error) {
        console.error('Error al cargar el modelo:', error);
    }
);



camera.position.z = 2;

const controls = new OrbitControls(camera, renderer.domElement);

function animate() {
    requestAnimationFrame(animate);

    controls.update();  

    renderer.render(scene, camera);
}

animate();

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
