"use client";

import { Canvas } from "@react-three/fiber";
import { Box, OrbitControls } from "@react-three/drei";

export default function Home() {
  return (
    <>
      <Canvas>
        <ambientLight intensity={1.2} />
        <pointLight position={[1, 1, 1]} intensity={20} />
        <pointLight position={[-1, -1, 1]} intensity={20} />
        <OrbitControls enableDamping enablePan enableRotate enableZoom />
        <Box position={[0, 0, 0]} rotation={[Math.PI / 4, Math.PI / 4, 0]}>
          <meshStandardMaterial
            attach={"material"}
            color={"#33ccff"}
            roughness={0.9}
          />
        </Box>
      </Canvas>
    </>
  );
}
