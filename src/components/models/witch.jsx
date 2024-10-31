/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 scene.gltf --transform 
Files: scene.gltf [69.22KB] > C:\Users\User\Nextjs-Creative-Portfolio-Starter-Code-Files\public\models\scene-transformed.glb [128.57KB] (-86%)
Author: HotelBlue (https://sketchfab.com/a054059)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/earth-witch-43766ea1ec8a4102b9e4eb94b608005a
Title: earth witch
*/
"use client"
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function Witch(props) {
  const { nodes, materials } = useGLTF('${basePath}/public/models/witch-transformed.glb')
  
  const modelRef = useRef()

  useFrame((state, delta, xrFrame) => {
    modelRef.current.position.y = 0.8 + Math.sin(state.clock.elapsedTime);
  })
  
  
  return (
    <group {...props} dispose={null}
      ref={modelRef}
      position={[0, 0.8, 0]}
      scale={[0.7, 0.7, 0.7]}
      rotation={[-0.15, -1.2, 0 ]}
    >
      <mesh geometry={nodes.Object_4.geometry} material={materials.Material_2} position={[-0.213, -0.126, -0.616]} rotation={[-0.194, 0.823, 0.374]} scale={0.438} />
      <mesh geometry={nodes.Object_6.geometry} material={materials.Material_3} position={[-0.135, -0.233, 0.108]} rotation={[-0.182, 0.802, 0.368]} scale={0.723} />
      <mesh geometry={nodes.Object_42.geometry} material={materials.Material_28} position={[-0.061, -0.405, -0.297]} rotation={[-0.886, 0.022, 1.927]} scale={0.715} />
      <mesh geometry={nodes.Object_48.geometry} material={materials.fuku} />
      <mesh geometry={nodes.Object_52.geometry} material={materials.material} position={[0.288, 0.016, -0.1]} rotation={[-0.03, 0.153, -0.023]} />
      <mesh geometry={nodes.Object_54.geometry} material={materials.Material_38} position={[-1.264, -1.485, 0.189]} rotation={[-0.08, 0.197, -0.049]} scale={0.259} />
      <mesh geometry={nodes.Object_56.geometry} material={materials.Material_40} position={[1.767, -1.683, -0.297]} rotation={[-0.032, 0.147, -0.083]} scale={[0.991, 0.992, 0.992]} />
      <mesh geometry={nodes.Object_58.geometry} material={materials.Material_41} position={[0.021, -0.767, 0.116]} rotation={[-0.373, 0.344, 0.239]} scale={0.268} />
      <mesh geometry={nodes.Object_60.geometry} material={materials.hada} />
    </group>
  )
}

useGLTF.preload('/models/witch-transformed.glb')
