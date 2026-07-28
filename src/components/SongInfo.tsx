import { SongDetails } from "../config/songDetails";

export function SongInfo() {
  return (
    <div className="absolute top-[880px] w-full text-center text-white gap-2 flex flex-col items-center">
      <div className="text-6xl font-bold">
        {SongDetails.title}
      </div>

      <div className={`flex justify-center mt-2 italic ${SongDetails.album ? "gap-10" : ""}`}>
        <div className="text-4xl opacity-75">{SongDetails.artist} </div>
        {SongDetails.album ? (
          <>
            <div className="text-4xl opacity-75">~</div>
            <div className="text-4xl opacity-75">{SongDetails.album}</div>
          </>
        ) : null}
      </div>
    </div >
  );
}