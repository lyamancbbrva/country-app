import React, { useContext } from "react";
// import { cntx } from "../../data/DataContext";

function RandomCard({ data }) {
    // const data = useContext(cntx);
    function rnd(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    if (!data || data.length === 0) {
        return <div>No data available</div>;
    }
    let rndInd = rnd(0, data.length - 1);
    const country = data[rndInd];

    return (
        <div className='max-w-xs p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900 mx-auto my-[40px] md:flex items-center justify-between md:max-w-[100%] lg:px-[40px] wrapper lg:h-[60vh]'>
            <img
                src={country.flags.png}
                alt={`flag of ${country.name.common}`}
                className='object-cover w-full md:w-[60%] h-[100%] rounded-md  dark:bg-gray-500'
            />
            <div className='mt-6 mb-2 mx-auto'>
                <h5 className='font-bold hover:underline pt-[10px] capitalize text-[1.8em]'>
                    {country.name.common}
                </h5>
                <span className='text-[#626161]  text-[.9em] capitalize'>
                    Capital: {country.capital}
                </span>
                <p className='font-medium py-[10px] capitalize'>
                    Region: {country.region}
                </p>
                <p className='font-medium py-[10px] capitalize'>
                    Area: {country.area} km2
                </p>
                <p className='font-medium py-[10px] capitalize'>
                    Population: {country.population}
                </p>
            </div>
        </div>
    );
}

export default RandomCard;
