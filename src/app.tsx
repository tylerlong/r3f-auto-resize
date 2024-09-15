import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, OrthographicCamera } from '@react-three/drei';
import { auto } from 'manate/react';
import type { Store } from './store';

const App = auto((props: { store: Store }) => {
  const { store } = props;
  const planeHeight = 5; // 5 rows in game

  // because camera has a 45 degree field of view, we need to calculate the zoom factor (2 ** 0.5)
  // 0.99 is to show the white border around the plane
  const zoom = (store.canvasSize.height / planeHeight) * 2 ** 0.5;
  const planeWidth = ((store.canvasSize.width / store.canvasSize.height) * planeHeight) / 2 ** 0.5;

  return (
    <Canvas>
      <OrbitControls />
      <OrthographicCamera
        makeDefault
        zoom={zoom}
        near={5}
        far={50}
        position={[0, 10, 10]}
        rotation={[-Math.PI / 4, 0, 0]}
      />
      <ambientLight intensity={0.5} />
      <directionalLight position={[50, 50, 50]} intensity={2} />
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <planeGeometry args={[planeWidth, planeHeight]} />
        <meshStandardMaterial color="skyblue" />
      </mesh>
      <mesh position={[-planeWidth / 2 + 0.5, 0, -2]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="red" />
      </mesh>
      <mesh position={[-planeWidth / 2 + 0.5, 0, -1]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="green" />
      </mesh>
      <mesh position={[-planeWidth / 2 + 0.5, 0, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="blue" />
      </mesh>
      <mesh position={[-planeWidth / 2 + 0.5, 0, 1]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="yellow" />
      </mesh>
      <mesh position={[-planeWidth / 2 + 0.5, 0, 2]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="purple" />
      </mesh>
    </Canvas>
  );
});

export default App;
