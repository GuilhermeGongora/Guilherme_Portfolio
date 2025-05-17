import React, { useRef, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import CanvasLoader from "../Loader";
import * as THREE from "three";

const Ball = ({ imgUrl }) => {
  const [decal] = useTexture([imgUrl]);
  const meshRef = useRef();
  const { mouse } = useThree();

  // Faz o icosaedro inteiro rotacionar em direção ao mouse
  useFrame(() => {
    if (meshRef.current) {
      const targetX = -mouse.y * Math.PI * 0.3; // invertido para seguir o ponteiro corretamente
      const targetY = mouse.x * Math.PI * 0.3;

      meshRef.current.rotation.x +=
        (targetX - meshRef.current.rotation.x) * 0.1;
      meshRef.current.rotation.y +=
        (targetY - meshRef.current.rotation.y) * 0.1;
    }
  });

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      {" "}
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />{" "}
      <mesh ref={meshRef} scale={2.75} castShadow receiveShadow>
        <icosahedronGeometry args={[1, 1]} />{" "}
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
        />{" "}
      </mesh>{" "}
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas frameloop="always" gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        {" "}
        <OrbitControls enableZoom={false} enablePan={false} />{" "}
        <Ball imgUrl={icon} />{" "}
      </Suspense>{" "}
      <Preload all />{" "}
    </Canvas>
  );
};

export default BallCanvas;
