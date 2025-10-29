// src/types/react-three.d.ts
import * as THREE from "three";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      mesh: any;
      group: any;
      primitive: any;
      lineSegments: any;
      sphereGeometry: any;
      meshBasicMaterial: any;
      shaderMaterial: any;
      ambientLight: any;
      pointLight: any;
    }
  }
}
export {};
