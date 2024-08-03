import React, { useContext } from "react";
import Card from "./Card";
import { useParams } from "react-router-dom";
import { cntx } from "../../data/DataContext";

function Cards({ search }) {
    
    const data = useContext(cntx);

    return (
        <>
            <div className='md:flex justify-center items-center wrapper flex-wrap py-[30px] my-[30px]'>
               
            </div>
           
        </>
    );
}

export default Cards;
