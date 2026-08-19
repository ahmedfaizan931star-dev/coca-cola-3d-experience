import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, PerspectiveCamera, ContactShadows } from '@react-three/drei';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Scene from './components/Scene';
import Overlay from './components/Overlay';
import Loader from './components/Loader';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  return (
    <div className="relative w-full bg-black">
      <Suspense fallback={<Loader />}>
        <div className="fixed inset-0 z-0">
          <Canvas shadows dpr={[1, 2]}>
            <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={35} />
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
            <Scene />
            <Environment preset="studio" />
            <ContactShadows position={[0, -1.5, 0]} opacity={0.4} scale={10} blur={2} far={4.5} />
          </Canvas>
        </div>
        <Overlay />
      </Suspense>
    </div>
  );
}