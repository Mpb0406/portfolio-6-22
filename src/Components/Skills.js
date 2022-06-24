import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import figma from "../img/figma.png";
import xd from "../img/xd.png";
import ai from "../img/ai.png";
import next from "../img/next.png";
import react from "../img/react.png";
import redux from "../img/redux.png";
import tailwind from "../img/tailwind.png";
import sass from "../img/sass.png";
import graphql from "../img/graphql.png";
import node from "../img/node.png";
import mongo from "../img/mongo.png";
import auth0 from "../img/auth0.png";

const Skills = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-white rounded-md flex flex-wrap md:flex-nowrap gap-x-5 p-3 w-11/12 md:w-3/4 border-2 shadow-xl mx-auto -mt-36">
      <div className="mt-16">
        <h3 className="text-3xl font-bold text-blue py-10 text-center">
          Design
        </h3>
        <p className="px-5 text-center">
          I enjoy building responsive designs that create a frictionless user
          experience. I always start projects with a design.
        </p>
        <div data-aos="fade-right" className="flex flex-col items-center my-32">
          <img src={figma} className="h-24" alt="" />
          <h3 className="text-xl font-bold mt-8">Figma</h3>
        </div>
        <div data-aos="fade-right" className="flex flex-col items-center my-32">
          <img src={xd} className="h-24" alt="" />
          <h3 className="text-xl font-bold mt-8">Adobe XD</h3>
        </div>
        <div data-aos="fade-right" className="flex flex-col items-center my-32">
          <img src={ai} className="h-24" alt="" />
          <h3 className="text-xl font-bold mt-8">Adobe Illustrator</h3>
        </div>
      </div>
      <div className="mt-16 relative divider">
        <h3 className="text-3xl font-bold text-blue py-10 text-center">
          Frontend
        </h3>
        <p className="px-5 text-center">
          I am a frontend developer first and foremost. Building clean aesthetic
          UI's is what I enjoy most. As well as creating unique features to
          enhance the experience.
        </p>
        <div data-aos="fade-up" className="flex flex-col items-center my-32">
          <img src={next} className="h-24" alt="" />
          <h3 className="text-xl font-bold mt-8">Next.JS</h3>
        </div>
        <div data-aos="fade-up" className="flex flex-col items-center my-32">
          <img src={react} className="h-24" alt="" />
          <h3 className="text-xl font-bold mt-8">React.JS</h3>
        </div>
        <div data-aos="fade-up" className="flex flex-col items-center my-32">
          <img src={redux} className="h-24" alt="" />
          <h3 className="text-xl font-bold mt-8">Redux</h3>
        </div>
        <div data-aos="fade-up" className="flex flex-col items-center my-32">
          <img src={tailwind} className="h-20" alt="" />
          <h3 className="text-xl font-bold mt-12">TailwindCSS</h3>
        </div>
        <div
          data-aos="fade-up"
          className="flex flex-col items-center mt-32 mb-10">
          <img src={sass} className="h-24" alt="" />
          <h3 className="text-xl font-bold mt-8">Sass</h3>
        </div>
      </div>
      <div className="mt-16">
        <h3 className="text-3xl font-bold text-blue py-10 text-center">
          Backend
        </h3>
        <p className="px-5 text-center">
          I love the challenge of building complex logic. I am comfortable
          building RESTful APIs and have some experience with GraphQL.
        </p>
        <div data-aos="fade-left" className="flex flex-col items-center my-32">
          <img src={graphql} className="h-24" alt="" />
          <h3 className="text-xl font-bold mt-8">GraphQL</h3>
        </div>
        <div data-aos="fade-left" className="flex flex-col items-center mt-40">
          <img src={node} className="w-32" alt="" />
          <h3 className="text-xl font-bold mt-14">Node.JS/Express</h3>
        </div>
        <div data-aos="fade-left" className="flex flex-col items-center mt-40">
          <img src={mongo} className="w-32" alt="" />
          <h3 className="text-xl font-bold mt-16 mb-2">MongoDB</h3>
        </div>
        <div data-aos="fade-left" className="flex flex-col items-center my-32">
          <img src={auth0} className="h-24" alt="" />
          <h3 className="text-xl font-bold mt-6">Auth0</h3>
        </div>
      </div>
    </div>
  );
};

export default Skills;
