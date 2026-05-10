import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Mesh } from 'three'
import * as THREE from 'three'

const HeroScene = () => {
  const meshRef = useRef<Mesh>(null)
  const mesh2Ref = useRef<Mesh>(null)
  const mesh3Ref = useRef<Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01
      meshRef.current.rotation.y += 0.01
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.5
    }
    if (mesh2Ref.current) {
      mesh2Ref.current.rotation.x -= 0.005
      mesh2Ref.current.rotation.z += 0.01
      mesh2Ref.current.position.x = Math.cos(state.clock.elapsedTime * 0.5) * 2
    }
    if (mesh3Ref.current) {
      mesh3Ref.current.rotation.y += 0.02
      mesh3Ref.current.position.z = Math.sin(state.clock.elapsedTime * 0.3) * 1
    }
  })

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00ffff" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff00ff" />

      <mesh ref={meshRef} position={[0, 0, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#00ffff" emissive="#00ffff" emissiveIntensity={0.2} />
      </mesh>

      <mesh ref={mesh2Ref} position={[3, 1, -2]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="#ff00ff" emissive="#ff00ff" emissiveIntensity={0.1} />
      </mesh>

      <mesh ref={mesh3Ref} position={[-2, -1, 1]}>
        <torusGeometry args={[0.8, 0.3, 16, 100]} />
        <meshStandardMaterial color="#ffff00" emissive="#ffff00" emissiveIntensity={0.1} />
      </mesh>
    </>
  )
}

export default HeroScene