import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import * as TWEEN from '@tweenjs/tween.js';
import { SimplexNoise } from 'three/examples/jsm/math/SimplexNoise.js';

@Component({
  selector: 'app-m3',
  template: `
    <span style="position: absolute;bottom:10px;left:5px">吞噬大树的数量：{{eattingnum}}</span>
    <div #container></div>
  `,
  styles: [
  ]
})
export class M3Component implements OnInit {
  request: any
  treenum = 128
  eattingnum = 0;
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
    let treearr:any = [];
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
      treearr.push(group);
    }

    renderer.render(scene, camera);
    //控制器
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.minDistance = 14;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.5;

    //灯光
    const light = new THREE.DirectionalLight(0xffffff);
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

    const ambientLight = new THREE.AmbientLight(0x444444,1);
    scene.add(ambientLight);
    const spotLight = new THREE.SpotLight(0xffffff, 1);
    spotLight.position.set(-20, -20, -20);
    spotLight.castShadow = true;
    spotLight.shadow.mapSize.width = 1024;
    spotLight.shadow.mapSize.height = 1024;

    scene.add(spotLight);

    const animate = () => {
      this.request = requestAnimationFrame(animate);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.render(scene, camera);
      TWEEN.update();
      controls.update();
    }
    animate();
    //添加树
    let num = 0;
    let seti1 = setInterval(() => {
      const xyz = this.spherical(spheredr);
      addOneTree(xyz.x, xyz.y, xyz.z);
      num++;
      if (num > this.treenum) {
        clearInterval(seti1)
      }
    }, 200);

    const simplex = new SimplexNoise();
    const geometry = new THREE.SphereBufferGeometry(0.5, 32, 32);
    let  material = new THREE.MeshPhongMaterial({ color: 0x58a050 });//0x588050
    const materialr = new THREE.MeshPhongMaterial({ color: 0xff8000 });
    const cube = new THREE.Mesh(geometry, materialr);
    const uv = this.spherical(spheredr);
    const xyz = this.uvToxyz(uv.u ,uv.v, spheredr);
    cube.position.set(xyz[0], xyz[1], xyz[2]);
    // cube.lookAt(new THREE.Vector3(0, 0, 0));
    scene.add(cube);
    const simk = 1/12266;
    // const uv = { u: 90, v:-30 };
    let _i = 0;
    let grps:any = [];
    let nums = 12;
    for(let i = 0; i < nums; i++){
      const cube2 = new THREE.Mesh(geometry, material);
      cube2.castShadow = true;
      groupall.add(cube2);
      grps.push(cube2);
    }
    setInterval(() => {
      _i += 1;
      const s = (1+.3*Math.sin(_i*11227)+Math.sin(_i*3/103) + Math.sin(_i/171) )* Math.PI * simplex.noise4d(cube.position.x*simk, cube.position.y*simk, cube.position.z*simk, .07);
      uv.u += 1*Math.sin(s);
      uv.v += 0.5*Math.cos(s);

      let xyz = this.uvToxyz(uv.u, uv.v, spheredr );

      cube.position.set(xyz[0], xyz[1], xyz[2]);
      // let posx = grps[_i%grps.length].position.x;
      // let posy = grps[_i%grps.length].position.y;
      // let posz = grps[_i%grps.length].position.z;
      // let len = grps.length - 1
      for (let i = grps.length - 1; i > 0; i--) {
        grps[i].position.copy(grps[i - 1].position);
      }
      grps[0].position.set(xyz[0], xyz[1], xyz[2]);
      // const xyz2 = this.uvToxyz(uv.u, uv.v, spheredr+15 );
      // camera.position.set(xyz2[0]+0.001, xyz2[1]+0.001, xyz2[2]+0.001);
      // camera.lookAt(new THREE.Vector3(0, 0, 0));
      // let onetag = true
      treearr.forEach((group:any) => {
        const distance = group.position.distanceTo(cube.position);
        if (distance < 1 && group.visible === true) {
          // onetag = false;
          this.eattingnum ++ ;
          const uvr = this.spherical(spheredr);
          const xyzr = this.uvToxyz(uvr.u ,uvr.v, spheredr);
          group.position.set(xyzr[0], xyzr[1], xyzr[2]);
          this.tweenScale(group, 0.1, 1, 2000)
          group.lookAt(new THREE.Vector3(0, 0, 0));

          const stsmesh = new THREE.Mesh(geometry, material);
          stsmesh.castShadow = true;
          groupall.add(stsmesh);
          grps.push(stsmesh);
          // _i += 1;
          // stsmesh.position.set(xyz[0], xyz[1], xyz[2]);
        }
      })
      if(this.eattingnum%10 === 9){
        material.color.r = (56+Math.floor(this.eattingnum/10))/256
      }

    }, 10);

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
  // u -1~1 v -1~1
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

    return { u: u * 180, v: v * 90, x: k * x, y: k * y, z: k * z };
  }
  //u -180~180 v -90~90
  private uvToxyz(u: number, v: number, r: number) {
    let wd = u * Math.PI / 180,
      jd = v * Math.PI / 180,
      x = -r * Math.cos(jd) * Math.cos(wd),
      y = -r * Math.sin(jd),
      z = r * Math.cos(jd) * Math.sin(wd);
    return [x, y, z];
  }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.request);
  }

}
