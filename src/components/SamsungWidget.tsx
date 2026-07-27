import { ProgressBar } from "./ProgressBar";
import { Controls } from "./Controls";
import { Visualizer } from "./Visualizer";

export function SamsungWidget() {
  return (
    <div
      style={{
        position: "absolute",
        left: 70,
        right: 70,
        top: 1470,

        background: "rgba(120,120,120,.25)",
        backdropFilter: "blur(40px)",

        borderRadius: 48,

        padding: 40,

        color: "white",
      }}
    >
      <Visualizer />

      <ProgressBar />

      <Controls />
    </div>
  );
}