import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { cntx } from "../../data/DataContext";
import Card from "./Card";

function Regions() {
    const { region } = useParams();
    const data = useContext(cntx);
    return (
        <main className='md:flex justify-center items-center wrapper flex-wrap py-[30px] my-[30px]'>
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
        </main>
    );
}

export default Regions;
