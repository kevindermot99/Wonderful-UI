import React from "react";

function CodeBrock() {
  return (
    <div className="bg-stone-100 w-full rounded-2xl p-6 my-3 font-normal text-sm text-dark-text ">
      <p className="italic text-dark-text/50 font-mono ">
        <span className="font-mono select-none text-dark-text/50">1. &nbsp;</span>/* Import the
        font in your index.css/app.css */
      </p>
      <p className="font-mono">
        <span className="font-mono text-pink-600">
          <span className="font-mono select-none text-dark-text/50">2. &nbsp;</span>@import{" "}
        </span>
        <span className="font-mono text-blue-500">url</span>
        <span className="font-mono text-amber-500 ">(</span>
        <span className="font-mono ">
          'https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap'
        </span>
        <span className="font-mono  text-amber-500 ">)</span>;
      </p>
      <span className="font-mono select-none text-dark-text/50">3. &nbsp;</span><br />
      <p className="italic text-dark-text/50 font-mono ">
      <span className="font-mono select-none text-dark-text/50">4. &nbsp;</span>/* Apply the fonts to Wonderfull UI Elements */
      </p>
      <p className="font-mono">
        <span className="font-mono text-pink-600"><span className="font-mono select-none text-dark-text/50">5. &nbsp;</span>.w-ui </span>
        <span className="font-mono text-amber-500 ">{`{ `}</span>
        <span className="font-mono ">
          font-family:{" "}
          <span className="font-mono text-blue-600">'Inter', sans-serif</span>
        </span>
        <span className="font-mono  text-amber-500 ">{` }`}</span>;
      </p>
    </div>
  );
}

export default CodeBrock;
