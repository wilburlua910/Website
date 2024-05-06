import React from "react";
import Image from "next/image";

const WorkExperienceCard = () => {
  return (
    <div className="flex flex-col ml-10">
      {/* This is one row of card*/}
      <div className="flex flex-row mr-5">
        <div className="flex shrink-0 h-12 w-12 bg-white rounded-full mr-10"></div>

        <div className="flex flex-col">
          <p className="font-bold text-base text-white">DevSecOps Engineer</p>

          <p className="font-semibold text-sm text-white">IBM Singapore</p>
          <li className="font-light text-sm text-white">
            Deployed scalable and secure infrastructure for multiple large-scale
            projects with AWS Cloud
          </li>
          <li className="font-light text-sm text-white">
            Deployed scalable and secure infrastructure for multiple large-scale
            projects with AWS Cloud
          </li>
        </div>
      </div>

      <div className="flex flex-row mt-10 mr-5">
        <div className="flex shrink-0 h-12 w-12 bg-white rounded-full mr-10"></div>

        <div className="flex flex-col">
          <p className="font-bold text-base text-white">Software Engineer</p>

          <p className="font-semibold text-sm text-white">CARRO</p>
          <li className="font-light text-sm text-white">
            Deployed scalable and secure infrastructure for multiple large-scale
            projects with AWS Cloud
          </li>
          <li className="font-light text-sm text-white">
            Deployed scalable and secure infrastructure for multiple large-scale
            projects with AWS Cloud
          </li>
        </div>
      </div>

      <div className="flex flex-row mt-10 mr-5">
        <div className="flex shrink-0 h-12 w-12 bg-white rounded-full mr-10"></div>

        <div className="flex flex-col">
          <p className="font-bold text-base text-white">Software Engineer</p>

          <p className="font-semibold text-sm text-white">
            Univers (Envision Digital)
          </p>
          <li className="font-light text-sm text-white">
            Deployed scalable and secure infrastructure for multiple large-scale
            projects with AWS Cloud
          </li>
          <li className="font-light text-sm text-white">
            Deployed scalable and secure infrastructure for multiple large-scale
            projects with AWS Cloud
          </li>
        </div>
      </div>

      <div className="flex flex-row mt-10 mr-5">
        <div className="flex shrink-0 h-12 w-12 bg-white rounded-full mr-10"></div>

        <div className="flex flex-col">
          <p className="font-bold text-base text-white">Software Engineer</p>

          <p className="font-semibold text-sm text-white">
            Univers (Envision Digital)
          </p>
          <li className="font-light text-sm text-white">
            Deployed scalable and secure infrastructure for multiple large-scale
            projects with AWS Cloud
          </li>
          <li className="font-light text-sm text-white">
            Deployed scalable and secure infrastructure for multiple large-scale
            projects with AWS Cloud
          </li>
        </div>
      </div>
    </div>
  );
};

export default WorkExperienceCard;
