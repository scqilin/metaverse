import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { ARButton } from 'three/examples/jsm/webxr/ARButton';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment';
import { USDZExporter } from 'three/examples/jsm/exporters/USDZExporter';

@Component({
  selector: 'app-m5',
  template: ` <div #container></div> `,
  styles: [],
})
export class M5Component implements OnInit {
  request: any;
  @ViewChild('container') container: ElementRef | undefined;
  scene: THREE.Scene;
  constructor() {
    this.scene = new THREE.Scene();
  }

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    this.initScene();
  }

  initScene() {
    const scene = this.scene;
    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 10, 30);

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

    const ambientLight = new THREE.AmbientLight(0x444444, 3);
    scene.add(ambientLight);

    const animate = () => {
      this.request = requestAnimationFrame(animate);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.render(scene, camera);
    };
    animate();

    //你的three代码

    const boxGeo = new THREE.BoxBufferGeometry(1, 1, 1);
    const boxMat = new THREE.MeshStandardMaterial({
      color: 'red',
    });
    const box = new THREE.Mesh(boxGeo, boxMat);
    scene.add(box);
    box.position.set(0, 0, -0.5);
    box.scale.set(0.1, 0.1, 0.1);

    const XR = () => {
      renderer.xr.enabled = true;
      document.body.appendChild(ARButton.createButton(renderer));
      const controller = renderer.xr.getController(0);
      scene.add(controller);
    };

    const appleAR = () => {
      const pmremGenerator = new THREE.PMREMGenerator(renderer);
      scene.environment = pmremGenerator.fromScene(
        new RoomEnvironment(),
        0.04
      ).texture;
      const applerARExporter = new USDZExporter();
      const dom = this.container?.nativeElement;
      async function USDZModel() {
        const arraybuffer = await applerARExporter.parse(box);
        const blob = new Blob([arraybuffer], {
          type: 'application/octet-stream',
        });
        const a = document.createElement('a');
        a.id = 'link';
        a.href = '';
        a.download = 'asset.usdz';
        dom.appendChild(a);
        const img = document.createElement('img');
        img.id = 'button';
        img.style.width = '100px';
        img.src = 'assets/images/arkit.png';
        a.appendChild(img);
        a.style.position = 'absolute';
        a.style.bottom = '15px';
        a.style.left = 'calc(50%-40px)';

        a.href = URL.createObjectURL(blob);
      }
      USDZModel();
    };

    const u = navigator.userAgent;
    if (u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1) {
      appleAR();
    } else {
      XR();
    }
  }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.request);
  }
}
