import { AbsoluteFill, Img, staticFile } from "remotion";
import { SongDetails } from "../config/songDetails";

export function Background() {
  return (
    <AbsoluteFill>
      <Img
        src={staticFile(SongDetails.background)}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: 0.5,
          filter: "blur(12px)",
          transform: "scale(1.1)",
        }}
      />
    </AbsoluteFill>
  );
}