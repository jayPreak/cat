import './App.css'
import Box from './components/Box'
import { Suspense } from 'react'
import { OrbitControls, Stats } from '@react-three/drei'
import { Canvas, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

function Model () {
  const gltf = useLoader(GLTFLoader, 'toon_cat_free.glb')
  console.log('gltf', gltf)
  gltf.scene.scale.set(0.01, 0.01, 0.01)
  gltf.scene.position.y = -1
  return <primitive object={gltf.scene} />
}

function App () {
  return (
    <>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <Stats />
      </Canvas>
    </>
  )
}

export default App
