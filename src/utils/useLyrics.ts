import { useEffect, useState } from "react";
import { staticFile } from "remotion";
import { Subtitle, parseSrt } from "./parseSrt";

export function useLyrics(file?: string) {
    const [lyrics, setLyrics] = useState<Subtitle[]>([]);

    useEffect(() => {
        if (!file) {
            setLyrics([]);
            return;
        }

        fetch(staticFile(file))
            .then((r) => {
                if (!r.ok) {
                    throw new Error(`No se pudo cargar ${file}`);
                }
                return r.text();
            })
            .then((text) => {
                setLyrics(parseSrt(text));
            })
            .catch((err) => {
                console.error(err);
                setLyrics([]);
            });

    }, [file]);

    return lyrics;
}