import React, { Suspense } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import CanvasLoader from "../Loader";

const Ball = ({ imgUrl, position }) => {
  const [decal] = useTexture([imgUrl]);
  const meshRef = React.useRef();
  const { mouse } = useThree();

  useFrame(() => {
    if (meshRef.current) {
      const targetX = -mouse.y * Math.PI * 0.3;
      const targetY = mouse.x * Math.PI * 0.3;
      meshRef.current.rotation.x +=
        (targetX - meshRef.current.rotation.x) * 0.1;
      meshRef.current.rotation.y +=
        (targetY - meshRef.current.rotation.y) * 0.1;
    }
  });

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh
        ref={meshRef}
        scale={2.75}
        position={position}
        castShadow
        receiveShadow
      >
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallGroup = ({ icons }) => {
  return (
    <>
      {icons.map((icon, index) => (
        <Ball
          key={index}
          imgUrl={icon}
          position={[index * 3 - icons.length * 1.5, 0, 0]}
        />
      ))}
    </>
  );
};

const BallCanvas = ({ icons }) => {
  return (
    <Canvas
      frameloop="always"
      dpr={[1, 1.5]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{ position: [0, 0, 10], fov: 45 }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} enablePan={false} />
        <BallGroup icons={icons} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
