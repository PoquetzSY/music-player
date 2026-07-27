import { useAudioData, visualizeAudio } from "@remotion/media-utils";
import { useCurrentFrame, useVideoConfig, staticFile } from "remotion";

export function useVisualizer(src: string) {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const audioData = useAudioData(staticFile(src));

    if (!audioData) {
        return [];
    }

    return visualizeAudio({
        fps,
        frame,
        audioData,
        numberOfSamples: 64,
    });
}