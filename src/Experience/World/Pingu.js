import * as THREE from "three";
import Experience from "../Experience.js";

export default class Pingu {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.scene.add(new THREE.AxesHelper());
    this.resources = this.experience.resources;

    this.resource = this.resources.items.pinguModel;
    this.model = this.resource.scene;
    this.model.scale.set(0.85, 0.85, 0.85);
    console.log(this.model);
    this.model.position.z -= 2;
    this.mixer = new THREE.AnimationMixer(this.model);
    this.action = this.mixer.clipAction(this.resource.animations[0]);
    this.scene.add(this.model);
    this.action.play();

    //same thing as above but with samirModel
    // this.resource2 = this.resources.items.samirModel;
    // this.model2 = this.resource2.scene;
    // this.model2.scale.set(0.85, 0.85, 0.85);
    // console.log(this.model2);
    // // this.model2.position.z -= 4;
    // this.model2.position.x += 2;
    // this.model2.rotation.y -= Math.PI / 2;
    // this.mixer2 = new THREE.AnimationMixer(this.model2);
    // this.action2 = this.mixer2.clipAction(this.resource2.animations[0]);
    // this.scene.add(this.model2);
    // this.action2.play();

    // this.pinguGeometry, this.pinguMaterial = ... import glb file
  }
  tick() {
    if (this.mixer) {
      this.mixer.update(this.experience.time.delta * 0.0018);
      //mixer2
      // this.mixer2.update(this.experience.time.delta * 0.002);
    }
  }
}
