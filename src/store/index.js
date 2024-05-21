import { proxy } from "valtio";

// empty --> same as shown
// ./ --> path
// color
const state = proxy({
  bodyMaterial: "",
  legsMaterial: "",
  innerMaterial: "",
  doorsMaterial: "",
  handlesMaterial: "",
  isDoorOpen: false,
});
