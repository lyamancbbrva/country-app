import React from "react";

function RandomCard({ data }) {
    const [name, flags] = [...data];
    // console.log(flags.flags.png);
    return (
        <div className='max-w-xs p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900 mx-auto my-[40px] md:flex items-center justify-between md:max-w-[100%] gap-[10px] lg:[h-70vh]'>
            <img
                // src={flags.flags.png}
                // alt={name.name.common}
                className='object-cover object-center w-full md:w-[70%] rounded-md h-72 dark:bg-gray-500'
            />
            <div className='mt-6 mb-2 pr-[30px]'>
                <h5 className='font-bold hover:underline pt-[10px] capitalize text-[1.8em]'>
                    Belarus
                </h5>
                <span className='text-[#626161]  text-[.9em] capitalize'>
                    Capital: Minsk
                </span>
                <p className='font-medium py-[10px] capitalize'>
                    Region: Europe
                </p>
                <p className='font-medium py-[10px] capitalize'>
                    Area: 207600 km2
                </p>
                <p className='font-medium py-[10px] capitalize'>
                    Population: 9398861
                </p>
            </div>
        </div>
    );
}

export default RandomCard;
