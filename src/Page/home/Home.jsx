import React from "react";
import HomeVisitUs from "./HomeVisitUs";
import HomeSection from './HomeSection/HomeSection';
import HomeSales from './HomeSales/HomeSales';
import HomeBestSelling from './HomeBestSelling/HomeBestSelling';
import HomeTestimonials from './HomeTestimonials/HomeTestimonials';
import HomeTrendingOutfits from './HomeTrendingOutfits/HomeTrendingOutfits';

export default function Home() {



  return (
    <>
      <HomeSection />
      <HomeSales />
      <HomeBestSelling />
      <HomeTestimonials />
      <HomeTrendingOutfits />
      <HomeVisitUs />
    </>
  );
}
