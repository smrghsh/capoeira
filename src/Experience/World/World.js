import * as THREE from "three";
import Experience from "../Experience.js";
import Environment from "./Environment.js";
import Floor from "./Floor.js";
import Stars from "./Stars.js";
import Knee from "./Knee.js";
import SamirAu from "./SamirAu.js";
import SamirGinga from "./SamirGinga.js";
export default class {
  constructor() {
    this.experience = new Experience();
    this.sizes = this.experience.sizes;
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    this.floor = new Floor();
    this.debug = this.experience.debug;
    // Wait for resources
    this.ready = false;
    this.resources.on("ready", () => {
      // Setup
      console.log("resources ready");
      // this.test = new Test()
      // this.pingu = new Pingu();
      this.stars = new Stars();
      this.knee = new Knee();
      this.samirAu = new SamirAu();
      this.samirGinga = new SamirGinga();
      const parameters = {
        GingaVisibility: this.samirGinga.model.visible,
        AuVisibility: this.samirAu.model.visible,
        KneeVisibility: this.knee.model.visible,
      };

      /**
       * Debug Visibilities
       */
      if (this.debug.active) {
        this.debug.ui
          .add(parameters, "GingaVisibility")
          .name("Ginga Visibility")
          .onChange((value) => {
            this.samirGinga.model.visible = value;
          });
        this.debug.ui
          .add(parameters, "AuVisibility")
          .name("Aú Visibility")
          .onChange((value) => {
            this.samirAu.model.visible = value;
          });
        this.debug.ui
          .add(parameters, "KneeVisibility")
          .name("Knee Visibility")
          .onChange((value) => {
            this.knee.model.visible = value;
          });
      }

      this.environment = new Environment();
      this.ready = true;
    });
  }
  update() {
    if (this.ready) {
      this.knee.tick();
      this.samirAu.tick();
      this.samirGinga.tick();
      // this.pingu.tick();
    }
  }
}
