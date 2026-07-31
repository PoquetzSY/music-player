import { useCurrentFrame } from "remotion";
import { getAudioSamples } from "./audioCache";

const TEMPORAL_WEIGHTS = [
    0.45,
    0.25,
    0.15,
    0.10,
    0.05
];


function spatialSmooth(samples: number[]) {

    return samples.map((_, i) => {

        const left =
            samples[i - 1] ?? samples[i];

        const center =
            samples[i];

        const right =
            samples[i + 1] ?? samples[i];


        return (
            left * 0.25 +
            center * 0.5 +
            right * 0.25
        );
    });
}


export function useSmoothVisualizer() {

    const frame = useCurrentFrame();


    const frames = TEMPORAL_WEIGHTS.map(
        (_, offset) => {

            const samples =
                getAudioSamples(
                    Math.max(
                        0,
                        frame - offset
                    )
                );

            return spatialSmooth(samples);
        }
    );


    if (frames.length === 0 || frames[0].length === 0) {
        return [];
    }


    return frames[0].map((_, index) => {

        const value =
            frames.reduce(
                (sum, current, i) =>
                    sum +
                    current[index] *
                    TEMPORAL_WEIGHTS[i],
                0
            );


        // Ajuste de ganancia del FFT
        return Math.min(
            1,
            value * 8
        );
    });
}