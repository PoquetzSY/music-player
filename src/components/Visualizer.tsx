import { SongDetails } from "../config/songDetails";
import { useVisualizer } from "../utils/useVisualizer";
import { smoothSamples } from "../utils/smoothSamples";
import { VisualizerBar } from "./VisualizerBar";

export function Visualizer() {

    const raw = useVisualizer(SongDetails.audio);

    const samples = smoothSamples(raw).slice(0, 64);

    const mirrored = [
        ...samples.slice().reverse(),
        ...samples
    ];

    return (
        <div 
            style={{
                display: "flex",
                alignItems: "flex-end",
                gap: 2,
                height: 80,
            }}
        >
            {mirrored.map((sample, index) => {

                const center = mirrored.length / 2;

                const distance = Math.abs(index - center);

                const weight = 1 - (distance / center);

                const height =
                    Math.max(
                        0.15,
                        sample * 10 * (0.5 + weight)
                    );

                return (
                    <VisualizerBar
                        key={index}
                        height={height}
                    />
                );
            })}
        </div>
    );
}