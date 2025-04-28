import { ModelViewer } from './ModelViewer';

export function Product3DViewer() {
  return (
    <div className="w-full h-[400px]">
      <ModelViewer
        modelPath="/models/armchair__leather/scene.gltf"
        className="w-full h-full"
      />
    </div>
  );
} 