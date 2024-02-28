import SingleFloor from "./SingleFloor";

export default function Floor() {
    // Number of floors
    const numberOfFloors = 9;

    // Calculate number of rows needed for wrapping
    const numberOfRows = Math.ceil(numberOfFloors / 3);

    // Generate floor components
    const floorComponents = [];
    for (let i = 0; i < numberOfFloors; i++) {
        floorComponents.push(<SingleFloor key={i} />);
    }

    // Create rows
    const rows = [];
    for (let i = 0; i < numberOfRows; i++) {
        const startIndex = i * 3;
        const endIndex = Math.min(startIndex + 3, numberOfFloors);
        const row = floorComponents.slice(startIndex, endIndex);
        rows.push(
            <div key={i} style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                {row}
            </div>
        );
    }

    return <>{rows}</>;
}
