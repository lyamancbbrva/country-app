import { useEffect, useState } from "react";
import Footer from "./component/footer/Footer";
import Header from "./component/header/Header";
import Main from "./component/main/Main";

import { Routes, Route, useLocation } from "react-router-dom";
import Error404 from "./component/error/Error404";
import DataContext from "./data/DataContext";
import CardInfo from "./component/main/CardInfo";
import Regions from "./component/main/Regions";

function App() {
    const [theme, setTheme] = useState(false);
    const { pathName } = useLocation();

    useEffect(() => {
        window.scroll(0, 0);
    }, [pathName]);
    return (
        <>
            <DataContext>
                <Header theme={theme} setTheme={setTheme} />
                <Routes>
                    <Route path='/' element={<Main />} />
                    <Route path='/:region' element={<Regions />} />
                    <Route path='/:region/:cca3' element={<CardInfo />} />
                    <Route path='*' element={<Error404 />} />
                </Routes>
                <Footer />
            </DataContext>
        </>
    );
}

export default App;
