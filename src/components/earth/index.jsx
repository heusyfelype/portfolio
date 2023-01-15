import React, { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";


import EarthDayMap from "../../assets/textures/8k_earth_daymap.jpg";
import EarthNormalMap from "../../assets/textures/8k_earth_normal_map.jpg";
import EarthSpecularMap from "../../assets/textures/8k_earth_specular_map.jpg";
import EarthCloudsMap from "../../assets/textures/8k_earth_clouds.jpg";
import { TextureLoader } from "three";

export function Earth(props) {

  const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(TextureLoader, [EarthDayMap, EarthNormalMap, EarthSpecularMap, EarthCloudsMap])

  const earthRef = useRef();
  const cloudsRef = useRef();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    earthRef.current.rotation.y = elapsedTime / 23.8
    cloudsRef.current.rotation.y = elapsedTime / 24
  })


  return (
    <>
      {/* <ambientLight intensity={1} /> */}
      <pointLight color={"#ece8d8"} position={[1, 0, 8]} intensity={1.2} />
      <Stars
        radius={300}
        depth={500}
        count={20000}
        factor={7}
        saturation={0}
        fade={true}
        speed={0.1}
      />
      <mesh
        ref={cloudsRef}
      // position={[0, 0, 3]}
      >
        <sphereGeometry
          args={[1.005, 32, 32]}
          
        />
        <meshPhongMaterial
          map={cloudsMap}
          opacity={0.4}
          depthWrite={true}
          transparent={true}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh
        ref={earthRef}

      // position={[0, 0, 3]}
      >
        <sphereGeometry args={[1, 32, 32]}  />
        <meshPhongMaterial color={'red'} />
        <meshStandardMaterial map={colorMap} normalMap={normalMap} />
        <OrbitControls
          enableZoom={false}
          minAzimuthAngle={- Math.PI / 36}
          maxAzimuthAngle={Math.PI / 36}
          maxDistance={2}
          minDistance={1.9}
          minPolarAngle={ Math.PI/2.05}
          maxPolarAngle={Math.PI - Math.PI /2.05}
          // minZoom={100}
          enablePan={true}
          enableDamping={true}
          
          // enableRotate={true} 
          zoomSpeed={0.3}
          // panSpeed={0.9} 
          rotateSpeed={0.05}

        />
      </mesh>
    </>
  )
}