"use client";
import HomeApi from "@/_utils/HomeApi";
import Banners from "@/components/Banners/Banners";
import CatalogCarousel from "@/components/CatalogCarousel/CatalogCarousel";
import ErrorComponent from "@/components/Error/ErrorComponent";
import HeroCarousel from "@/components/HeroCarousel/HeroCarousl";
import Loader from "@/components/Loader/Loader";
import OffersCarousel from "@/components/OffersCarousel/OffersCarousel";
import ProductsSectionTemplate from "@/components/SectionsTemplate/ProductsSectionTemplate";
import SingleBanner from "@/components/SingleBanner/SingleBanner";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function Home() {
  const [loader, setLoader] = useState(true);
  const [isError, setIsError] = useState(false);
  const [homeData, setHomeData] = useState([]);
  const cashBackBanner = "https://i.ibb.co/qmwQHGL/banner-chashback-ad.png";
  const promoBanner = "https://i.ibb.co/HtX1fqW/promo-gift-card.png";
  const countDownBanner = "https://i.ibb.co/sK6T26D/countdown-add.png";
  const products = [
    {
      id: 1,
      padge: { name: "topdeal" },
      isFav: false,
      img: "https://i.ibb.co/x5Zsq7x/image-Frame.png",
      rating: 3,
      cashback: 5.99,
      price: 25,
      quantity: 5,
      name: "Pasta Reggia — Penne ziti, 500g",
      description: "More information",
    },
    {
      id: 2,
      padge: { name: "sale", value: 20 },
      isFav: false,
      img: "https://i.ibb.co/DKbr3J9/image-Frame-1.png",
      rating: 2,
      cashback: 5.99,
      price: 25,
      oldPrice: 30,
      quantity: 0,
      name: "Pasta Reggia — Penne ziti, 500g",
      description: "More information",
    },
    {
      id: 3,
      padge: { name: "topdeal" },
      isFav: false,
      img: "https://i.ibb.co/5K76bnj/image-Frame-2.png",
      rating: 1,
      cashback: 5.99,
      price: 25,
      oldPrice: 30,
      quantity: 5,
      name: "Pasta Reggia — Penne ziti, 500g",
      description: "More information",
    },
    {
      id: 4,
      padge: { name: "topdeal" },
      isFav: false,
      img: "https://i.ibb.co/DKbr3J9/image-Frame-1.png",
      rating: 3,
      cashback: 5.99,
      price: 23,
      oldPrice: 33,
      quantity: 5,
      name: "Pasta Reggia — Penne ziti, 500g",
      description: "More information",
    },
    {
      id: 5,
      padge: { name: "sale", value: 20 },
      isFav: false,
      img: "https://i.ibb.co/5K76bnj/image-Frame-2.png",
      rating: 5,
      cashback: 5.99,
      price: 25,
      oldPrice: 30,
      quantity: 5,
      name: "Pasta Reggia — Penne ziti, 500g",
      description: "More information",
    },
    {
      id: 6,
      padge: { name: "sale", value: 20 },
      isFav: false,
      img: "https://i.ibb.co/x5Zsq7x/image-Frame.png",
      rating: 3,
      cashback: 5.99,
      price: 25,
      quantity: 5,
      name: "Pasta Reggia — Penne ziti, 500g",
      description: "More information",
    },
    {
      id: 7,
      padge: { name: "sale", value: 20 },
      isFav: false,
      img: "https://i.ibb.co/x5Zsq7x/image-Frame.png",
      rating: 2,
      cashback: 5.99,
      price: 25,
      oldPrice: 30,
      quantity: 5,
      name: "Pasta Reggia — Penne ziti, 500g",
      description: "More information",
    },
    {
      id: 8,
      padge: { name: "sale", value: 20 },
      isFav: false,
      img: "https://i.ibb.co/x5Zsq7x/image-Frame.png",
      rating: 4,
      cashback: 5.99,
      price: 25,
      oldPrice: 50,
      quantity: 5,
      name: "Pasta Reggia — Penne ziti, 500g",
      description: "More information",
    },
  ];

  const { t } = useTranslation();

  const getHomePage = () => {
    setLoader(true);
    HomeApi.getHomePage(t("lang"))
      .then((res) => {
        setHomeData(res.data.data);
        setLoader(false);
      })
      .catch((e) => {
        console.log("e is ", e);
        setLoader(false);
        setIsError(true);
      });
  };

  useEffect(() => {
    getHomePage();
  }, []);

  return (
    <React.Fragment>
      {isError ? (
        <ErrorComponent />
      ) : loader ? (
        <Loader />
      ) : (
        <React.Fragment>
          <HeroCarousel />
          <Banners />
          <SingleBanner img={cashBackBanner} />
          {homeData.map((item) => {
            if (item.content.length > 0) {
              if (item.type == "main_categories") {
                return <CatalogCarousel data={item.content} />;
              }
            }
          })}
          <OffersCarousel />
          <ProductsSectionTemplate
            sectionName="Top Deals"
            products={products}
          />
          <SingleBanner img={promoBanner} />
          <ProductsSectionTemplate
            sectionName="Most Popular Products"
            products={products}
          />
          <SingleBanner img={countDownBanner} />
          <ProductsSectionTemplate
            sectionName="Personal Care"
            products={products}
          />
          <ProductsSectionTemplate
            sectionName="Products You May Like"
            products={products}
          />
        </React.Fragment>
      )}
    </React.Fragment>
  );
  // return (
  //   <React.Fragment>
  //     <HeroCarousel />
  //     <Banners />
  //     <CatalogCarousel />
  //     <SingleBanner img={cashBackBanner} />
  //     <ProductsSectionTemplate
  //       sectionName="Highest Cashback"
  //       products={products}
  //     />
  //     <OffersCarousel />
  //     <ProductsSectionTemplate sectionName="Top Deals" products={products} />
  //     <SingleBanner img={promoBanner} />
  //     <ProductsSectionTemplate
  //       sectionName="Most Popular Products"
  //       products={products}
  //     />
  //     <SingleBanner img={countDownBanner} />
  //     <ProductsSectionTemplate
  //       sectionName="Personal Care"
  //       products={products}
  //     />
  //     <ProductsSectionTemplate
  //       sectionName="Products You May Like"
  //       products={products}
  //     />
  //   </React.Fragment>
  // );
}
