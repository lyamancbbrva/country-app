import { useEffect, useState } from "react";
import Footer from "./component/footer/Footer";
import Header from "./component/header/Header";
import Main from "./component/main/Main";
import axios from "axios";
import { Routes, Route, useParams } from "react-router-dom";
import Error404 from "./component/error/Error404";
import Card from "./component/main/Card";
import Cards from "./component/main/Cards";

function App() {
    const [status, setStatus] = useState(false);
    const [data, setData] = useState([]);
    const [searchSt, setSearchSt] = useState(false)

    useEffect(() => {
        axios
            .get("https://restcountries.com/v3.1/all")
            .then((res) => setData(res.data));
    }, []);

    return (
        <>
            <Header status={status} setStatus={setStatus} data={data} />
            <Routes>
                <Route path='/' element={<Main data={data} searchSt={searchSt} setSearchSt={setSearchSt} />} />
                <Route path='/:cat' element={<Cards data={data} />} />
                <Route path='*' element={<Error404 />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
