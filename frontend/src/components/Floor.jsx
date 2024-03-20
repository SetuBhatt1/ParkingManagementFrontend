import React, { useState, useEffect } from 'react';
import SingleFloor from "./SingleFloor";

export default function Floor() {
    const [floorNumber, setFloorNumber] = useState(null);
    const [slots, setSlots] = useState([]);

    useEffect(() => {
        const path = window.location.pathname;
        const floorNumber = parseInt(path.split('/').pop().replace('floor', ''), 10);
        setFloorNumber(floorNumber);

        // Generate slots for the floor in a 3x3 grid
        const slots = [];
        for (let i = 1; i <= 9; i++) { // Now each floor has 9 slots
            slots.push(<SingleFloor key={i} floorNumber={floorNumber} slotNumber={i} />);
        }
        setSlots(slots);
    }, []);

    // Function to create rows of slots
    const createRows = (slots) => {
        const rows = [];
        for (let i = 0; i < slots.length; i += 3) {
            rows.push(
                <div key={i} style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                    {slots.slice(i, i + 3)}
                </div>
            );
        }
        return rows;
    };

    return (
        <div>
            {createRows(slots)}
        </div>
    );
}
