import "./index.css";
import { Composition, staticFile } from "remotion";
import { SamsungPlayer } from "./compositions/SamsungPlayer";
import { getAudioData } from "@remotion/media-utils";
import { SongDetails } from "./config/songDetails";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="SamsungPlayer"
        component={SamsungPlayer}
        calculateMetadata={async () => {
          const metadata = await getAudioData(staticFile(SongDetails.audio));

          return {
            durationInFrames: Math.ceil(metadata.durationInSeconds * 60),
          };
        }}
        fps={60}
        width={1080}
        height={1920}
      />
    </>
  );
};
