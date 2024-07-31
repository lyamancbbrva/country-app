import React from "react";
import Card from "./Card";
import { useParams } from "react-router-dom";

function Cards({ data }) {
    const { cat } = useParams();
    console.log(
        data.filter((item) => {
            item.continents[0].toLocaleLowerCase() == "asia";
        })
    );
    return (
        <div className='md:flex justify-center items-center flex-wrap py-[30px] my-[30px]'>
            {data &&
                data.map((item, i) => {
                    if (cat == undefined) {
                        if (i < 20) {
                            return <Card {...item} key={i} />;
                        }
                    }
                    if (item.continents[0].toLocaleLowerCase() == cat) {
                        return <Card {...item} key={i} />;
                    }
                })}
        </div>
    );
}

export default Cards;
