
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  let scl=[0.13,0.13,0.13]
  let rots=[0,0,0]
  let pos=[0,-1,0]
  if(props.model1)
  {
    rots=props.rotation;
    scl=props.scale
    pos=props.position
  }
  const { nodes, materials } = useGLTF('/model/final_house.glb')
  const group=useRef();

  return (
    <group ref={group} scale={scl} rotation={rots} position={pos} {...props} dispose={null}>
      <mesh geometry={nodes['Object029_Material_#2125644136_0'].geometry} material={materials.Material_2125644136} position={[1.568, 0, -0.154]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.154, 0.154, 0.149]} />
      <mesh geometry={nodes.Object030_CRNcgaxis_models_46_14_03_0.geometry} material={materials['CRN.cgaxis_models_46_14_03']} position={[1.568, 0, -0.154]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.154, 0.154, 0.149]} />
      <mesh geometry={nodes.Object030_CRNcgaxis_models_46_15_03_0.geometry} material={materials['CRN.cgaxis_models_46_15_03']} position={[1.568, 0, -0.154]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.154, 0.154, 0.149]} />
      <mesh geometry={nodes.Object030_CRNSolid_Glass_0.geometry} material={materials['CRN.Solid_Glass']} position={[1.568, 0, -0.154]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.154, 0.154, 0.149]} />
      <mesh geometry={nodes['Line017_Material_#2125644137_0'].geometry} material={materials.Material_2125644137} position={[5.886, 0.657, -1.668]} rotation={[-Math.PI / 2, 0, 0]} scale={0.025} />
    </group>
  )
}

useGLTF.preload('/model/final_house.glb')
