type Props = {
    height: number;
};

export function VisualizerBar({ height }: Props) {
    return (
        <div
            style={{
                width: 12,
                height,
                borderRadius: 999,
                background: "white",
            }}
        />
    );
}