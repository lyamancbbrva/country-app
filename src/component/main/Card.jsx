import React from "react";

function Card({ name, capital, continents, flags, area, population }) {
    return (
        <div className='max-w-xs p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900 mx-auto md:m-[10px] md:w-[calc(50%-10px)] lg:m-[15px] lg:w-[calc(30%-15px)]'>
            <img
                src={flags.png}
                alt={name.common}
                className='object-cover object-center w-full rounded-md h-72 dark:bg-gray-500'
            />
            <div className='mt-6 mb-2 pr-[30px]'>
                <h5 className='font-bold hover:underline pt-[10px] capitalize text-[1.4em]'>
                    {name.common}
                </h5>
                <span className='text-[#626161]  text-[.9em] capitalize'>
                    Capital: {capital}
                </span>
                <p className='font-medium py-[10px] capitalize'>
                    Region: {continents}
                </p>
                <p className='font-medium py-[10px] capitalize'>
                    Area: {area} km2
                </p>
                <p className='font-medium py-[10px] capitalize'>
                    Population: {population}
                </p>
            </div>
        </div>
    );
}

export default Card;
