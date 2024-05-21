import { proxy } from "valtio";

// empty --> same as shown
// ./ --> path
// color
const state = proxy({
  bodyMaterial: "Oak",
  legsMaterial: "",
  innerMaterial: "",
  doorsMaterial: "",
  handlesMaterial: "",
  isDoorOpen: 0,
});

export default state;
