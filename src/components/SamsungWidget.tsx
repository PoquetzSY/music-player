import { ProgressBar } from "./ProgressBar";
import { Controls } from "./Controls";
import { Visualizer } from "./Visualizer";

export function SamsungWidget() {
  return (
    <div className="absolute top-[1470px] left-[80px] right-[80px] rounded-[48px] p-[40px] bg-[rgba(50,50,50,.25)] backdrop-blur-[40px] text-white">
      <Visualizer />

      <ProgressBar />

      <Controls />
    </div>
  );
}