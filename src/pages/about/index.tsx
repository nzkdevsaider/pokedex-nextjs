import React, { NextPage } from "next";
import { ApplicationWrapper } from "../../components/layout/ApplicationWrapper";
import { FcContacts, FcBusinessman } from "react-icons/fc";

type AboutProps = {
  response: string;
};

const About: NextPage<AboutProps> = () => {
  return (
    <ApplicationWrapper notitle={true}>
      <div className="m-3">
        <div className="p-4 text-left">
          <h1 className="text-3xl font-bold pt-8 lg:pt-0">
            Sobre el proyecto: Pokédex NextJS
          </h1>
          <div className="pt-4 text-base font-bold flex items-center justify-start">
            Detalles del proyecto
          </div>
          <div className="pt-2 text-black-600 text-xs lg:text-sm flex items-center justify-start">
            <FcBusinessman size={32} /> Sebastián Morales
          </div>
          <div className="pt-2 text-black-600 text-xs lg:text-sm flex items-center justify-start">
            <FcContacts size={32} /> sebasmoraresu@gmail.com /
            sebastian.morales@utp.ac.pa
          </div>
          <div className="pt-8 text-sm">
            Este proyecto fue como parte de un proyecto final de un curso de{" "}
            <strong>NextJS</strong> de <strong>RootLab</strong>.
          </div>

          <div className="pt-12 pb-8">
            <ul className="flex">
              <li className="pr-3">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/nzkdevsaider/pokedex-nextjs"
                >
                  <button className="bg-red-700 hover:bg-red-900 text-white font-bold py-2 px-4 rounded-full">
                    Visitar repositorio del proyecto
                  </button>
                </a>
              </li>
              <li className="pr-3">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://nzkdevsaider.github.io/"
                >
                  <button className="bg-red-700 hover:bg-red-900 text-white font-bold py-2 px-4 rounded-full">
                    Visitar página web del autor
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </ApplicationWrapper>
  );
};

export default About;
