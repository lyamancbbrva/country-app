import { useEffect, useState } from "react";
import Main from "./component/main/Main";

import { Routes, Route, useLocation } from "react-router-dom";
import Error404 from "./component/error/Error404";
import DataContext from "./context/DataContext";
import CardInfo from "./component/main/CardInfo";
import Regions from "./component/main/Regions";
import Layout from "./layout/Layout";
import Liked from "./component/main/Liked";

function App() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scroll(0, 0);
    }, [pathname]);
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route path='/' element={<Main />} />
                    <Route path="/likes" element={<Liked/>}/>
                    <Route path='/:region' element={<Regions />} />
                    <Route path='/:region/:cca3' element={<CardInfo />} />
                    <Route path='*' element={<Error404 />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
