import { useCurrentFrame, useVideoConfig } from "remotion";
import { useLyrics } from "../utils/useLyrics";

export function Lyrics() {

    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const time = frame / fps;

    const lyrics = useLyrics("lyrics.srt");
    const sub = useLyrics("lyrics-sub.srt");

    const currentMain = lyrics.find(
        (l) => time >= l.start && time < l.end
    );

    const currentSub = sub.find(
        (l) => time >= l.start && time < l.end
    );

    if (!currentMain && !currentSub) {
        return null;
    }

    return (
        <div
            style={{
                position: "absolute",
                top: 1150,
                left: 80,
                right: 80,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 12,
            }}
        >
            {currentMain && (
                <div
                    style={{
                        color: "white",
                        fontSize: 48,
                        fontWeight: "bold",
                        textAlign: "center",
                    }}
                >
                    {currentMain.text}
                </div>
            )}

            {currentSub && (
                <div
                    style={{
                        color: "rgba(255, 241, 41, 0.75)",
                        fontSize: 36,
                        fontStyle: "italic",
                        textAlign: "center",
                    }}
                >
                    {currentSub.text}
                </div>
            )}
        </div>
    );
}