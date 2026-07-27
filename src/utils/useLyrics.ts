import { useEffect, useState } from "react";
import { staticFile } from "remotion";
import { Subtitle, parseSrt } from "./parseSrt";

export function useLyrics(file: string) {

    const [lyrics, setLyrics] = useState<Subtitle[]>([]);

    useEffect(() => {

        fetch(staticFile(file))
            .then((r) => r.text())
            .then((text) => {

                const parsed = parseSrt(text);

                console.log(parsed);

                setLyrics(parsed);
            });

    }, []);

    return lyrics;
}