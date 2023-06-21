import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, useGLTF } from "@react-three/drei"
import CanvasLoader from "../Loader"

const Earth = () => {
  const earth = useGLTF('../../../../public/planet/scene.gltf')

  return (
    <primitive 
      // eslint-disable-next-line react/no-unknown-property
      object={earth.scene} 
      scale={2.5}
      // eslint-disable-next-line react/no-unknown-property
      position-y={0}
      // eslint-disable-next-line react/no-unknown-property
      position-x={0}
    />
  )
}

const EarthCanvas = () => {
  return (
    <Canvas 
      shadows
      className="cursor-pointer"
      frameloop="always"
      gl={{preserveDrawingBuffer: true}}
      camera={{
        fov:50,
        near:0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
      </Suspense>
    </Canvas>
  )
}

export default EarthCanvas