import { PlayerDetails } from "../config/playerDetails";
import { usePlayerProgress } from "../utils/usePlayerProgress";

export function ProgressBar() {
    const {
        progress,
        elapsedSeconds,
        remainingSeconds,
    } = usePlayerProgress();

    return (
        <>
            <div
                style={{
                    position: "relative",
                    width: "100%",
                    height: 8,
                }}
            >
                {/* Fondo */}
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        background: "#6f6f6f",
                        borderRadius: 999,
                    }}
                />

                {/* Barra */}
                <div
                    style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        height: 8,
                        width: `${progress * 100}%`,
                        background: `${PlayerDetails.accent}`,
                        borderRadius: 999,
                    }}
                />

                {/* Círculo */}
                <div
                    style={{
                        position: "absolute",
                        left: `calc(${progress * 100}% - 10px)`,
                        top: -6,

                        width: 20,
                        height: 20,

                        borderRadius: "50%",

                        background: `${PlayerDetails.accent}`,

                        boxShadow: "0 0 12px rgba(214,255,0,.45)",
                    }}
                />
            </div>

            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: 18,
                    color: "white",
                    fontSize: 24,
                }}
            >
                <span>{format(elapsedSeconds)}</span>

                <span>-{format(remainingSeconds)}</span>
            </div>
        </>
    );
}

function format(seconds: number) {
    seconds = Math.max(0, Math.floor(seconds));

    const minutes = Math.floor(seconds / 60);

    const secs = seconds % 60;

    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
}