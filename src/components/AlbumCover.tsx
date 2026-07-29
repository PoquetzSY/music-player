import { SongDetails } from "../config/songDetails";
import { Img, staticFile } from "remotion";
import { Sizes } from "../theme/sizes";

export function AlbumCover() {
  return (
    <div className="absolute top-[120px] w-full flex justify-center">
      <Img
        src={staticFile(SongDetails.cover)}
        className={`${Sizes.albumSize} ${Sizes.borderRadius} object-cover box-shadow-2xl scale-90`}
      />
    </div>
  );
}
