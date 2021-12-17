import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
@Component({
  selector: 'app-m4',
  template: `
      <div #container></div>
  `,
  styles: [
  ]
})
export class M4Component implements OnInit {
  request: any;
  @ViewChild('container') container: ElementRef | undefined;
  scene: THREE.Scene;
  constructor() {
    this.scene = new THREE.Scene();
  }

  ngOnInit(): void {

  }
  ngAfterViewInit(): void {
    this.initScene();
    // this.addMesh();
  }

  initScene() {
    const scene = this.scene;
    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 10, 30)

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x7ab7ee, 1);
    renderer.render(scene, camera);

    this.container?.nativeElement.appendChild(renderer.domElement);

    scene.fog = new THREE.Fog(0x7ab7ee, 0, 200);
    // scene.add(new THREE.AxesHelper(20));
    scene.add(new THREE.GridHelper(20, 10));

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.minDistance = 14;

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(1, 1, 1);
    scene.add(light);

    const ambientLight = new THREE.AmbientLight(0x444444,3);
    scene.add(ambientLight);

    const animate = () => {
      this.request = requestAnimationFrame(animate);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.render(scene, camera);
    }
    animate();
    const loader = new GLTFLoader();
    loader.load('assets/models/steve/scene.gltf', (gltf: any) => {
      scene.add(gltf.scene);
      gltf.scene.scale.set(0.2, 0.2, 0.2);
      gltf.scene.position.set(0, 3.2, 0);
      // gltf.scene.children.forEach((element: { type: string; }) => {
      //   let mesh: any = element;
      // });
    });


  }

  addMesh() {
    const scene = this.scene;
    const groupall = new THREE.Group();
    scene.add(groupall);
    let w = 1;

    const geometry = new THREE.BoxBufferGeometry(w, w, w);
    const material = new THREE.MeshPhongMaterial({ color: 0x588050 });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(0, 0, 0);
    groupall.add(mesh);


  }
  ngOnDestroy(): void {
    cancelAnimationFrame(this.request);
  }


}

