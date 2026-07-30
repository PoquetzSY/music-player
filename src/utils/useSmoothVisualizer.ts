import { useMemo, useRef } from "react";
import { useVisualizer } from "./useVisualizer";

export function useSmoothVisualizer(src: string) {

    const raw = useVisualizer(src);

    const previous = useRef<number[]>([]);

    return useMemo(() => {

        if (raw.length === 0) {
            return [];
        }

        // 1. Suavizado espacial
        const smoothed = raw.map((_, i) => {

            const left = raw[i - 1] ?? raw[i];
            const center = raw[i];
            const right = raw[i + 1] ?? raw[i];

            return (
                left * 0.25 +
                center * 0.5 +
                right * 0.25
            );
        });

        // 2. Inercia
        const attack = 0.45;
        const release = 0.08;

        const result = smoothed.map((value, i) => {

            const last = previous.current[i] ?? value;

            if (value > last) {
                return last + (value - last) * attack;
            }

            return last + (value - last) * release;
        });

        previous.current = result;

        return result;

    }, [raw]);
}