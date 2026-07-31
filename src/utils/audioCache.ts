import cache from "../../public/audio-cache.json";

const audioCache = cache as number[][];

export function getAudioSamples(frame: number): number[] {

    if (audioCache.length === 0) {
        return [];
    }

    const safeFrame = Math.max(
        0,
        Math.min(
            Math.floor(frame),
            audioCache.length - 1
        )
    );

    return audioCache[safeFrame];
}