import { SongDetails } from "../config/songDetails";
import { VisualizerBar } from "./VisualizerBar";
import { useSmoothVisualizer } from "../utils/useSmoothVisualizer";

export function Visualizer() {

    const raw = useSmoothVisualizer(SongDetails.audio);

    const samples = raw.slice(0, 64);

    return (
        <div
            style={{
                display: "flex",
                alignItems: "flex-end",
                gap: 2,
                height: 80,
            }}
        >
            {samples.map((sample, index) => {
                const normalized = Math.pow(sample, 0.325);

                const center = samples.length / 2;

                const x = (index - center) / center;

                const weight = Math.exp(-x * x * 2.8);
                const variation =
                    1 +
                    Math.sin(index * 0.7) * 0.08;

                const height = Math.max(
                    0.25,
                    normalized *
                    weight *
                    variation *
                    12
                );

                const barHeight = height * 30;

                return (
                    <VisualizerBar
                        key={index}
                        height={barHeight}
                    />
                );
            })}
        </div>
    );
}