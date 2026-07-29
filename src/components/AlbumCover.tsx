import { SongDetails } from "../config/songDetails";
import { Img, OffthreadVideo, staticFile } from "remotion";
import { Sizes } from "../theme/sizes";

export function AlbumCover() {
  const isVideo = SongDetails.cover.toLowerCase().endsWith(".mp4");

  const style = {
    width: Sizes.albumSize,
    height: Sizes.albumSize,
    borderRadius: Sizes.borderRadius,
    objectFit: "cover" as const,
    boxShadow: "0 30px 80px rgba(0,0,0,.45)",
    scale: 0.924,
  };

  return (
    <div className="absolute top-[120px] w-full flex justify-center">
      {isVideo ? (
        <OffthreadVideo
          src={staticFile(SongDetails.cover)}
          style={style}
          muted
        />
      ) : (
        <Img
          src={staticFile(SongDetails.cover)}
          style={style}
        />
      )}
    </div>
  );
}