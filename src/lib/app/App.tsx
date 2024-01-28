import React from "react";
import { MainStage } from "@lib/widgets/mainStage/ui/MainStage";
import { Stage } from "@pixi/react";
import "@lib/features/init";

export default function App() {
  return (
    <React.StrictMode>
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <MainStage></MainStage>
      </Stage>
    </React.StrictMode>
  );
}
