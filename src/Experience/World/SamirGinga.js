import * as THREE from "three";
import Experience from "../Experience.js";

export default class SamirGinga {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;

    // same thing as above but with samirModel
    this.resource = this.resources.items.samirGingaModel;
    this.model = this.resource.scene;
    this.model.scale.set(-0.85, 0.85, -0.85);
    console.log(this.model);
    // this.model2.position.z -= 4;
    // this.model2.position.x += 2;
    // this.model2.rotation.y -= Math.PI / 2;
    this.mixer = new THREE.AnimationMixer(this.model);
    this.action = this.mixer.clipAction(this.resource.animations[0]);
    this.scene.add(this.model);
    this.action.play();
  }
  tick() {
    if (this.mixer) {
      this.mixer.update(this.experience.time.delta * 0.0018);
    }
  }
}
