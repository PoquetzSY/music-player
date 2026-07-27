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

    const blocks = content
        .trim()
        .split(/\r?\n\r?\n/);

    return blocks.map((block) => {

        const lines = block.split(/\r?\n/);

        const [start, end] = lines[1].split(" --> ");

        return {
            start: parseTime(start),
            end: parseTime(end),
            text: lines.slice(2).join(" ")
        };
    });
}