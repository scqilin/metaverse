import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { SimplexNoise } from 'three/examples/jsm/math/SimplexNoise';

class SceneBackground {
  request: any;
  container: any;
  starttag = false;
  constructor(domElement: any) {
    this.container = domElement;
    this.initScene();
  }


  initScene() {
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 0, 230)

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x7ab7ee, 0);
    this.container.appendChild(renderer.domElement);


    renderer.render(scene, camera);

    // const controls = new OrbitControls(camera, renderer.domElement);
    // controls.minDistance = 14;

    const directionalLight = new THREE.DirectionalLight("#fff", 2);
    directionalLight.position.set(0, 50, -20);
    scene.add(directionalLight);

    let ambientLight = new THREE.AmbientLight("#ffffff", 1);
    ambientLight.position.set(0, 20, 20);
    scene.add(ambientLight);




    const loader = new THREE.TextureLoader();
    const textureSphereBg = loader.load('assets/images/bg3-je3ddz.jpeg');
    const texturenucleus = loader.load('assets/images/star-nc8wkw.jpeg');
    const textureStar = loader.load("assets/images/p1-g3zb2a.png");
    const texture1 = loader.load("assets/images/p2-b3gnym.png");
    const texture2 = loader.load("assets/images/p3-ttfn70.png");
    const texture4 = loader.load("assets/images/p4-avirap.png");
    texturenucleus.anisotropy = 16;

    let icosahedronGeometry = new THREE.IcosahedronGeometry(30, 10);
    let lambertMaterial = new THREE.MeshPhongMaterial({ map: texturenucleus });
    const nucleus = new THREE.Mesh(icosahedronGeometry, lambertMaterial);
    // scene.add(nucleus);
    const nucarr: any = icosahedronGeometry.attributes.position.array;

    textureSphereBg.anisotropy = 16;
    let geometrySphereBg = new THREE.SphereBufferGeometry(250, 40, 40);
    let materialSphereBg = new THREE.MeshBasicMaterial({
      side: THREE.BackSide,
      map: textureSphereBg,
    });
    const sphereBg = new THREE.Mesh(geometrySphereBg, materialSphereBg);
    // scene.add(sphereBg);

    let starsGeometry = new THREE.BufferGeometry();
    let vertices: any = [];
    let verticescopy: any = [];
    let velocitys = [];
    for (let i = 0; i < 500; i++) {
      let particleStar = randomPointSphere(150);
      velocitys.push(THREE.MathUtils.randInt(50, 200));
      vertices.push(...particleStar);
      verticescopy.push(...particleStar);
    }
    starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    let starsMaterial = new THREE.PointsMaterial({
      size: 5,
      color: "#ffffff",
      transparent: true,
      opacity: 0.8,
      map: textureStar,
      blending: THREE.AdditiveBlending,
    });
    starsMaterial.depthWrite = false;
    const stars = new THREE.Points(starsGeometry, starsMaterial);
    stars.visible = false;
    scene.add(stars);

    function createStars(texture: THREE.Texture, size: number, total: number) {
      let pointGeometry = new THREE.BufferGeometry();
      let pointMaterial = new THREE.PointsMaterial({
        size: size,
        map: texture,
        blending: THREE.AdditiveBlending,
        transparent: true,
      });
      let pvertices = [];
      for (let i = 0; i < total; i++) {
        let radius = THREE.MathUtils.randInt(189, 70);
        let particles = randomPointSphere(radius);
        pvertices.push(...particles);
      }
      pointGeometry.setAttribute('position', new THREE.Float32BufferAttribute(pvertices, 3));
      return new THREE.Points(pointGeometry, pointMaterial);
    }
    const groupall = new THREE.Group();
    scene.add(groupall);
    groupall.add(createStars(texture1, 15, 320));
    groupall.add(createStars(texture2, 5, 155));
    groupall.add(createStars(texture4, 7, 55));




    function randomPointSphere(radius: number) {
      let theta = 2 * Math.PI * Math.random();
      let phi = Math.acos(2 * Math.random() - 1);
      let dx = 0 + (radius * Math.sin(phi) * Math.cos(theta));
      let dy = 0 + (radius * Math.sin(phi) * Math.sin(theta));
      let dz = 0 + (radius * Math.cos(phi));
      // return new THREE.Vector3(dx, dy, dz);
      return [dx, dy, dz];
    }
    const simplex = new SimplexNoise();
    const animate = () => {
      this.request = requestAnimationFrame(animate);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.render(scene, camera);

      //

        for (let i = 0; i < vertices.length; i += 3) {
          let velocity = vertices[Math.floor(i / 3)];
          vertices[i] += (0 - vertices[i]) / velocity;
          vertices[i + 1] += (0 - vertices[i + 1]) / velocity;
          vertices[i + 2] += (0 - vertices[i + 2]) / velocity;

          velocity -= 0.3;
          vertices[Math.floor(i / 3)] = velocity;
          if (vertices[i] <= 5 && vertices[i] >= -5 && vertices[i + 1] <= 5 && vertices[i + 1] >= -5 && vertices[i + 2] <= 5 && vertices[i + 2] >= -5) {
            vertices[i] = verticescopy[i];
            vertices[i + 1] = verticescopy[i + 1];
            vertices[i + 2] = verticescopy[i + 2];
            vertices[Math.floor(i / 3)] = THREE.MathUtils.randInt(50, 300);
          }

        }
        starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
        stars.geometry.attributes.position.needsUpdate = true;
      if(this.starttag){
        stars.visible = true;
      }


      //
      //   nucleus.geometry.vertices.forEach(function (v) {
      //     let time = Date.now();
      //     v.normalize();
      //     let distance = nucleus.geometry.parameters.radius + noise.noise3D(
      //         v.x + time * 0.0005,
      //         v.y + time * 0.0003,
      //         v.z + time * 0.0008
      //     ) * blobScale;
      //     v.multiplyScalar(distance);
      // })
      // nucleus.geometry.verticesNeedUpdate = true;
      // nucleus.geometry.normalsNeedUpdate = true;
      // nucleus.geometry.computeVertexNormals();
      // nucleus.geometry.computeFaceNormals();
      // nucleus.rotation.y += 0.002;
      // for(let i=0;i<nucarr.length;i+=3){
      //   let distance:any = simplex.noise3d(nucarr[i] * 0.01, nucarr[i+1] * 0.01, nucarr[i+2] * 0.01) * 1;
      //   nucarr[i] += (0 - nucarr[i]) / distance;
      //   // nucarr[i+1] += (0 - nucarr[i+1]) / distance;
      //   // nucarr[i+2] += (0 - nucarr[i+2]) / distance;
      // }
      nucleus.geometry.attributes.position.needsUpdate = true;


      sphereBg.rotation.x += 0.002;
      sphereBg.rotation.y += 0.002;
      sphereBg.rotation.z += 0.002;

      groupall.rotation.y += 0.001
      groupall.rotation.x += 0.001
      // groupall.rotation.z += 0.001
    }
    animate();

  }
  loadimg() {

  }
  start(tag:boolean){
    if(tag){
        this.starttag = true;
    }
  }
}

export { SceneBackground }
