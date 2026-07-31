import { useCurrentFrame, useVideoConfig } from "remotion";
import { loadFont as loadQuicksand } from "@remotion/google-fonts/Quicksand";
import { loadFont as loadEdu } from "@remotion/google-fonts/EduVICWANTHand";
import { useLyrics } from "../utils/useLyrics";
import { SongDetails } from "../config/songDetails";

export function Lyrics() {
    const { fontFamily: quicksand } = loadQuicksand();
    const { fontFamily: edu } = loadEdu();

    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const time = frame / fps;

    const lyrics = useLyrics(SongDetails.lyrics[0]);
    const sub = useLyrics(SongDetails.lyrics[1]);
    const romaji = useLyrics(SongDetails.lyrics[2]);

    const currentMain = lyrics.find(
        (l) => time >= l.start && time < l.end
    );

    const currentSub = sub.find(
        (l) => time >= l.start && time < l.end
    );

    let currentRomaji;
    if (romaji.length > 0) {
        currentRomaji = romaji.find(
            (l) => time >= l.start && time < l.end
        );
    }

    if (!currentMain && !currentSub) {
        return null;
    }

    return (
        <div style={{ fontFamily: quicksand }} className="absolute top-[1100px] left-[80px] right-[80px] flex flex-col items-center gap-12">
            {currentMain && (
                <div className="text-48 font-bold text-center text-white text-shadow-xl/50">
                    {currentMain.text}
                </div>
            )}

            {currentSub && (
                <div style={{ fontFamily: quicksand }} className="text-36 font-semibold italic text-center text-amber-400 text-shadow-xl/50">
                    {currentSub.text}
                </div>
            )}

            {currentRomaji && (
                <div style={{ fontFamily: edu }} className="text-36 font-semibold text-center text-red-300 text-shadow-xl/50">
                    {currentRomaji.text}
                </div>
            )}
        </div>
    );
}