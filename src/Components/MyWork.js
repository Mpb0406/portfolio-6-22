import React from "react";

const MyWork = () => {
  return (
    <section className="-z-50 relative">
      <div className="bg-blue -mt-20">
        <h1 className="pt-52 pb-10 text-4xl font-bold md:text-5xl text-white text-center">
          My Recent Work
        </h1>
      </div>
      <div className="container flex items-center justify-between flex-wrap gap-20 w-3/4 mx-auto mt-16 pb-10 h-full">
        <div className="w-96">
          <div className=" bg-yellow-400 p-5 h-60 rounded">
            <img src="" alt="" />
          </div>
          <h3 className="text-xl font-bold text-center my-5">MJAR Training</h3>
          <p className="text-center font-bold text-sm">
            Full-Stack Fitness Tracking App built with MERN stack
          </p>
        </div>
        <div className="w-96">
          <div className=" bg-yellow-400 p-5 h-60 rounded">
            <img src="" alt="" />
          </div>
          <h3 className="text-xl font-bold text-center my-5">Website 2</h3>
          <p className="text-center font-bold text-sm">
            E-commerce website built with Next.js, Strapi/GraphQL with Stripe
            Payments
          </p>
        </div>
      </div>
    </section>
  );
};

export default MyWork;
