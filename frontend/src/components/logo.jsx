import React from 'react';
import { FaUserCircle } from "react-icons/fa";

const Logo = () => {
    return(
        <div className="bg-white p-8 flex flex-row gap-8 h-min rounded-xl drop-shadow-md items-center justify-center">
            <FaUserCircle color="var(--secondary)" size={60} />
            <h1 className="font-bold text-6xl drop-shadow-md">
                <span className="text-text_primary">WiF</span>
                <span className="text-text_secondary">-</span>
                <span className="text-secondary">eye</span>
            </h1>
        </div>
    );
}

export default Logo;