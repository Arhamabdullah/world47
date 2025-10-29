import "@react-three/fiber";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      mesh: any;
      group: any;
      shaderMaterial: any;
      sphereGeometry: any;
      meshBasicMaterial: any;
      lineSegments: any;
      ambientLight: any;
      pointLight: any;
    }
  }
}
