import { SongDetails } from "../config/songDetails";
import { Img, staticFile } from "remotion";
import { Sizes } from "../theme/sizes";

export function AlbumCover() {
  return (
    <div
      style={{
        position: "absolute",
        top: 120,
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Img
        src={staticFile(SongDetails.cover)}
        style={{
          width: Sizes.albumSize,
          height: Sizes.albumSize,
          borderRadius: Sizes.borderRadius,
          objectFit: "cover",
          boxShadow: "0 30px 80px rgba(0,0,0,.45)",
          scale: 0.924,
        }}
      />
    </div>
  );
}
