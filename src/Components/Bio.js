import React from "react";

const Bio = ({ children }) => {
  return (
    <div className="bg-blue h-3/4 text-center m-auto relative">
      <div className="mx-3 md:mx-32 py-10">
        <h3 className="text-4xl font-bold text-white p-5">Hi, I'm Mike</h3>
        <p className="text-orange-100 text-xl md:px-20 px-3 leading-relaxed">
          I am a fully self-taught web developer. I enjoy creating clean designs
          and bringing them to life with a great user experience. I love taking
          on new challenges and learning new technologies.
        </p>
      </div>
      {children}
    </div>
  );
};

export default Bio;
