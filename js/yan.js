import * as THREE from 'https://unpkg.com/three@0.147.0/build/three.module.js';
import { MindARThree } from 'https://cdn.jsdelivr.net/npm/mind-ar@1.2.0/dist/mindar-face-three.prod.js';

const mindarThree = new MindARThree({
  container: document.querySelector("#container"),
});
const { renderer, scene, camera } = mindarThree;

const light = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1);
scene.add(light);

const faceMesh = mindarThree.addFaceMesh();


// start();
const bnt1 = document.getElementById("btn1");

bnt1.onclick = async () => {
  const texture = new THREE.TextureLoader().load('/p1');
  faceMesh.material.map = texture;
  faceMesh.material.transparent = true;
  faceMesh.material.needsUpdate = true;
  scene.add(faceMesh);

  const start = async () => {
    await mindarThree.start();
    renderer.setAnimationLoop(() => {
      renderer.render(scene, camera);
    });
  }
  start()
}

const bnt2 = document.getElementById("btn2");

bnt2.onclick = async () => {
  const texture = new THREE.TextureLoader().load('/p2');
  faceMesh.material.map = texture;
  faceMesh.material.transparent = true;
  faceMesh.material.needsUpdate = true;
  scene.add(faceMesh);

  const start = async () => {
    await mindarThree.start();
    renderer.setAnimationLoop(() => {
      renderer.render(scene, camera);
    });
  }
  start()
}

const bnt3 = document.getElementById("btn3");

bnt3.onclick = async () => {
  const texture = new THREE.TextureLoader().load('/p3');
  faceMesh.material.map = texture;
  faceMesh.material.transparent = true;
  faceMesh.material.needsUpdate = true;
  scene.add(faceMesh);

  const start = async () => {
    await mindarThree.start();
    renderer.setAnimationLoop(() => {
      renderer.render(scene, camera);
    });
  }
  start()
}

const bnt4 = document.getElementById("btn4");

bnt4.onclick = async () => {
  const texture = new THREE.TextureLoader().load('/p4');
  faceMesh.material.map = texture;
  faceMesh.material.transparent = true;
  faceMesh.material.needsUpdate = true;
  scene.add(faceMesh);

  const start = async () => {
    await mindarThree.start();
    renderer.setAnimationLoop(() => {
      renderer.render(scene, camera);
    });
  }
  start()
}

export default function f() {
  console.log('233...')
}