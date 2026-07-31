import fs from "fs";
import decode from "audio-decode";
import FFT from "fft.js";
import { SongDetails } from "../config/songDetails.ts";


const fps = 60;
const samples = 64;

    const audioPath = `./public${SongDetails.audio}`;
const outputPath = `./public/audio-cache.json`;


console.log("Reading audio...");


const buffer = fs.readFileSync(audioPath);

const audioBuffer = await decode(buffer);

const channelData =
    audioBuffer.channelData[0];

const sampleRate =
    audioBuffer.sampleRate;

const duration =
    channelData.length / sampleRate;

const totalFrames =
    Math.ceil(duration * fps);


console.log(
    `Duration: ${duration}s`
);

console.log(
    `Frames: ${totalFrames}`
);


const fftSize = 2048;

const fft = new FFT(fftSize);


const cache = [];


for (let frame = 0; frame < totalFrames; frame++) {

    const start =
        Math.floor(
            frame *
            sampleRate /
            fps
        );


    const slice =
        channelData.slice(
            start,
            start + fftSize
        );


    const input =
        new Array(fftSize)
            .fill(0);


    for (
        let i = 0;
        i < slice.length;
        i++
    ) {
        input[i] = slice[i];
    }


    const output =
        fft.createComplexArray();


    fft.realTransform(
        output,
        input
    );


    const magnitudes = [];


    for (
        let i = 0;
        i < samples;
        i++
    ) {

        const real =
            output[i * 2];

        const imag =
            output[i * 2 + 1];


        const magnitude =
            Math.sqrt(
                real * real +
                imag * imag
            );


        magnitudes.push(
            magnitude / fftSize
        );
    }


    cache.push(magnitudes);


    if (frame % 500 === 0) {
        console.log(
            `${frame}/${totalFrames}`
        );
    }
}


fs.writeFileSync(
    outputPath,
    JSON.stringify(cache)
);


console.log(
    "Audio cache generated"
);