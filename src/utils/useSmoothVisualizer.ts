import { visualizeAudio } from "@remotion/media-utils";
import { useCurrentFrame, useVideoConfig } from "remotion";
import { useAudio } from "./useAudio";

const TEMPORAL_WEIGHTS = [
    0.45,
    0.25,
    0.15,
    0.10,
    0.05,
];

function spatialSmooth(samples: number[]) {
    return samples.map((_, i) => {
        const left = samples[i - 1] ?? samples[i];
        const center = samples[i];
        const right = samples[i + 1] ?? samples[i];

        return (
            left * 0.25 +
            center * 0.5 +
            right * 0.25
        );
    });
}

export function useSmoothVisualizer(src: string) {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const audioData = useAudio(src);

    if (!audioData) {
        return [];
    }

    const smoothedFrames = TEMPORAL_WEIGHTS.map((_, offset) => {

        const samples = visualizeAudio({
            audioData,
            fps,
            frame: Math.max(0, frame - offset),
            numberOfSamples: 64,
        });

        return spatialSmooth(samples);
    });

    return smoothedFrames[0].map((_, index) => {

        let value = 0;

        for (let i = 0; i < TEMPORAL_WEIGHTS.length; i++) {
            value +=
                smoothedFrames[i][index] *
                TEMPORAL_WEIGHTS[i];
        }

        return value;
    });
}