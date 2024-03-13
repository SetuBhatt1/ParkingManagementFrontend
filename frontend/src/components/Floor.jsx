// import React, { useState, useEffect } from 'react';
// import SingleFloor from "./SingleFloor";

// export default function Floor() {
//     const [floorNumber, setFloorNumber] = useState(null);
//     const [slots, setSlots] = useState([]);

//     useEffect(() => {
        
//         const path = window.location.pathname;
//         const floorNumber = parseInt(path.split('/').pop().replace('floor', ''), 10);
//         setFloorNumber(floorNumber);

//         // Generate slots for the floor
//         const slots = [];
//         for (let i = 1; i <= 3; i++) { // Assuming each floor has 3 slots
//             slots.push(<SingleFloor key={i} floorNumber={floorNumber} slotNumber={i} />);
//         }
//         setSlots(slots);
//     }, []);

//     return (
//         <div>
//             {slots.map(slot => slot)}
//         </div>
//     );
// }

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
