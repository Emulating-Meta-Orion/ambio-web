import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

interface ModelViewerProps {
  modelPath: string;
  className?: string;
}

export function ModelViewer({ modelPath, className = "" }: ModelViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const frameRef = useRef<number>(0);
  const modelRef = useRef<THREE.Group | null>(null);
  const [showHint, setShowHint] = useState(true);

  useEffect(() => {
    console.log('ModelViewer mounted, initializing with path:', modelPath);
    if (!containerRef.current) {
      console.error('Container ref not found');
      return;
    }

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xebddd7);
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true // Enable transparency
    });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.minDistance = 3;
    controls.maxDistance = 10;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 2;
    controlsRef.current = controls;

    // Load Model
    console.log('Starting to load model from:', modelPath);
    const loader = new GLTFLoader();
    loader.load(
      modelPath,
      (gltf: GLTF) => {
        console.log('Model loaded successfully:', gltf);
        
        // Center the model
        const box = new THREE.Box3().setFromObject(gltf.scene);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());
        
        console.log('Model dimensions:', {
          width: size.x,
          height: size.y,
          depth: size.z
        });

        gltf.scene.position.x += gltf.scene.position.x - center.x;
        gltf.scene.position.y += gltf.scene.position.y - center.y;
        gltf.scene.position.z += gltf.scene.position.z - center.z;

        // Scale the model to fit in view
        const maxDim = Math.max(size.x, size.y, size.z);
        const scale = 3 / maxDim;
        gltf.scene.scale.multiplyScalar(scale);

        scene.add(gltf.scene);
        modelRef.current = gltf.scene;
        
        // Adjust camera to focus on model
        camera.lookAt(center);
        renderer.render(scene, camera);

        setTimeout(() => {
          setShowHint(false);
        }, 3000);
      },
      (progress: { loaded: number; total: number }) => {
        const percent = (progress.loaded / progress.total) * 100;
        console.log('Loading progress:', percent.toFixed(2), '%');
      },
      (error: unknown) => {
        console.error('Error loading model:', error);
      }
    );

    // Animation loop
    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current || !camera || !renderer) return;
      
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    // Handle user interaction
    const handleInteraction = () => {
      if (controlsRef.current) {
        controlsRef.current.autoRotate = false;
        setShowHint(false);
      }
    };
    renderer.domElement.addEventListener('pointerdown', handleInteraction);

    // Cleanup
    return () => {
      console.log('ModelViewer unmounting, cleaning up');
      window.removeEventListener('resize', handleResize);
      renderer.domElement.removeEventListener('pointerdown', handleInteraction);
      cancelAnimationFrame(frameRef.current);
      if (rendererRef.current) {
        rendererRef.current.dispose();
        rendererRef.current.domElement.remove();
      }
      if (controlsRef.current) {
        controlsRef.current.dispose();
      }
    };
  }, [modelPath]);

  return (
    <div ref={containerRef} className={className} style={{ position: 'relative' }}>
      {showHint && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="bg-black/60 text-white px-4 py-2 rounded-full backdrop-blur-sm flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="animate-[spin_3s_linear_infinite]"
            >
              <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
              <path d="M21 3v5h-5" />
              <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
              <path d="M8 16H3v5" />
            </svg>
            Drag to rotate
          </div>
        </div>
      )}
    </div>
  );
} 