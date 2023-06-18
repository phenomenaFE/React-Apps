import { Html, useProgress } from "@react-three/drei";

function CanvasLoader() {
  const { progress } = useProgress();
  return (
    <Html>
      <span className="canvas-load"> </span>
      <p className="text-base text-white-100 font-extrabold mt-9">
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
}

export default CanvasLoader;
