import { usePlayerProgress } from "../utils/usePlayerProgress";

export function ProgressBar() {
    const {
        progress,
        elapsedSeconds,
        remainingSeconds,
    } = usePlayerProgress();

    return (
        <>
            <div className="relative w-full h-[8px]">
                {/* Fondo */}
                <div className="absolute inset-0 bg-[#6f6f6f] rounded-full" />

                {/* Barra */}
                <div className={`absolute top-0 left-0 h-[8px] bg-white rounded-full`}
                    style={{
                        width: `${progress * 100}%`,
                    }}
                />

                {/* Círculo */}
                <div className="absolute rounded-full size-[20px] bg-white"
                    style={{
                        left: `calc(${progress * 100}% - 10px)`,
                        top: -6,
                    }}
                />
            </div>

            <div className="flex justify-between mt-4 text-white text-lg">
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