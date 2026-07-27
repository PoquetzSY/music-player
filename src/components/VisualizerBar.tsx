type Props = {
    height: number;
};

export function VisualizerBar({ height }: Props) {
    return (
        <div
            style={{
                width: 5,
                height: 10,
                background: "white",
                borderRadius: 10,
                transform: `scaleY(${height})`,
                transformOrigin: "bottom",
            }}
        />
    );
}