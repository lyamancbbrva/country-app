import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { cntx } from "../../context/DataContext";
import Card from "./Card";

function Regions() {
    const { region } = useParams();
    const { data } = useContext(cntx);
    return (
        <main className='wrapper py-[30px] my-[30px]'>
            <h1 className='text-center font-medium text-[2.5em] p-[10px] capitalize'>
                {region} Ölkələri!
            </h1>
            <div className='md:flex justify-center items-center wrapper flex-wrap py-[30px] my-[30px]'>
                {data ? (
                    data.map((item, i) => {
                        if (
                            region == undefined ||
                            item.region.toLocaleLowerCase() == region
                        ) {
                            return <Card {...item} key={i} />;
                        }
                    })
                ) : (
                    <div className='w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600'></div>
                )}
            </div>
        </main>
    );
}

export default Regions;
