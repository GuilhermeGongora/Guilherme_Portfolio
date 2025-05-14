import { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import { inSphere } from "maath/random";

const generateParticles = (count = 5000, radius = 1.2) => {
  return inSphere(new Float32Array(count), { radius });
};

const RotatingStars = ({ count = 5000, color = "#f272c8", size = 0.002 }) => {
  const pointsRef = useRef();

  const positions = useMemo(() => generateParticles(count), [count]);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x -= delta * 0.1;
      pointsRef.current.rotation.y -= delta * 0.125;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={pointsRef} positions={positions} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color={color}
          size={size}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarfieldBackground = () => (
  <div className="w-full h-auto absolute inset-0 z-[-1]">
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <RotatingStars />
        <Preload all />
      </Suspense>
    </Canvas>
  </div>
);

export default StarfieldBackground;
