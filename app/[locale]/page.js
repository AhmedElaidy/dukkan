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

  const { t } = useTranslation();

  const getHomePage = () => {
    setLoader(true);
    HomeApi.getHomePage(t("lang"))
      .then((res) => {
        setHomeData(res.data.data);
        setLoader(false);
      })
      .catch((e) => {
        setLoader(false);
        setIsError(true);
      });
  };

  useEffect(() => {
    getHomePage();
  }, []);

  const HomeDataMapping = () => {
    return homeData.map((item,index) => {
      if (item.have_show_more) {
        if (item.type === "main_categories") {
          return (
            <div key={index}>
              <CatalogCarousel data={item.content} />
              <OffersCarousel />
            </div>
          );
        } else if (item.type === "sub_categories") {
          return item.content.map((subItem, index) => {
            return (
              <ProductsSectionTemplate
                key={index}
                sectionName={subItem.name}
                products={subItem.products}
              />
            );
          });
        } else if (item.type === "single_category") {
          return (
            <ProductsSectionTemplate
              key={index}
              sectionName={item.text}
              products={item.content}
            />
          );
        } else {
          return null;
        }
      } else {
        return null;
      }
    });
  };

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
          <HomeDataMapping />
        </React.Fragment>
      )}
    </React.Fragment>
  );
}
