import React from 'react';

const LegendItem = ({ Icon, count, name }) => {
    
    const capitalizeFirstLetter = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    return(
        <div className="p-4 drop-shadow-md flex flex-row items-center gap-4 rounded-lg" style={{ backgroundColor: `var(--${name}-light)` }}>
            <Icon color={`var(--${name})`} size={25} />
            <h1 className="font-bold text-xl" style={{ color: `var(--${name})` }}>
                {count} {count > 1 ? `${capitalizeFirstLetter(name)}s` : capitalizeFirstLetter(name)}
            </h1>
        </div>
    );
}

export default LegendItem;