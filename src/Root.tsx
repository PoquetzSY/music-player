import "./index.css";
import { Composition, staticFile } from "remotion";
import {getAudioData} from "@remotion/media-utils";
import { SamsungPlayer } from "./compositions/SamsungPlayer";
import { SongDetails } from "./config/songDetails";

export const RemotionRoot = () => {
  return (
    <Composition
      id="SamsungPlayer"
      component={SamsungPlayer}
      fps={60}
      width={1080}
      height={1920}
      calculateMetadata={async () => {
        const metadata = await getAudioData(staticFile(SongDetails.audio));

        return {
          durationInFrames: Math.ceil(metadata.durationInSeconds * 60),
        };
      }}
    />
  );
};