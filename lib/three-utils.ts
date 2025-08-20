import * as THREE from 'three'; // Importing Three.js library

// Function to create a scene
export const createScene = (): THREE.Scene => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000); // Set background to black
    return scene;
};

// Function to create a camera
export const createCamera = (width: number, height: number): THREE.PerspectiveCamera => {
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.set(0, 0, 5); // Set camera position
    return camera;
};

// Function to create a renderer
export const createRenderer = (width: number, height: number): THREE.WebGLRenderer => {
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000); // Set clear color to black
    return renderer;
};

// Function to add a light to the scene
export const addLight = (scene: THREE.Scene): void => {
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Ambient light
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1); // Directional light
    directionalLight.position.set(1, 1, 1).normalize();
    scene.add(directionalLight);
};

// Function to create a basic cube
export const createCube = (): THREE.Mesh => {
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshStandardMaterial({ color: 0xff69b4 }); // Pink color
    return new THREE.Mesh(geometry, material);
}; 

// Default export for utility functions
export default {
    createScene,
    createCamera,
    createRenderer,
    addLight,
    createCube,
};