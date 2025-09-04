"use client"

import { Suspense, useRef, useState, useEffect, Component, ReactNode } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF, Html, Loader } from '@react-three/drei'
import { Group } from 'three'
import { Button } from '@/components/ui/button'
import { RotateCcw, ZoomIn, ZoomOut, Play, Pause, AlertCircle } from 'lucide-react'

// Tipo para el modelo GLTF
type GLTFResult = {
  scene: Group
  nodes?: any
  materials?: any
  animations?: any[]
}

interface TuneladoraModelProps {
  isRotating: boolean
}

// Componente de fallback mejorado - simula una tuneladora
function FallbackModel({ isRotating }: TuneladoraModelProps) {
  const meshRef = useRef<Group>(null)
  
  useFrame((state, delta) => {
    if (meshRef.current && isRotating) {
      meshRef.current.rotation.y += delta * 0.5
    }
  })
  
  return (
    <group ref={meshRef} scale={[1.2, 1.2, 1.2]}>
      {/* Cuerpo principal cilíndrico */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.35, 0.35, 2, 32]} />
        <meshStandardMaterial color="#00338d" metalness={0.7} roughness={0.3} />
      </mesh>
      
      {/* Cabeza cortadora frontal */}
      <mesh position={[0, 0, 1.2]}>
        <coneGeometry args={[0.35, 0.5, 16]} />
        <meshStandardMaterial color="#0055ff" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Disco cortador */}
      <mesh position={[0, 0, 1.4]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.25, 0.05, 8, 32]} />
        <meshStandardMaterial color="#88aaff" metalness={0.9} roughness={0.1} />
      </mesh>
      
      {/* Sección trasera */}
      <mesh position={[0, 0, -1]}>
        <boxGeometry args={[0.5, 0.5, 0.3]} />
        <meshStandardMaterial color="#002255" metalness={0.6} roughness={0.4} />
      </mesh>
      
      {/* Detalles - ruedas/orugas simuladas */}
      <mesh position={[0.3, -0.35, 0]}>
        <boxGeometry args={[0.15, 0.1, 1.8]} />
        <meshStandardMaterial color="#111111" metalness={0.3} roughness={0.7} />
      </mesh>
      <mesh position={[-0.3, -0.35, 0]}>
        <boxGeometry args={[0.15, 0.1, 1.8]} />
        <meshStandardMaterial color="#111111" metalness={0.3} roughness={0.7} />
      </mesh>
      
      {/* Luces indicadoras */}
      <mesh position={[0, 0.35, 0.5]}>
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshStandardMaterial color="#00ff00" emissive="#00ff00" emissiveIntensity={0.5} />
      </mesh>
      <mesh position={[0, 0.35, 0]}>
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshStandardMaterial color="#ffff00" emissive="#ffff00" emissiveIntensity={0.5} />
      </mesh>
    </group>
  )
}

// Componente seguro que intenta cargar el modelo
function SafeModelLoader({ isRotating }: TuneladoraModelProps) {
  const [hasError, setHasError] = useState(false)
  const [modelProcessed, setModelProcessed] = useState(false)
  const [isClient, setIsClient] = useState(false)
  
  // Asegurarse de que estamos en el cliente
  useEffect(() => {
    setIsClient(true)
  }, [])
  
  // Intentar cargar el modelo con manejo de errores más robusto
  let gltf: GLTFResult | null = null
  
  try {
    if (!hasError && isClient) {
      // Cargar el archivo GLB con manejo de errores mejorado
      gltf = useGLTF('/tuneladora.glb') as GLTFResult
      console.log('Model loaded successfully:', gltf)
    }
  } catch (error) {
    console.warn('Could not load GLB model, using fallback. Error:', error)
    if (!hasError) {
      setHasError(true)
    }
  }
  
  // Configurar el modelo una vez cargado (sin eliminar texturas)
  useEffect(() => {
    if (gltf && gltf.scene && !modelProcessed) {
      try {
        gltf.scene.traverse((child: any) => {
        if (child.isMesh) {
          // Solo configurar sombras y propiedades básicas
          child.castShadow = true
          child.receiveShadow = true
          
          // Si hay material, solo actualizar propiedades básicas
          if (child.material) {
            const materials = Array.isArray(child.material) ? child.material : [child.material]
            
            materials.forEach((mat: any) => {
              // Verificar si el material tiene una propiedad color antes de usarla
              if (mat.color) {
                // Solo actualizar si es necesario
                if (mat.color.getHex() === 0x000000) {
                  mat.color.setHex(0x00338d)
                }
              }
              
              // Ajustar propiedades para mejor visualización
              mat.metalness = mat.metalness !== undefined ? mat.metalness : 0.5
              mat.roughness = mat.roughness !== undefined ? mat.roughness : 0.5
              mat.needsUpdate = true
            })
          }
        }
      })
      setModelProcessed(true)
      } catch (error) {
        console.error('Error processing model:', error)
        setHasError(true)
      }
    }
  }, [gltf, modelProcessed])
  
  // Si hay error o no se carga, usar fallback
  if (hasError || !gltf || !gltf.scene) {
    console.log('Using fallback model. HasError:', hasError, 'GLTF:', !!gltf, 'Scene:', !!gltf?.scene)
    return <FallbackModel isRotating={isRotating} />
  }
  
  return <TuneladoraModelInner gltf={gltf} isRotating={isRotating} />
}

