import { SongDetails } from "../config/songDetails";

export function SongInfo() {
  return (
    <div
      style={{
        position: "absolute",
        top: 920,
        width: "100%",
        textAlign: "center",
        color: "white",
      }}
    >
      <div
        style={{
          fontSize: 54,
          fontWeight: 700,
        }}
      >
        {SongDetails.title}
      </div>

      <div
        style={{
          marginTop: 18,
          fontSize: 34,
          opacity: .75,
        }}
      >
        {SongDetails.artist}
      </div>
    </div>
  );
}