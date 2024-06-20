import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { useLoader } from '@react-three/fiber';
import React, { Suspense, useRef } from 'react';
import * as THREE from 'three';

type BoxModelProps = {
  url: string;
  position?: [number, number, number];
};

const BoxModel: React.FC<BoxModelProps> = ({ url, position = [0, 0, 0] }) => {
  const gltf = useLoader(GLTFLoader, url);
  const modelRef = useRef<THREE.Object3D>();

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group position={position}>
      <primitive ref={modelRef} object={gltf.scene} />

      <Text
        fontSize={0.07}
        anchorX='center'
        color={'black'}
        position={[0, -0.1, 0]}
      >
        Only $10.99!
      </Text>
    </group>
  );
};

const Box: React.FC<BoxModelProps> = ({ url }) => {
  return (
    <Canvas camera={{ position: [0, 0, 0.3], near: 0.1 }}>
      <Suspense fallback={null}>
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} />
        <BoxModel url={url} position={[0, -0.04, -0.01]} />
        <OrbitControls minDistance={0.1} />
      </Suspense>
    </Canvas>
  );
};

export default Box;