// Componente interno que renderiza el modelo real
function TuneladoraModelInner({ gltf, isRotating }: TuneladoraModelProps & { gltf: GLTFResult }) {
  const meshRef = useRef<Group>(null)
  
  // Limpiar recursos al desmontar
  useEffect(() => {
    return () => {
      if (gltf && gltf.scene) {
        gltf.scene.traverse((child: any) => {
          if (child.geometry) {
            child.geometry.dispose()
          }
          if (child.material) {
            if (Array.isArray(child.material)) {
              child.material.forEach((material: any) => {
                material.dispose()
              })
            } else {
              child.material.dispose()
            }
          }
        })
      }
    }
  }, [gltf])

  useFrame((state, delta) => {
    if (meshRef.current && isRotating) {
      meshRef.current.rotation.y += delta * 0.5
    }
  })

  return (
    <group ref={meshRef}>
      <primitive 
        object={gltf.scene} 
        scale={4}  // Escala 1:1 para el modelo original
        position={[0, 0, 0]} 
        rotation={[0, 0, 0]}  // Sin rotación inicial
        castShadow 
        receiveShadow 
        dispose={null}
      />
    </group>
  )
}

// Componente principal que usa el cargador seguro
function TuneladoraModel({ isRotating }: TuneladoraModelProps) {
  return <SafeModelLoader isRotating={isRotating} />
}

interface Tunneler3DModelProps {
  className?: string
}

// Componente de indicador de carga
function LoadingIndicator() {
  return (
    <Html center>
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        <span className="text-white/70 text-sm">Cargando modelo 3D...</span>
      </div>
    </Html>
  )
}

// Componente de error
function ErrorMessage() {
  return (
    <Html center>
      <div className="flex flex-col items-center justify-center gap-2 p-4 bg-black/50 rounded-lg">
        <AlertCircle className="w-8 h-8 text-yellow-400" />
        <span className="text-white/70 text-sm text-center">Visualización simplificada</span>
      </div>
    </Html>
  )
}

export function Tunneler3DModel({ className }: Tunneler3DModelProps) {
  const [isRotating, setIsRotating] = useState(true)
  const [isLoading, setIsLoading] = useState(true)
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
        camera={{ position: [5, 3, 8], fov: 45 }}  // Posición optimizada para vista completa
        style={{ background: 'radial-gradient(circle, rgba(0,51,141,0.1) 0%, transparent 70%)' }}
        gl={{ antialias: true, alpha: true }}
        onCreated={() => setIsLoading(false)}
      >
        <Suspense fallback={<LoadingIndicator />}>
          {/* Iluminación ambiental MUY brillante para iluminar todas las superficies */}
          <ambientLight intensity={2.5} />
          
          {/* Luz hemisférica para iluminación suave y natural */}
          <hemisphereLight 
            color="#ffffff" 
            groundColor="#e0e0e0" 
            intensity={2} 
          />
          
          {/* Luz principal frontal-superior */}
          <directionalLight 
            position={[5, 10, 5]} 
            intensity={3.5} 
            castShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
            color="#ffffff"
          />
          
          {/* Luz de relleno lateral derecha */}
          <directionalLight 
            position={[10, 5, 0]} 
            intensity={2.5} 
            color="#ffffff"
          />
          
          {/* Luz de relleno lateral izquierda */}
          <directionalLight 
            position={[-10, 5, 0]} 
            intensity={2.5} 
            color="#ffffff"
          />
          
          {/* Luz trasera para dar profundidad */}
          <directionalLight 
            position={[0, 5, -10]} 
            intensity={2} 
            color="#ffffff"
          />
          
          {/* Luz frontal directa */}
          <directionalLight 
            position={[0, 0, 10]} 
            intensity={2.5} 
            color="#ffffff"
          />
          
          {/* Luz inferior para iluminar partes oscuras */}
          <directionalLight 
            position={[0, -10, 5]} 
            intensity={2} 
            color="#ffffff"
          />
          
          {/* Luces puntuales adicionales para destacar detalles */}
          <pointLight position={[2, 2, 2]} intensity={2} color="#ffffff" />
          <pointLight position={[-2, 2, -2]} intensity={2} color="#ffffff" />
          <pointLight position={[2, -2, 2]} intensity={1.5} color="#ffffff" />
          <pointLight position={[-2, -2, -2]} intensity={1.5} color="#ffffff" />
          
          {/* Luz tipo spot para enfoque principal */}
          <spotLight
            position={[0, 10, 10]}
            angle={0.6}
            penumbra={0.5}
            intensity={4}
            castShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
            color="#ffffff"
          />
          
          {/* Spot adicional desde abajo */}
          <spotLight
            position={[0, -10, 10]}
            angle={0.6}
            penumbra={0.5}
            intensity={2}
            color="#ffffff"
          />
          
          <ErrorBoundary FallbackComponent={() => <FallbackModel isRotating={isRotating} />}>
            <TuneladoraModel isRotating={isRotating} />
          </ErrorBoundary>
          <OrbitControls 
            ref={controlsRef}
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
            autoRotate={false}
            maxDistance={30}  // Permitir más zoom out
            minDistance={2}  // Limitar zoom in para evitar problemas
            target={[0, 0, 0]}
            enableDamping={true}
            dampingFactor={0.05}
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

// Componente ErrorBoundary simple
class ErrorBoundary extends Component<{ children: ReactNode, FallbackComponent: any }> {
  state = { hasError: false }
  
  static getDerivedStateFromError(error: any) {
    return { hasError: true }
  }
  
  componentDidCatch(error: any, errorInfo: any) {
    console.warn('3D Model Error:', error, errorInfo)
  }
  
  render() {
    if (this.state.hasError) {
      return <this.props.FallbackComponent />
    }
    return this.props.children
  }
}

// Precargar el modelo si es posible
if (typeof window !== 'undefined') {
  try {
    useGLTF.preload('/tuneladora.glb')
    console.log('Model preloaded successfully')
  } catch (e) {
    console.info('Model preload skipped:', e)
  }
}
