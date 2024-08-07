import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const cntx = createContext();

function DataContext({ children }) {
    
    const [data, setData] = useState([]);

    const [likedCountry, setLikedCountry] = useState(
        JSON.parse(localStorage.getItem("likedCountry")) || []
    );
    
    useEffect(() => {
        localStorage.setItem('likedCountry', JSON.stringify(likedCountry));
    }, [likedCountry]);
    

    useEffect(() => {
        axios
            .get("https://restcountries.com/v3.1/all")
            .then((res) => setData(res.data));
    }, []);

    return (
        <cntx.Provider value={{ data, likedCountry, setLikedCountry }}>
            {children}
        </cntx.Provider>
    );
}

export default DataContext;
