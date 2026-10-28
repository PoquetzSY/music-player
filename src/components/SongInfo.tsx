import { SongDetails } from "../config/songDetails";
import { loadFont as loadQuicksand } from "@remotion/google-fonts/Quicksand";

export function SongInfo() {
  const { fontFamily: quicksand } = loadQuicksand();
  return (
    <div style={{ fontFamily: quicksand }} className="absolute top-[880px] w-full text-center text-white gap-2 flex flex-col items-center">
      <div className="text-6xl font-bold text-shadow-xl/50">
        {SongDetails.title}
      </div>

      {SongDetails.artist.length > 19 ? (
        <>
          <div className={`flex justify-center mt-2 italic text-shadow-xl/50 w-4/6 ${SongDetails.album ? "gap-10" : ""}`}>
            <div className="text-4xl">{SongDetails.album}</div>
          </div>
          <div className={`flex justify-center mt-2 italic text-shadow-xl/50 w-4/6 ${SongDetails.album ? "gap-10" : ""}`}>
            <div className="text-4xl">{SongDetails.artist} </div>
          </div>
        </>

      ) : <div className={`flex justify-center mt-2 italic text-shadow-xl/50 w-4/6 ${SongDetails.album ? "gap-10" : ""}`}>
        <div className="text-4xl">{SongDetails.artist} </div>

        {SongDetails.album ? (
          <>
            <div className="text-4xl">~</div>
            <div className="text-4xl">{SongDetails.album}</div>
          </>
        ) : null}
      </div>}

    </div >
  );
}