import { Img, staticFile } from "remotion";

export function Controls() {
  return (
    <div className="flex justify-center gap-[70px]"
    >
      <Img src={staticFile("/assets/icons/next.svg")} className="size-[55px] rotate-180 " />
      <Img src={staticFile("/assets/icons/pause.svg")} className="size-[55px]" />
      <Img src={staticFile("/assets/icons/next.svg")} className="size-[55px]" />
    </div>
  );
}