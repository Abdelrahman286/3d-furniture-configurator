import * as THREE from "three";

export function handleDoorAnimation(actions, names, isDoorOpen) {
  names.forEach((name) => {
    const action = actions[name];
    if (isDoorOpen) {
      action.setLoop(THREE.LoopOnce);
      action.clampWhenFinished = true;
      action.play();
    } else {
      action.stop();
    }
  });
}
