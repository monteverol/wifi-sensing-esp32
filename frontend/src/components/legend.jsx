import React from 'react';
import Navigate from './navigate';
import LegendItem from './legend_item';
import { FaStar } from "react-icons/fa";
import { TiUser } from "react-icons/ti";
import { IoTriangle } from "react-icons/io5";

const Legend = () => {
    return(
        <div className="bg-white w-full p-8 gap-4 flex flex-row justify-evenly items-center drop-shadow-md rounded-xl">
            <Navigate room="Room 1" />
            <LegendItem Icon={FaStar} count={2} name="esp32" />
            <LegendItem Icon={TiUser} count={3} name="person" />
            <LegendItem Icon={IoTriangle} count={5} name="device" />
        </div>
    );
}

export default Legend;