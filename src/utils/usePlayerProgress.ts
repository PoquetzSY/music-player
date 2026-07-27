import {
    useCurrentFrame,
    useVideoConfig,
} from "remotion";

export function usePlayerProgress() {
    const frame = useCurrentFrame();

    const { fps, durationInFrames } = useVideoConfig();

    const progress = frame / durationInFrames;

    const elapsedSeconds = frame / fps;

    const totalSeconds = durationInFrames / fps;

    const remainingSeconds = totalSeconds - elapsedSeconds;

    return {
        frame,
        fps,
        progress,
        elapsedSeconds,
        remainingSeconds,
        totalSeconds,
    };
}