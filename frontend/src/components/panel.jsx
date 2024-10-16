import React from 'react';
import Appliance from './appliance';
import { FaWind } from "react-icons/fa";
import { FaPlug } from "react-icons/fa6";
import { TbBulbFilled, TbTemperatureSnow } from "react-icons/tb";

const Panel = () => {
    return (
        <div className="h-full p-8 flex flex-col gap-8 overflow-y-hidden bg-gradient-to-b from-[#FEF1D1] to-[#FDFDFD] drop-shadow-md rounded-xl">
            <div className="h-full w-full flex flex-wrap justify-between overflow-y-scroll items-baseline content-start gap-4">
                <Appliance Icon={FaWind} name="Xiaomi Air Purifier" half={false} />
                <Appliance Icon={TbBulbFilled} name="Light 1 - (LivingRoom)" half={true} />
                <Appliance Icon={TbBulbFilled} name="Fluorescent Lamp" half={true} />
                <Appliance Icon={TbTemperatureSnow} name="Condura Air Conditioner 25w" half={false} />
                <Appliance Icon={FaPlug} name="Smart Plug 3" half={true} />
            </div>
            <div className="bg-tertiary w-full py-4 rounded-lg drop-shadow-md flex items-center justify-center cursor-pointer">
                <h1 className="text-text_primary font-bold text-3xl">Add Device</h1>
            </div>
        </div>
    );
}

export default Panel;
