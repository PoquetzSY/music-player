import { useAudioData, visualizeAudio } from "@remotion/media-utils";
import { useVideoConfig, staticFile } from "remotion";

export function useVisualizer(src: string, frame: number) {
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