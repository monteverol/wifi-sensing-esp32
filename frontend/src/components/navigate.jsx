import React from 'react';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const Navigate = ({ room }) => {
    return(
        <div className="px-4 py-2 bg-white w-2/5 flex flex-row justify-between items-center rounded-lg drop-shadow-toggle">
            <FaAngleLeft className="cursor-pointer" size={44} />
            <h1 className="font-bold text-2xl">{room}</h1>
            <FaAngleRight className="cursor-pointer" size={44} />
        </div>
    );
}

export default Navigate;