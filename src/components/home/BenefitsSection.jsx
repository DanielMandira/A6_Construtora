import React from 'react';
import CarouselBeneficios from '../carouselBeneficios';
import dataBene from '../../data/carouselBeneficios';

const BenefitsSection = () => {
  return (
    <section id="beneficios" className="grid grid-flow-row lg:grid-flow-col mx-5 lg:mx-10 xl:mx-20 gap-3 justify-center lg:justify-between my-16 ">
      <div className="flex flex-col justify-center">
        <p className="Sora md:grid hidden  text-center lg:text-start text-laranja-primary text-2xl"> Benefícios</p>
        <h2 className="Michroma text-white text-center lg:text-start text-2xl lg:text-5xl xl:text-7xl leading-normal md:leading-normal sm:leading-normal lg:leading-normal xl:leading-normal">SEU <br className="hidden lg:flex" />PROJETO, <br /> NOSSA <span className="text-laranja-primary"><br className="flex md:hidden lg:flex" /> EXPERTISE</span></h2>
      </div>
      <div className="flex flex-row flex-auto justify-self-center" >
        <CarouselBeneficios data={dataBene} />
      </div>
    </section>
  );
};

export default BenefitsSection;
