import React from "react";
import { Link } from "react-router-dom";

function Card({ name, capital, continents, flags, area, cca3, population }) {
    return (
        <Link
            to={`/region/${cca3}`}
            className='w-[95vw] block p-6 rounded-md shadow-md dark:bg-[#ccc] dark:text-black mx-auto md:m-[10px] md:w-[calc(50%-10px)] lg:m-[15px] lg:w-[calc(25%-30px)]'
        >
            <img
                src={flags.png}
                alt={`flag of ${name.common}`}
                className='object-cover  w-full rounded-md h-72 dark:bg-gray-500'
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
        </Link>
    );
}

export default Card;
