import { AbsoluteFill, Img, staticFile } from "remotion";
import { SongDetails } from "../config/songDetails";

export function Background() {
  return (
    <AbsoluteFill>
      <Img
        src={staticFile(SongDetails.background)}
        className="absolute size-full object-cover blur-sm opacity-50"
      />
    </AbsoluteFill>
  );
}