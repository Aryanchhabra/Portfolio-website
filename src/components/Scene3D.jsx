import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Sphere, Stars } from '@react-three/drei'
import { useRef, useMemo, Suspense } from 'react'
import * as THREE from 'three'

// Floating 3D Portal/Orb
function Portal({ position, color }) {
  const meshRef = useRef()
  const time = useRef(0)
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      time.current += delta
      meshRef.current.rotation.x += delta * 0.2
      meshRef.current.rotation.y += delta * 0.3
      
      // Pulse effect
      const pulse = Math.sin(time.current * 2) * 0.1 + 1
      meshRef.current.scale.setScalar(pulse)
    }
  })

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1, 64, 64]} position={position}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.6}
          speed={2}
          roughness={0.2}
          metalness={0.8}
          emissive={color}
          emissiveIntensity={0.5}
          transparent
          opacity={0.8}
        />
      </Sphere>
    </Float>
  )
}

// Particle Field
function ParticleField({ count = 5000 }) {
  const points = useRef()
  
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3)
    
    for (let i = 0; i < count; i++) {
      const distance = Math.sqrt(Math.random()) * 50
      const theta = THREE.MathUtils.randFloatSpread(360)
      const phi = THREE.MathUtils.randFloatSpread(360)
      
      positions[i * 3] = distance * Math.sin(theta) * Math.cos(phi)
      positions[i * 3 + 1] = distance * Math.sin(theta) * Math.sin(phi)
      positions[i * 3 + 2] = distance * Math.cos(theta)
    }
    
    return positions
  }, [count])

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y = state.clock.elapsedTime * 0.05
      points.current.rotation.x = state.clock.elapsedTime * 0.03
    }
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesPosition.length / 3}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#8b5cf6"
        sizeAttenuation
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

// Animated Rings
function Ring({ radius, color, speed }) {
  const ringRef = useRef()
  
  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.z = state.clock.elapsedTime * speed
      ringRef.current.rotation.x = Math.PI / 2
    }
  })

  return (
    <mesh ref={ringRef} position={[0, 0, 0]}>
      <torusGeometry args={[radius, 0.05, 16, 100]} />
      <meshBasicMaterial color={color} transparent opacity={0.4} />
    </mesh>
  )
}

// Main Scene
function Scene({ currentSection }) {
  useFrame((state) => {
    // Subtle camera movement
    state.camera.position.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.5
  })

  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#8b5cf6" />
      <pointLight position={[-10, -10, -10]} intensity={1} color="#ec4899" />
      <pointLight position={[0, 10, -10]} intensity={0.5} color="#06b6d4" />
      
      {/* Portals */}
      <Portal position={[-3, 2, -5]} color="#8b5cf6" />
      <Portal position={[3, -2, -8]} color="#ec4899" />
      <Portal position={[0, 3, -12]} color="#06b6d4" />
      
      {/* Rings */}
      <Ring radius={3} color="#8b5cf6" speed={0.3} />
      <Ring radius={4} color="#ec4899" speed={-0.2} />
      <Ring radius={5} color="#06b6d4" speed={0.15} />
      
      {/* Particle Field */}
      <ParticleField count={3000} />
      
      {/* Stars */}
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
    </>
  )
}

// Loading fallback
function Loader() {
  return null
}

export default function Scene3D({ scrollProgress, currentSection }) {
  return (
    <Suspense fallback={<Loader />}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Scene currentSection={currentSection} />
      </Canvas>
    </Suspense>
  )
}

