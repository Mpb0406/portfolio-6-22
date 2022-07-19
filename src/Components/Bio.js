import React from "react";
import "../App.css";

const Bio = () => {
  return (
    <div id="bio" className="bg-blue h-3/4 text-center m-auto">
      <div className="mx-3 md:mx-32 py-16">
        <h3 className="text-4xl md:text-5xl font-bold text-white p-5 mb-3">
          Hi, I'm{" "}
          <span className="bounce text-yellow-400 w-min mx-auto">Mike</span>
        </h3>
        <p className="text-orange-100 text-xl md:px-20 px-3 leading-relaxed">
          I am a fully self-taught{" "}
          <span className="text-3xl font-bold text-yellow-400">
            full-stack web developer
          </span>
          . I enjoy creating clean designs and bringing them to life with a
          great user experience. I love taking on new challenges and learning
          new technologies.
        </p>
      </div>
    </div>
  );
};

export default Bio;
