import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, OrthographicCamera } from '@react-three/drei';
import { auto } from 'manate/react';
import type { Store } from './store';

const App = auto((props: { store: Store }) => {
  const { store } = props;
  const { worldSize } = store;

  console.log('App render');
  return (
    <Canvas>
      <OrbitControls />
      <OrthographicCamera
        makeDefault
        zoom={store.zoom}
        near={5}
        far={50}
        position={[0, 10, 10]}
        rotation={[-Math.PI / 4, 0, 0]}
      />
      <ambientLight intensity={0.5} />
      <directionalLight position={[50, 50, 50]} intensity={2} />
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <planeGeometry args={[worldSize.width, worldSize.height]} />
        <meshStandardMaterial color="skyblue" />
      </mesh>
      <mesh position={[-worldSize.width / 2 + 0.5, 0, -2]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="red" />
      </mesh>
      <mesh position={[-worldSize.width / 2 + 0.5, 0, -1]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="green" />
      </mesh>
      <mesh position={[-worldSize.width / 2 + 0.5, 0, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="blue" />
      </mesh>
      <mesh position={[-worldSize.width / 2 + 0.5, 0, 1]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="yellow" />
      </mesh>
      <mesh position={[-worldSize.width / 2 + 0.5, 0, 2]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="purple" />
      </mesh>
    </Canvas>
  );
});

export default App;
