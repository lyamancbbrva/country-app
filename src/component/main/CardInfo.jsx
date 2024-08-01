import React from "react";
import { useContext } from "react";
import { cntx } from "../../data/DataContext";
import { useParams } from "react-router-dom";

function CardInfo() {
    const data = useContext(cntx);
    const { cca3 } = useParams();
    console.log(data);
    return (
        <main>
            {data.map((item, i) => {
                if (item.cca3 === cca3) {
                    return (
                        <div
                            key={i}
                            className='w-[85vw] mx-auto my-[30px] wrapper lg:flex items-center justify-center h-[80vh]'
                        >
                            <div className='img w-[100%] object-cover'>
                                <img
                                    className='lg:w-[70%]'
                                    src={item.flags.png}
                                    alt={`flag of ${item.name.common}`}
                                />
                            </div>
                            <div className='card-texts py-[10px] text-[1.1em] lg:text-[1.4em] lg:w-[50%]'>
                                <h6 className='capitalize text-[2em] font-bold py-[10px] '>
                                    {item.name.common}
                                </h6>
                                <h6 className="text-[#626161]  text-[.9em] capitalize'">
                                    Capital: {item.capital}
                                </h6>
                                <h6 className='font-medium py-[10px] capitalize'>
                                    Region: {item.region}
                                </h6>
                                <p className='font-medium py-[10px] capitalize'>
                                    Area: {item.area} km
                                </p>
                                <p className='font-medium py-[10px] capitalize'>
                                    Population: {item.population}
                                </p>
                                <p className='font-medium py-[10px] capitalize'>
                                    Currencies:{" "}
                                    {Object.values(item.currencies)[0].name}
                                </p>
                                <p className='font-medium py-[10px] capitalize'>
                                    {item.borders &&
                                        " Borders: " + [...item.borders]}
                                </p>
                            </div>
                        </div>
                    );
                }
            })}
        </main>
    );
    // console.log(arr);
}

export default CardInfo;
