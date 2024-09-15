import React from 'react';
import { Canvas } from '@react-three/fiber';

import { Box, OrthographicCamera } from '@react-three/drei';

function App() {
  // Define positions for "plants" on the left side
  const plantPositions: [number, number, number][] = [
    [-10, 0, 0],
    [-15, 0, 0],
    [-10, 0, -5],
    [-15, 0, -5],
    [-10, 0, -10],
    [-15, 0, -10],
    [-10, 0, 5],
    [-15, 0, 5],
    [-10, 0, 10],
    [-15, 0, 10],
  ];

  return (
    <Canvas>
      {/* Camera setup */}
      <OrthographicCamera
        makeDefault
        zoom={30}
        near={10}
        far={100}
        position={[0, 50, 50]}
        rotation={[-Math.PI / 4, 0, 0]}
      />
      <ambientLight intensity={0.5} />
      <directionalLight position={[50, 50, 50]} intensity={2} />

      {/* Ground grid */}
      <gridHelper args={[30, 30, 'green', 'blue']} />

      {/* Render boxes as plants */}
      {plantPositions.map((position, index) => (
        <Box key={index} position={position}>
          <meshStandardMaterial attach="material" color="green" />
        </Box>
      ))}
    </Canvas>
  );
}

export default App;
