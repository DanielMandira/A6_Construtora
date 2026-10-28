import React from 'react';
import Carousel from '../carousel';
import data from '../../data/carouseldata';

const ServicesSection = () => {
  return (
    <>
      <section className="grid grid-flow-row md:px-5 lg:px-10 xl:px-20 z-0 ">
        <div className="grid justify-center md:justify-start relative">
          <h2 className="Michroma text-4xl text-white ">SERVIÇOS</h2>
        </div>
      </section>
      <Carousel data={data} />
    </>
  );
};

export default ServicesSection;
