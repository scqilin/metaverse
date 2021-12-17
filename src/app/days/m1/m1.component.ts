import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
@Component({
  selector: 'app-m1',
  template: `
    <div #container></div>
  `,
  styles: [
  ]
})
export class M1Component implements OnInit {
  request: any;
  @ViewChild('container') container: ElementRef | undefined;
  constructor() { }

  ngOnInit(): void {

  }
  ngAfterViewInit(): void {
    this.initScene();
  }

  initScene() {
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 10, 30)

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x7ab7ee, 1);
    this.container?.nativeElement.appendChild(renderer.domElement);

    scene.fog = new THREE.Fog(0x7ab7ee, 0, 200);

    let spheredr = 10;

    const geometry2 = new THREE.SphereGeometry(spheredr, 60, 60);
    const material2 = new THREE.MeshPhongMaterial({ color: 0x588050 });
    const sphere = new THREE.Mesh(geometry2, material2);
    scene.add(sphere);
    const groupall = new THREE.Group();
    scene.add(groupall);
    const material = new THREE.MeshBasicMaterial({ color: 0x89554e });
    const material3 = new THREE.MeshPhongMaterial({ color: 0x588050 });
    for (let i = 0; i < 66; i++) {
      const group = new THREE.Group();
      groupall.add(group);
      const geometry = new THREE.BoxGeometry(.2, 1, .2);
      const cube = new THREE.Mesh(geometry, material);
      cube.position.set(0, spheredr + 0.5, 0);
      group.add(cube);
      const geometry3 = new THREE.ConeGeometry(0.6, 1, 6);
      const cone = new THREE.Mesh(geometry3, material3);
      cone.position.set(0, spheredr + 1.2, 0);
      let k = 1+Math.random()*0.6-0.3
      cone.scale.set(k,k,k);
      group.add(cone);

      group.rotation.set(Math.PI*2*Math.random(), Math.PI*2*Math.random(), Math.PI*2*Math.random());
    }


    renderer.render(scene, camera);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.minDistance = 14;

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(1, 1, 1);
    scene.add(light);

    const ambientLight = new THREE.AmbientLight(0x444444);
    scene.add(ambientLight);

    const animate = () => {
      this.request = requestAnimationFrame(animate);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.render(scene, camera);
      groupall.rotation.y += 0.001
    }
    animate();

    const loader = new GLTFLoader();
    loader.load('assets/models/tree.gltf', (gltf: any) => {

      let meshs: any[] = [];
      gltf.scene.children.forEach((element: { type: string; }) => {
        let mesh: any = element;
        meshs.push(mesh);

      });

      for(let i=0;i<60;i++){
        meshs.forEach((mesh: any) => {
          const group = new THREE.Group();
          groupall.add(group);
          group.add(mesh.clone());
          mesh.position.set(0, spheredr , 0);
          let scale = 0.15+Math.random()*0.1
          mesh.scale.set(scale,scale,scale);
          group.rotation.set(Math.PI*2*Math.random(), Math.PI*2*Math.random(), Math.PI*2*Math.random());

        })
      }


    });


  }
  ngOnDestroy(): void {
      cancelAnimationFrame(this.request);
  }


}
