
import {Outlet} from "react-router-dom";
import {Header} from "../header/Header";
import {Footer} from "../footer/Footer";
import {Bottom, Content, Top} from "./LayoutStyle";
import {Container} from "../../../styles";

export const Layout = () => {
    return (
        <Container $direction='column' $padding='0 20px'>
            <Top>
                <Header/>
            </Top>

            <Content>
                <Outlet/>
            </Content>

            <Bottom>
                <Footer/>
            </Bottom>

        </Container>
    )
}
