import {Main, Layout, Basket} from "./components";
import {ContextProvider} from "./context/context";
import {Route, Routes} from "react-router-dom";
import {GlobalStyle} from "./styles";
import {PageRoutes} from "./utils";
import {Payment} from "./components/payment/Payment";
import React from "react";


function App() {
    return (
        <ContextProvider>
                <GlobalStyle/>
                <Routes>
                    <Route path={PageRoutes.LAYOUT} element={<Layout/>}>
                        <Route index element={<Main/>}/>
                        <Route path={PageRoutes.BASKET} element={<Basket/>}/>
                        <Route path={PageRoutes.PAYMENT} element={<Payment/>}/>
                        <Route path={PageRoutes.FAVORITE} element={'favorite'}/>
                        <Route path='*' element="Error" />
                    </Route>
                </Routes>
            </ContextProvider>

    );
}
export default App;
