import { AbsoluteFill, staticFile } from "remotion";
import { Background } from "../components/Background";
import { AlbumCover } from "../components/AlbumCover";
import { SongInfo } from "../components/SongInfo";
import { SamsungWidget } from "../components/SamsungWidget";
import { Audio } from "@remotion/media";
import { Lyrics } from "../components/Lyrics";

export const SamsungPlayer = () => {
  return (
    <AbsoluteFill
      style={{
        background: "#1d1d2b",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: 20,
        color: "white",
        fontSize: 40,
        fontFamily: "sans-serif",
      }}
    >
      <Background />
      <AlbumCover />
      <SongInfo />
      <Lyrics />
      <SamsungWidget />
      <Audio
        src={staticFile("music.mp3")}
        durationInFrames={11888.33}
        from={0}
      />
    </AbsoluteFill>
  );
};
