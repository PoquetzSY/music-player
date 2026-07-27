export function smoothSamples(samples: number[]) {

    return samples.map((_, index) => {

        let sum = 0;

        let count = 0;

        for (let i = -2; i <= 2; i++) {

            const sample = samples[index + i];

            if (sample !== undefined) {
                sum += sample;
                count++;
            }

        }

        return sum / count;

    });

}