import { Canvas } from "@react-three/fiber";
import { ARButton, XR } from "@react-three/xr";
import { useCallback, useState } from "react";
import { CharacterAnimationsProvider } from "../../contexts/ModelControl";
import XrGallery from "./XrGallery";
import { Environment } from "@react-three/drei";
import Interface from "./Interface";
import { Suspense,useRef } from "react";
import {PerspectiveCamera} from '@react-three/drei'
import {useThree} from '@react-three/fiber'
const XrGalleryContainer = () => {
  const [overlayContent, setOverlayContent] = useState(null);
  let interfaceRef = useCallback((node) => {
    if (node !== null) {
      setOverlayContent(node);
    }
  });
  const cameraRef = useRef();

  const handlePrev = () => {
    if (cameraRef.current) {
      cameraRef.current.position.x -= 0;
      cameraRef.current.position.y -= 0;
      cameraRef.current.position.z -= -1;
    }
  };

  const handleNext = () => {
    if (cameraRef.current) {
      cameraRef.current.position.x += 0;
      cameraRef.current.position.y += 0;
      cameraRef.current.position.z += -1.3;
    }
  };

  return (
    <CharacterAnimationsProvider >
      <Interface colapsed={close} arMode={true} ref={interfaceRef} />
      <ARButton
        className="ar-button"
        sessionInit={{
          requiredFeatures: ["hit-test"],
          optionalFeatures: ["dom-overlay", "bounded-floor", "plane-detection"],
          domOverlay: { root: overlayContent },
        }}
      />

      <Canvas style={{ touchAction: "none" }}>
      <PerspectiveCamera
        makeDefault
        position={[0,0,5]}
        ref={cameraRef}
      />
        <ambientLight intensity={1} />
        
        <XR>
        <Suspense fallback={null}>
          <XrGallery />
          </Suspense>
        </XR>
        <Environment preset="sunset" />
      </Canvas>
      <div>
        <button onClick={handlePrev}>Prev</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </CharacterAnimationsProvider>
  );
};

export default XrGalleryContainer;
