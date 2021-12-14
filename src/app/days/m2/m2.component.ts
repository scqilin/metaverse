import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import * as TWEEN from '@tweenjs/tween.js';
@Component({
  selector: 'app-m2',
  template: `
    <div #container></div>
  `,
  styles: [
  ]
})
export class M2Component implements OnInit {
  request: any
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

    const renderer = new THREE.WebGLRenderer({
      antialias: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x7ab7ee, 1);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    this.container?.nativeElement.appendChild(renderer.domElement);


    scene.fog = new THREE.Fog(0x7ab7ee, 0, 200);
    scene.add(new THREE.AxesHelper(10));
    let spheredr = 10;

    const geometrySphere = new THREE.SphereGeometry(spheredr, 60, 60);
    const materialSphere = new THREE.MeshPhongMaterial({ color: 0x588050 });
    const sphere = new THREE.Mesh(geometrySphere, materialSphere);
    sphere.receiveShadow = true;
    scene.add(sphere);

    const groupall = new THREE.Group();
    scene.add(groupall);

    const materialTrunk = new THREE.MeshBasicMaterial({ color: 0x89554e });
    const materialCrown = new THREE.MeshPhongMaterial({ color: 0x588050 });



    let scaleK = 1; //比例系数
    let addOneTree = (x: number, y: number, z: number) => {
      const group = new THREE.Group();
      group.scale.set(0.1, 0.1, 0.1);
      groupall.add(group);
      const geometry = new THREE.BoxGeometry(0.2 * scaleK, 0.2 * scaleK, 1 * scaleK);
      const cube = new THREE.Mesh(geometry, materialTrunk);
      cube.position.set(0, 0, -scaleK * 0.5);
      cube.castShadow = true;
      group.add(cube);
      const geometry3 = new THREE.ConeGeometry(0.6 + Math.random() * 0.6 - 0.3, 1 * scaleK, 6);
      const cone = new THREE.Mesh(geometry3, materialCrown);
      cone.position.set(0, 0, -1.5 * scaleK);
      cone.rotateX(-Math.PI / 2);
      cone.castShadow = true;
      group.add(cone);
      this.tweenScale(group, 0.1, 1, 2000)
      group.position.set(x, y, z);
      group.lookAt(new THREE.Vector3(0, 0, 0));
    }

    renderer.render(scene, camera);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.minDistance = 14;
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(10, 10, 10);
    light.castShadow = true;
    light.shadow.camera.near = 0.1;
    light.shadow.camera.far = 200;
    light.shadow.camera.left = -50;
    light.shadow.camera.right = 50;
    light.shadow.camera.top = 50;
    light.shadow.camera.bottom = -50;
    light.shadow.mapSize.width = 1024;
    light.shadow.mapSize.height = 1024;
    scene.add(light);

    const ambientLight = new THREE.AmbientLight(0x444444);
    scene.add(ambientLight);

    const animate = () => {
      this.request = requestAnimationFrame(animate);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.render(scene, camera);
      groupall.rotation.y += 0.0004;
      TWEEN.update();
    }
    animate();
    let num = 0;
    let seti1 = setInterval(() => {
      const xyz = this.spherical(spheredr);
      addOneTree(xyz.x, xyz.y, xyz.z);
      num++;
      if (num > 128) {
        clearInterval(seti1)
      }
    }, 200);

  }

  tweenScale(obj: any, a: number, b: number, time: number) {
    const dscale = { x: a }
    const tween = new TWEEN.Tween(dscale)
      .to({ x: b }, time)
      .easing(TWEEN.Easing.Quadratic.Out)
      .onUpdate(() => {
        obj?.scale.set(dscale.x, dscale.x, dscale.x);
      })
    tween.start();

  }
  private spherical(k: number) {
    let u = Math.random() * 2 - 1;
    let v = Math.random() * 2 - 1;
    let r = Math.pow(u, 2) + Math.pow(v, 2);

    while (r > 1) {
      u = Math.random() * 2 - 1;
      v = Math.random() * 2 - 1;
      r = Math.pow(u, 2) + Math.pow(v, 2);
    }

    let x = 2 * u * Math.sqrt(1 - r);
    let y = 2 * v * Math.sqrt(1 - r);
    let z = 1 - 2 * r;

    return { x: k * x, y: k * y, z: k * z };
  }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.request);
  }


}
