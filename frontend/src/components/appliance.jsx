import React, { useState } from 'react';

const Appliance = ({ Icon, name, half }) => {
    const [active, setActive] = useState(false);

    const toggle = () => {
        setActive((prev) => !prev);
    }

    return (
        <div onClick={toggle} className={`${active ? 'bg-secondary' : 'bg-white'} ${half ? 'w-[46%]' : 'w-full'} drop-shadow-toggle relative rounded-lg p-4 h-28 cursor-pointer`}>
            <Icon color={active ? 'white' : 'var(--icon)'} size={30} className="absolute top-4 right-4 drop-shadow-icon" />
            <h3 className={`${active ? 'text-white' : 'text-text_primary'} absolute bottom-4 left-4 font-bold text-xl`}>{name}</h3>
        </div>
    );
}

export default Appliance;
