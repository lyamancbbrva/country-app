import React, { useContext } from "react";
import { cntx } from "../../context/DataContext";
import { Link } from "react-router-dom";

function Liked() {

    const { likedCountry, setlikedCountry } = useContext(cntx);
    
    return (
        <>
            <h1 className='text-[40px] text-center my-[60px]'>
                Sevimli olkelerim
            </h1>
            <section className='md:flex justify-center items-center wrapper flex-wrap py-[30px] my-[30px]'>
                {likedCountry.map((item) => {
                    const { id, name, capital, region, area, population, img } = item;
                    return (
                        <Link
                            to={`/region/${id}`}
                            className='w-[90vw] block min-h-[70vh] my-[15px] rounded-md shadow-md dark:bg-[#271b42]  mx-auto md:m-[10px] md:w-[calc(50%-10px)] lg:m-[15px] lg:w-[calc(25%-30px)]'
                        >
                            <img
                                src={img}
                                alt={`flag of ${name}`}
                                className='object-contain  w-full rounded-md dark:bg-gray-500'
                            />
                            <div className='mt-6 mb-2 pr-[30px] p-6'>
                                <h5 className='font-bold hover:underline pt-[10px] capitalize text-[1.4em]'>
                                    {name}
                                </h5>
                                <span className='text-[#626161]  text-[.9em] capitalize'>
                                    Capital: {capital}
                                </span>
                                <p className='font-medium py-[10px] capitalize'>
                                    Region: {region}
                                </p>
                                <p className='font-medium py-[10px] capitalize'>
                                    Area: {area} km2
                                </p>
                                <p className='font-medium py-[10px] capitalize'>
                                    Population: {population}
                                </p>
                                <div>
                                    <button className='p-2 rounded-md bg-gray-200 '>
                                        Sevimli ölkeni sil
                                    </button>
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </section>
            <div className='text-center mb-[40px]'>
                <button
                    onClick={() => {
                        localStorage.clear();
                        setlikedCountry([]);
                    }}
                    className='p-2  bg-blue-500 text-[16px] text-white rounded-md'
                >
                    Sebetini temizle
                </button>
            </div>
        </>
    );
}

export default Liked;
