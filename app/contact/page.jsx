import React from "react";
import { Nav } from "../comonents/navComponent";
import Link from "next/link";

export default function Contact() {
  return (
    <div>
      <Nav />
      <br />
      <br />
      <div className="flex items-center text-center flex-col text-md md:text-lg lg:text-xl">
        <h1 className="pb-4">
          Hi! Thanks for taking the time too look at my project!
        </h1>
        <br />
        <h2>My names Cadell and here is some of my contact information</h2>
        <br />
        <br />
        <div>
          <ul>
            <li>CadellEstephaneFrontDev@gmail.com</li>
            <br />
            <li className="text-yellow-300 font-bold cursor-pointer hover:scale-150 hover:opacity-65 transition-all">
              <Link href={"https://www.github.com/cadellest"}>Github</Link>
            </li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
