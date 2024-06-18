

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three';
export default function Model(props) {
  let scl=[0.001,0.001,0.001]
  let rots=[0,0,0]
  let pos=[0.5,-1,0]
  if(props.model3)
  {
    rots=props.rotation;
    scl=props.scale
    pos=props.position
  }
  const cuboidGeometry = new THREE.BoxGeometry(1250, 100, 2000);

  // Create a material for the cuboid
  const cuboidMaterial = new THREE.MeshBasicMaterial({ color: 0x808080 });
  const group=useRef();
  const { nodes, materials } = useGLTF('/model/white_green.glb')
  return (
    <group {...props} ref={group} scale={scl} rotation={rots} position={pos} dispose={null}>
      <mesh geometry={nodes.Object_3.geometry} material={materials.PaletteMaterial001} position={[-1272.332, -140.7, 469.014]} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Object_4.geometry} material={materials.Glass} position={[-1272.332, -140.7, 469.014]} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Object_6.geometry} material={materials.Render_Material_255_255_255} position={[-1272.332, -140.7, 469.014]} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Object_7.geometry} material={materials.Roof1} position={[-1272.332, -140.7, 469.014]} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={cuboidGeometry} material={cuboidMaterial} position={[-500.332, -50.7, -500.014]} />
      <mesh geometry={nodes.Object_9.geometry} material={materials.Solar_System} position={[-1272.332, -140.7, 469.014]} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Object_10.geometry} material={materials.Stoffa} position={[-1272.332, -140.7, 469.014]} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Object_11.geometry} material={materials.Structure001} position={[-1272.332, -140.7, 469.014]} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Object_12.geometry} material={materials.Tubo} position={[-1272.332, -140.7, 469.014]} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Object_13.geometry} material={materials.PaletteMaterial002} position={[-1272.332, -140.7, 469.014]} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Object_14.geometry} material={materials.Whitello} position={[-1272.332, -140.7, 469.014]} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Object_15.geometry} material={materials.Wood_A} position={[-1272.332, -140.7, 469.014]} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Object_16.geometry} material={materials.PaletteMaterial003} position={[-1272.332, -140.7, 469.014]} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/model/white_green.glb')
