import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "../../../public/models/Model.jsx";

const Skull = () => {
  return (
      <div className="w-100 h-100">
      <Canvas camera={{ position: [60, 30, 80], fov: 35 }}
        >
          <ambientLight intensity={0.7} />
  
          <directionalLight
            position={[5, 5, 5]}
            intensity={1}
            castShadow
          />
  
          <OrbitControls />
  
          <Suspense fallback={null}>
            <Model />
          </Suspense>
        </Canvas>
      </div>
    );
}

export default Skull
