import React, { useContext } from "react";
import Card from "./Card";
import { useParams } from "react-router-dom";
import { cntx } from "../../data/DataContext";

function Cards({ search, setSearch }) {
    const { region } = useParams();
    const data = useContext(cntx);
    let count = 20;
    return (
        <div className='md:flex justify-center items-center flex-wrap py-[30px] my-[30px]'>
            {data &&
                data
                    .filter((item) => {
                        item.name.common
                            .toLocaleLowerCase()
                            .includes(search?.toLocaleLowerCase())
                    })
                    .slice(0, count)
                    .map((item, i) => {
                        if (
                            region == undefined ||
                            item.region.toLocaleLowerCase() == region
                        ) {
                            return <Card {...item} key={i} />;
                        }
                    })}
        </div>
    );
}

export default Cards;
