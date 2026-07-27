export function Clock() {
  return (
    <div
      style={{
        position: "absolute",
        top: 170,
        width: "100%",
        textAlign: "center",
        color: "white",
      }}
    >
      <div
        style={{
          fontSize: 38,
          opacity: .85,
        }}
      >
        lun, 27 de julio
      </div>

      <div
        style={{
          fontSize: 170,
          fontWeight: 200,
          lineHeight: .9,
        }}
      >
        10
        <br />
        05
      </div>
    </div>
  );
}