import { OrbitControls } from "@react-three/drei";
import { useThree, useFrame } from "@react-three/fiber";
import { Interactive, useHitTest, useXR } from "@react-three/xr";
import { Fragment, useEffect, useRef, useState } from "react";
import Model1 from '../../assets/Model/final'
import Model2 from '../../assets/Model/victorian'
import Model3 from '../../assets/Model/white_green'

import { useCharacterAnimations } from '../../contexts/ModelControl'
import { useGesture } from '@use-gesture/react'

const XrOverlay = () => {
  const reticleRef = useRef();
  const [models, setModels] = useState([]);
  const { currentModelName } = useCharacterAnimations();
  const { isPresenting } = useXR();
  const prevIsPresentingRef = useRef(null);
  useEffect(() => {
    if (prevIsPresentingRef.current && !isPresenting) {
      window.location.reload();
    }

    prevIsPresentingRef.current = isPresenting;
  }, [isPresenting]);

  const [rotation, setRotation] = useState([0, 0, 0]);
  const [zoom, setZoom] = useState(1);

  const prevOffsetRef = useRef(0);
  const { camera } = useThree();

  useEffect(() => {
    if (!isPresenting) {
      camera.position.z = 3;
    }
  }, [isPresenting, camera]);

  useHitTest((hitMatrix, hit) => {
    hitMatrix.decompose(
      reticleRef.current.position,
      reticleRef.current.quaternion,
      reticleRef.current.scale
    );
    reticleRef.current.matrixWorldAutoUpdate = true;
    reticleRef.current.rotation.set(-Math.PI / 2, 0, 0);
  });

  const placeModel = (e) => {
    let position = e.intersection.object.position.clone();
    let id = Date.now();
    setModels([{ position, id }]);
  };
  
  

  const bind = useGesture(
    {
      onPinch: ({ delta }) => {
        setZoom((prevZoom) => Math.max(0.1, prevZoom + delta[0] * 9));
      },
      onDrag: ({ pinching, cancel, offset }) => {
        if (pinching) return cancel();
        const sensitivity = 0.01;
        const diffOffset = offset[0] - prevOffsetRef.current;
        if (Math.abs(diffOffset) > 0.001) {
          const rotationY = Math.abs(diffOffset) * sensitivity;
          setRotation((prevRotation) => [
            prevRotation[0],
            prevRotation[1] + (diffOffset > 0 ? rotationY : -rotationY),
            prevRotation[2],
          ]);
          prevOffsetRef.current = offset[0];
        }
        
      },
      
    },
    {
      target: window,
      eventOptions: { passive: false },
    }
  );


  return (
    <>
      {!isPresenting && <OrbitControls />}
      <ambientLight />
      {isPresenting &&
        models.map(({ position, id }) => {
          return (
            <Fragment key={id}>
              {currentModelName === "model1" && (
                <Model1
                  model1={isPresenting}
                  position={position}
                  rotation={rotation}
                  scale={[zoom * 0.085, zoom * 0.085, zoom * 0.085]}
                />
              )}
              {currentModelName === "model2" && (
                <Model2
                  model2={isPresenting}
                  position={position}
                  rotation={rotation}
                  scale={[zoom * 0.07, zoom * 0.07, zoom * 0.07]}
                />
              )}
              {currentModelName === "model3" && (
                <Model3
                  model3={isPresenting}
                  position={position}
                  rotation={rotation}
                  scale={[zoom * 0.00095, zoom * 0.00095, zoom * 0.00095]}
                />
              )}
              
            </Fragment>
          );
        })}

      {isPresenting && (
        <Interactive onSelect={placeModel}>
          <mesh ref={reticleRef} rotation-x={-Math.PI / 2}>
            <ringGeometry args={[0.1, 0.25, 32]} />
            <meshStandardMaterial color={"white"} />
          </mesh>
        </Interactive>
      )}

      {!isPresenting && currentModelName === "model1" && (
        <Model1 model1={isPresenting} />
      )}
      {!isPresenting && currentModelName === "model2" && (
        <Model2 model2={isPresenting} />
      )}
      {!isPresenting && currentModelName === "model3" && (
        <Model3 model3={isPresenting} />
      )}
      

      {/* Gesture binding */}
      {isPresenting && <>{bind}</>}
    </>
  );
};

export default XrOverlay;
