import React from "react";
import NavbarResearcher from "../../components/navbar/navbarResearcher";
import DefaultFouter from "../../components/footer/DefaultFouter";
import CardPenyakit from "../../components/card/CardPenyakit";

const ResearcherPenyakitPage = () => {
  return (
    <div>
      <NavbarResearcher />

      <section className="bg-white py-8 lg:py-16 antialiased mt-[80px] max-[375px]:mx-[16px] max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-7xl  mx-auto space-y-10">
        <div className="space-y-4 ">
          <h1 className=" font-semibold text-[42px] leading-none">Penyakit</h1>
          <p className="  font-normal text-[14px] text-[#2D3748] leading-[150%]">
            Lorem ipsum dolor sit amet consectetur. Tortor fames aliquet arcu
            eleifend id mauris. In scelerisque vestibulum libero erat gravida
            nunc. Ac gravida eget ut vitae bibendum. Amet semper elementum
            pulvinar eu dictumst adipiscing vulputate eget dui. Non dapibus id
            at at amet facilisis habitasse eu.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          <CardPenyakit />
          <CardPenyakit />
          <CardPenyakit />
          <CardPenyakit />
          <CardPenyakit />
        </div>
      </section>

      <DefaultFouter />
    </div>
  );
};

export default ResearcherPenyakitPage;
