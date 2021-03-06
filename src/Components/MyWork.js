import React from "react";
import mjar from "../img/mjar1.png";
import debsDesigns from "../img/debs-designs.PNG";

const MyWork = () => {
  return (
    <section id="work" className="-z-50 relative w-full">
      <div className="bg-blue -mt-20">
        <h1 className="pt-52 pb-10 text-4xl font-bold md:text-5xl text-white text-center">
          My Recent Work
        </h1>
      </div>
      <div className="flex items-start justify-between flex-wrap gap-20 mt-16 pb-10 h-full">
        <div className="w-96 mx-auto">
          <div className=" bg-yellow-400 h-min rounded cursor-pointer mx-3">
            <img
              src={mjar}
              alt=""
              className="rounded hover:scale-105 duration-500"
            />
          </div>
          <h3 className="text-xl font-bold text-center my-5">MJAR Training</h3>
          <p className="text-center font-bold text-sm">
            Full-Stack Fitness Tracking App built with MERN stack. Including JWT
            authentication.
          </p>
          <div id="button-container" className="w-min mx-auto flex gap-5 my-5">
            <a
              href="https://mjartrainingwebapp.herokuapp.com/"
              target="_blank"
              className="cursor-pointer w-max self-center bg-yellow-500 hover:bg-yellow-400 duration-300 text-white p-3 rounded">
              Hosted Site
            </a>
            <a
              href="https://github.com/Mpb0406/MJAR"
              target="_blank"
              className="cursor-pointer bg-transparent border-[2px] border-blue hover:bg-blue text-blue hover:text-white duration-300 text-white px-3 py-[0.68rem] rounded">
              GitHub
            </a>
          </div>
        </div>

        <div className="w-96 mx-auto">
          <div className=" bg-yellow-400 h-min rounded cursor-pointer mx-3">
            <img
              src={debsDesigns}
              alt=""
              className="rounded hover:scale-105 duration-500"
            />
          </div>
          <h3 className="text-xl font-bold text-center my-5">Deb's Designs</h3>
          <p className="text-center font-bold text-sm">
            Full-Stack Ecommerce website built with NextJS on the frontend and
            Strapi headless CMS on the backend. Stripe payment processing and
            context API for state management.
          </p>
          <div id="button-container" className="w-min mx-auto flex gap-5 my-5">
            <a
              href="https://debs-designs.vercel.app/"
              target="_blank"
              className="cursor-pointer w-max self-center bg-yellow-500 hover:bg-yellow-400 duration-300 text-white p-3 rounded">
              Hosted Site
            </a>
            <a
              href="https://github.com/Mpb0406/ecom-site"
              target="_blank"
              className="cursor-pointer bg-transparent border-[2px] border-blue hover:bg-blue text-blue hover:text-white duration-300 text-white px-3 py-[0.68rem] rounded">
              GitHub
            </a>
          </div>
        </div>

        {/* <div className="w-96 mx-auto">
          <div className=" bg-yellow-400 p-5 h-60 rounded cursor-pointer mx-3">
            <img src="" alt="" />
          </div>
          <h3 className="text-xl font-bold text-center my-5">E-Comm</h3>
          <p className="text-center font-bold text-sm">
            E-commerce website built with Next.js, Strapi/GraphQL with Stripe
            Payments
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default MyWork;
