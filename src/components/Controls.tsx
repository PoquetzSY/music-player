import { Img, staticFile } from "remotion";

const iconStyle = {
  width: 55,
  height: 55,
};

const previusIconStyle = {
  width: 55,
  height: 55,
  transform: "rotate(180deg)",
}

export function Controls() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: 70,
        transform: "rotate(180deg)",
      }}
    >
      <Img src={staticFile("/assets/icons/next.svg")} style={previusIconStyle} />
      <Img src={staticFile("/assets/icons/pause.svg")} style={iconStyle} />
      <Img src={staticFile("/assets/icons/next.svg")} style={iconStyle} />
    </div>
  );
}