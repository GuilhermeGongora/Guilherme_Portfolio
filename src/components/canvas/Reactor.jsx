import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Reactor = ({ isMobile }) => {
  const reactor = useGLTF("./arc_reactor/scene.gltf");
  return (
    <primitive
      object={reactor.scene}
      scale={isMobile ? 40 : 25}
      position-y={0}
      rotation-y={0}
    />
  );
};

const ReactorCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);
    const handler = (e) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        {/* Iluminação aprimorada */}
        <ambientLight intensity={35} />

        <directionalLight
          position={[5, 10, 5]}
          intensity={10}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />

        <pointLight
          position={[0, 5, 5]}
          intensity={10}
          decay={2}
          distance={100}
        />

        <spotLight
          position={[0, 10, 10]}
          angle={0.4}
          penumbra={0.7}
          intensity={25}
          castShadow
        />

        <OrbitControls
          autoRotate={true}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Reactor isMobile={isMobile} />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default ReactorCanvas;
