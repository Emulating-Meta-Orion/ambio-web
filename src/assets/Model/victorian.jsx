

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  let scl=[0.07,0.07,0.07]
  let rots=[0,0,0]
  let pos=[0,-1,0]
  if(props.model2)
  {
    rots=props.rotation;
    scl=props.scale
    pos=props.position
  }
  const group=useRef();
  const { nodes, materials } = useGLTF('/model/victorian_house.glb')
  return (
    <group ref={group} scale={scl} rotation={rots} position={pos} {...props} dispose={null}>
      <mesh geometry={nodes.Object_4.geometry} material={materials.ground} position={[0, -1.5, 0]} scale={10.779} />
      <mesh geometry={nodes.Object_6.geometry} material={materials.walls} />
      <mesh geometry={nodes.Object_7.geometry} material={materials.subfloor} />
      <mesh geometry={nodes.Object_8.geometry} material={materials.whiteWood} />
      <mesh geometry={nodes.Object_9.geometry} material={materials.outsideFloor} />
      <mesh geometry={nodes.Object_10.geometry} material={materials.roof} />
      <mesh geometry={nodes.Object_11.geometry} material={materials.GreenWood} />
      <mesh geometry={nodes.Object_12.geometry} material={materials.woodStairs} />
      <mesh geometry={nodes.Object_13.geometry} material={materials.metalFrame} />
      <mesh geometry={nodes.Object_14.geometry} material={materials.mainDoor} />
      <mesh geometry={nodes.Object_15.geometry} material={materials.metalFrameWindows} />
      <mesh geometry={nodes.Object_16.geometry} material={materials.blackEdge} />
      <mesh geometry={nodes.Object_17.geometry} material={materials.secondFloorDoors} />
      <mesh geometry={nodes.Object_29.geometry} material={materials.metalFrameColumns} />
      <mesh geometry={nodes.Object_36.geometry} material={materials.metalFrameRoof} position={[3.75, 8.528, 1.464]} />
      <mesh geometry={nodes.Object_42.geometry} material={materials.glass} />
    </group>
  )
}

useGLTF.preload('/model/victorian_house.glb')
