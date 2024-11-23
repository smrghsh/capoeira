import * as THREE from "three";
import Experience from "../Experience.js";
import Environment from "./Environment.js";
import Floor from "./Floor.js";
import Stars from "./Stars.js";
// import Pingu from "./Pingu.js";
import Knee from "./Knee.js";
export default class World {
  constructor() {
    this.experience = new Experience();
    this.sizes = this.experience.sizes;
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    this.floor = new Floor();
    // this.circles = new Circles()
    // this.hypercube = new Hypercube()

    // Wait for resources
    this.ready = false;
    this.resources.on("ready", () => {
      // Setup
      console.log("resources ready");
      // this.test = new Test()
      // this.pingu = new Pingu();
      this.stars = new Stars();
      this.knee = new Knee();

      this.environment = new Environment();
      this.ready = true;
    });
  }
  update() {
    if (this.ready) {
      this.knee.tick();
      // this.pingu.tick();
    }
  }
}
