import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdHeartEmpty } from "react-icons/io";
import { cntx } from "../../context/DataContext";

function Card({
    name,
    capital,
    continents,
    flags,
    area,
    cca3,
    population,
    like,
}) {
    return (
        <Link
            to={`/region/${cca3}`}
            className='w-[90vw] block min-h-[70vh] my-[15px] rounded-md shadow-md dark:bg-[#271b42]  mx-auto md:m-[10px] md:w-[calc(50%-10px)] lg:m-[15px] lg:w-[calc(25%-30px)]'
        >
            <img
                src={flags.svg}
                alt={`flag of ${name.common}`}
                className='object-cover h-[30vh] w-full rounded-md dark:bg-gray-500'
            />
            <div className='mt-6 mb-2 pr-[30px] p-6'>
                <div className='flex justify-between items-center'>
                    <h5 className='font-bold hover:underline pt-[10px] capitalize text-[1.4em]'>
                        {name.common}
                    </h5>
                    <IoMdHeartEmpty
                        className='text-[1.7em] m-[10px] text-end'
                        onClick={(e) => {
                            e.preventDefault();
                            like(
                                name.common,
                                capital,
                                continents,
                                flags.svg,
                                area,
                                cca3,
                                population
                            );
                        }}
                    />
                </div>
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
