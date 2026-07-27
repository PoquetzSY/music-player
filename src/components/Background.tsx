import { AbsoluteFill } from "remotion";
import { Colors } from "../theme/colors";

export function Background() {
  return (
    <AbsoluteFill
      style={{
        background: Colors.background,
      }}
    />
  );
}