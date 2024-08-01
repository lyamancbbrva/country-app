import React, {  createContext, useEffect, useState } from "react";
import axios from "axios";
export const cntx = createContext();

function DataContext({ children }) {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios
            .get("https://restcountries.com/v3.1/all")
            .then((res) => setData(res.data));
    }, []);

    return <cntx.Provider value={data}>{children}</cntx.Provider>;
}

export default DataContext;
