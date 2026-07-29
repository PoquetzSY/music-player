export interface Subtitle {
    start: number;
    end: number;
    text: string;
}

function parseTime(time: string): number {
    const [h, m, s] = time.split(":");
    const [sec, ms] = s.split(",");

    return (
        Number(h) * 3600 +
        Number(m) * 60 +
        Number(sec) +
        Number(ms) / 1000
    );
}

export function parseSrt(content: string): Subtitle[] {

    if (!content.trim()) {
        return [];
    }

    const blocks = content
        .trim()
        .split(/\r?\n\r?\n/);

    return blocks.reduce((acc: Subtitle[], block: string) => {

        const lines = block.split(/\r?\n/);

        // Bloque incompleto
        if (lines.length < 3) {
            return acc;
        }

        // Línea de tiempo inválida
        if (!lines[1].includes(" --> ")) {
            return acc;
        }

        const [start, end] = lines[1].split(" --> ");

        return [...acc, {
            start: parseTime(start),
            end: parseTime(end),
            text: lines.slice(2).join(" ")
        }];
    }, []);
}