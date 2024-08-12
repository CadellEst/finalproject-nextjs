import React from "react";

export const Nav = () => {
  return (
    <div className="flex items-center justify-center">
      <div className=" flex flex-row items-center justify-between p-4 w-[80vw]">
        <div className="w-24 h-24 overflow-hidden">
          <img
            className="invert scale-150"
            src="https://t3.ftcdn.net/jpg/05/14/99/22/360_F_514992274_FDZh1OeglcIELoz1XbVwXVvmsGlqgy7n.jpg"
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
            <ul className="link hover:scale-110">
              <a href="results" class="p-2">
                Find movies
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
