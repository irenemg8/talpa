"use client"

import { Suspense, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import { Group } from 'three'
import { Button } from '@/components/ui/button'
import { RotateCcw, ZoomIn, ZoomOut, Play, Pause } from 'lucide-react'

interface TuneladoraModelProps {
  isRotating: boolean
}

function TuneladoraModel({ isRotating }: TuneladoraModelProps) {
  const meshRef = useRef<Group>(null)
  
  // Intentar cargar el modelo con manejo de errores
  let scene;
  try {
    const gltf = useGLTF('/tuneladora.glb')
    scene = gltf.scene
  } catch (error) {
    console.warn('Error loading 3D model:', error)
    // Fallback: crear una forma básica
    return (
      <group ref={meshRef}>
        <mesh position={[0, -1, 0]}>
          <boxGeometry args={[1, 0.5, 2]} />
          <meshStandardMaterial color="#00338d" />
        </mesh>
      </group>
    )
  }

  useFrame((state, delta) => {
    if (meshRef.current && isRotating) {
      meshRef.current.rotation.y += delta * 0.5
    }
  })

  return (
    <group ref={meshRef}>
      <primitive object={scene} scale={0.5} position={[0, -1, 0]} />
    </group>
  )
}

interface Tunneler3DModelProps {
  className?: string
}

export function Tunneler3DModel({ className }: Tunneler3DModelProps) {
  const [isRotating, setIsRotating] = useState(true)
  const controlsRef = useRef<any>(null)

  const handleReset = () => {
    if (controlsRef.current) {
      controlsRef.current.reset()
    }
  }

  const handleZoomIn = () => {
    if (controlsRef.current) {
      controlsRef.current.dollyIn(0.8)
      controlsRef.current.update()
    }
  }

  const handleZoomOut = () => {
    if (controlsRef.current) {
      controlsRef.current.dollyOut(0.8)
      controlsRef.current.update()
    }
  }

  return (
    <div className={`relative ${className}`}>
      <Canvas
        camera={{ position: [0.5, 0.5, 0.5], fov: 30 }}
        style={{ background: 'radial-gradient(circle, rgba(0,51,141,0.1) 0%, transparent 70%)' }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.8} />
          <directionalLight position={[2, 2, 2]} intensity={1.2} />
          <directionalLight position={[-2, -2, -2]} intensity={0.8} />
          <pointLight position={[0, 0, 0]} intensity={1} />
          <TuneladoraModel isRotating={isRotating} />
          <OrbitControls 
            ref={controlsRef}
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
            autoRotate={false}
            maxDistance={16}
            minDistance={0.5}
            target={[0, -1, 0]}
          />
        </Suspense>
      </Canvas>

      {/* Controles */}
      <div className="absolute top-4 right-4 flex space-x-2">
        <Button
          size="sm"
          variant="ghost"
          onClick={() => setIsRotating(!isRotating)}
          className="p-2 bg-black/50 hover:bg-black/70"
        >
          {isRotating ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        </Button>
        <Button
          size="sm"
          variant="ghost"
          onClick={handleReset}
          className="p-2 bg-black/50 hover:bg-black/70"
        >
          <RotateCcw className="h-4 w-4" />
        </Button>
      </div>

      {/* Controles de zoom */}
      <div className="absolute bottom-4 right-4 flex flex-col space-y-2">
        <Button
          size="sm"
          variant="ghost"
          onClick={handleZoomIn}
          className="p-2 bg-black/50 hover:bg-black/70"
        >
          <ZoomIn className="h-4 w-4" />
        </Button>
        <Button
          size="sm"
          variant="ghost"
          onClick={handleZoomOut}
          className="p-2 bg-black/50 hover:bg-black/70"
        >
          <ZoomOut className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

// Preload the model (comentado temporalmente para evitar errores)
// useGLTF.preload('/tuneladora.glb')
