import { useAudioData } from "@remotion/media-utils";
import { staticFile } from "remotion";

export function useAudio(src: string) {
    return useAudioData(staticFile(src));
}