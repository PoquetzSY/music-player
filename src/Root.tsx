import "./index.css";
import { Composition } from "remotion";
import { SamsungPlayer } from "./compositions/SamsungPlayer";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="SamsungPlayer"
        component={SamsungPlayer}
        durationInFrames={11889}
        fps={60}
        width={1080}
        height={1920}
      />
    </>
  );
};
