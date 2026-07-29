import { useCurrentFrame, useVideoConfig } from "remotion";
import { useLyrics } from "../utils/useLyrics";
import { SongDetails } from "../config/songDetails";

export function Lyrics() {

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
        <div className="absolute top-[1100px] left-[80px] right-[80px] flex flex-col items-center gap-12">
            {currentMain && (
                <div className="text-48 font-bold text-center text-white">
                    {currentMain.text}
                </div>
            )}

            {currentSub && (
                <div className="text-36 italic text-center text-yellow-400 opacity-75">
                    {currentSub.text}
                </div>
            )}

            {currentRomaji && (
                <div className="text-36 italic text-center text-white-400 opacity-75">
                    {currentRomaji.text}
                </div>
            )}
        </div>
    );
}