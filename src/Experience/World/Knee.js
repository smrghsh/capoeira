import * as THREE from "three";
import Experience from "../Experience.js";

export default class Knee {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    // this.scene.add(new THREE.AxesHelper());
    this.resources = this.experience.resources;

    this.resource = this.resources.items.kneeModel;
    this.model = this.resource.scene;
    this.model.scale.set(1.2, 1.2, 1.2);
    console.log(this.resource);
    this.model.position.z += 0;
    this.model.position.x += 2;
    this.model.rotation.y -= Math.PI / 2;
    this.mixer = new THREE.AnimationMixer(this.model);
    this.action = this.mixer.clipAction(this.resource.animations[0]);
    this.scene.add(this.model);
    this.action.play();
  }
  tick() {
    if (this.mixer) {
      //mixer
      console.log("I'm trying to update!!!! 😡");
      this.mixer.update(this.experience.time.delta * 0.0009);
    }
  }
}
