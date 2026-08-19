import React, { useRef, useLayoutEffect } from 'react';
import { useThree } from '@react-three/fiber';
import { Float, Text } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';

export default function Scene() {
  const canRef = useRef<THREE.Group>(null);
  const { viewport } = useThree();

  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".section-2",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      }
    });

    if (canRef.current) {
      gsap.from(canRef.current.position, { y: -5, duration: 1.5, ease: "power4.out" });
      tl.to(canRef.current.position, { x: viewport.width / 4, y: -0.5, z: 2 })
        .to(canRef.current.rotation, { y: Math.PI * 2, z: 0.5 }, 0)
        .to(canRef.current.position, { x: -viewport.width / 4, y: 0, z: 1 })
        .to(canRef.current.rotation, { y: -Math.PI, z: -0.2 });
    }
  }, [viewport]);

  return (
    <group ref={canRef}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <mesh castShadow>
          <cylinderGeometry args={[1, 1, 3.2, 64]} />
          <meshStandardMaterial color="#F40009" metalness={0.8} roughness={0.2} emissive="#F40009" emissiveIntensity={0.1} />
          <mesh position={[0, 1.6, 0]}>
            <cylinderGeometry args={[1.02, 1, 0.1, 64]} />
            <meshStandardMaterial color="#silver" metalness={1} roughness={0.1} />
          </mesh>
          <mesh position={[0, -1.6, 0]}>
            <cylinderGeometry args={[1, 1.02, 0.1, 64]} />
            <meshStandardMaterial color="#silver" metalness={1} roughness={0.1} />
          </mesh>
        </mesh>
        <Text position={[0, 0, 1.01]} fontSize={0.4} color="white" font="https://fonts.gstatic.com/s/anton/v15/1Pt6g87L7UJq2H3pVvo.woff" anchorX="center" anchorY="middle">Coca-Cola</Text>
      </Float>
    </group>
  );
}