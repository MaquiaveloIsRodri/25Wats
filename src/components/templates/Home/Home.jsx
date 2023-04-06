import React from 'react';
import { linksHeader } from "../../../content/Content";
import Header from "../../organisms/Header/Header";
import PageHome from "../../organisms/PageHome/PageHome";
import AboutUs from '../../organisms/AboutUs/AboutUs';
import ServicesHome from '../../organisms/ServicesHome/ServicesHome';
import ProductHome from '../../organisms/ProductsHome/ProductsHome';


const Home = () => {
    return (
        <div>
            <Header links={linksHeader} Logo="../../../../assets/img/logo_25w.png" Alt="logo 25Wts"></Header>
            <PageHome></PageHome>
            <AboutUs />
            <ServicesHome />
            <ProductHome />
        </div>
    )
}

export default Home;