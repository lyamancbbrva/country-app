import { useEffect, useState } from "react";
import Footer from "./component/footer/Footer";
import Header from "./component/header/Header";
import Main from "./component/main/Main";

import { Routes, Route, useLocation } from "react-router-dom";
import Error404 from "./component/error/Error404";
import Cards from "./component/main/Cards";
import DataContext from "./data/DataContext";
import CardInfo from "./component/main/CardInfo";

function App() {
    const [status, setStatus] = useState(false);
    const [searchSt, setSearchSt] = useState(false);
    const [search, setSearch] = useState("");
    const [theme, setTheme] = useState(false);

    const {pathName} = useLocation()
    useEffect(()=>{
        window.scroll(0, 0)
    },[pathName])
    return (
        <>
            <DataContext>
                <Header
                    status={status}
                    setStatus={setStatus}
                    theme={theme}
                    setTheme={setTheme}
                />
                <Routes>
                    <Route
                        path='/'
                        element={
                            <Main
                                searchSt={searchSt}
                                setSearchSt={setSearchSt}
                                search={search}
                                setSearch={setSearch}
                            />
                        }
                    />
                    <Route
                        path='/:region'
                        element={<Cards />}
                    />
                    <Route path='/:region/:cca3' element={<CardInfo />} />
                    <Route path='/*' element={<Error404 />} />
                </Routes>
                <Footer />
            </DataContext>
        </>
    );
}

export default App;
