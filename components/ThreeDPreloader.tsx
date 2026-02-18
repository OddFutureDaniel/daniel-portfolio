'use client';

import { Canvas } from '@react-three/fiber';
import { useRef, useState, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

export default function ThreeDPreloader({ onComplete }: { onComplete: () => void }) {
  return (
    <div style={{ 
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw', 
      height: '100vh', 
      background: '#000',
      zIndex: 9999 
    }}>
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        
        <RotatingWordCloud onComplete={onComplete} />
      </Canvas>
    </div>
  );
}

function RotatingWordCloud({ onComplete }: { onComplete: () => void }) {
  const groupRef = useRef<THREE.Group>(null);
  const [showButton, setShowButton] = useState(false);
  const mouseRef = useRef({ x: 0, y: 0 });
  const { size } = useThree();

  // Show button after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowButton(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  // Track mouse movement
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      // Normalize mouse coordinates to -1 to 1
      mouseRef.current.x = (event.clientX / size.width) * 2 - 1;
      mouseRef.current.y = -(event.clientY / size.height) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [size]);

  // Continuous rotation + position shift based on cursor
  useFrame((state, delta) => {
    if (!groupRef.current) return;

    // Continuous slow rotation
    groupRef.current.rotation.y += delta * 0.2;
    groupRef.current.rotation.x += delta * 0.1;

    // Shift position based on cursor (opposite direction)
    // If cursor is at bottom (y = -1), shift cube up (positive y)
    // If cursor is at left (x = -1), shift cube right (positive x)
    const targetX = -mouseRef.current.x * 2; // Multiply by 2 for more movement range
    const targetY = -mouseRef.current.y * 2;

    // Smooth interpolation to target position
    groupRef.current.position.x += (targetX - groupRef.current.position.x) * delta * 3;
    groupRef.current.position.y += (targetY - groupRef.current.position.y) * delta * 3;
  });

  // Generate words in a 5x5x5 grid
  const positions: [number, number, number][] = [];
  for (let x = -2; x <= 2; x++) {
    for (let y = -2; y <= 2; y++) {
      for (let z = -2; z <= 2; z++) {
        positions.push([x, y, z]);
      }
    }
  }

  return (
    <>
      <group ref={groupRef}>
        {positions.map((position, i) => (
          <FloatingText
            key={i}
            localPosition={position}
            delay={i * 0.01}
            groupRef={groupRef}
          />
        ))}
      </group>

      {showButton && (
        <group position={[0, -4, 0]}>
          <mesh onClick={onComplete}>
            <boxGeometry args={[2.5, 0.5, 0.2]} />
            <meshStandardMaterial color="#c6f0fc" />
          </mesh>
        </group>
      )}
    </>
  );
}

function FloatingText({ 
  localPosition,
  delay,
  groupRef
}: { 
  localPosition: [number, number, number];
  delay: number;
  groupRef: React.RefObject<THREE.Group | null>;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [opacity, setOpacity] = useState(0);
  const [svgTexture, setSvgTexture] = useState<THREE.Texture | null>(null);

  // Fade in with delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setOpacity(1);
    }, delay * 1000);
    return () => clearTimeout(timer);
  }, [delay]);

  // Load SVG texture
  useEffect(() => {
    createSVGTexture('/thirdlinelogowhite.svg').then(texture => {
      setSvgTexture(texture);
    });
  }, []);

  // Always face camera
  useFrame((state) => {
    if (meshRef.current && groupRef.current) {
      meshRef.current.lookAt(state.camera.position);
    }
  });

  if (!svgTexture) return null;

  return (
    <mesh ref={meshRef} position={localPosition}>
      <planeGeometry args={[0.459, 0.0918]} /> {/* 15% smaller: 0.54 * 0.85 = 0.459 */}
      <meshBasicMaterial 
        map={svgTexture}
        transparent
        opacity={opacity}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

// Load SVG and convert to texture
async function createSVGTexture(svgPath: string): Promise<THREE.Texture> {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 512;
      canvas.height = 128;
      const ctx = canvas.getContext('2d')!;
      
      ctx.fillStyle = '#ffffff';
      ctx.drawImage(img, 0, 0, 512, 128);
      
      const texture = new THREE.CanvasTexture(canvas);
      texture.needsUpdate = true;
      resolve(texture);
    };
    img.src = svgPath;
  });
}