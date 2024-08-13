import React from "react";

export const Nav = () => {
  return (
    <div className="flex items-center justify-center">
      <div className=" flex flex-row items-center justify-between p-4 w-[80vw]">
        <div className="w-24 h-24 overflow-hidden">
          <img
            className="invert scale-80"
            src="https://i.pinimg.com/564x/f5/79/d5/f579d531390fa2989754a1094071dbc3.jpg"
            alt=""
          />
        </div>
        <div className="flex justify-between items-center ">
          <div className="flex flex-row">
            <ul className="link hover:scale-110">
              <a className="p-2" href="/">
                Home{""}
              </a>
            </ul>

          </div>
          <ul className="p-1 bg-purple-700 rounded-lg hover:bg-blue-500 hover:scale-110">
            <a href="contact">Contact</a>
          </ul>
        </div>
      </div>
    </div>
  );
};
