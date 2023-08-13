import React from "react";
import FeaturesTitle from "./FeaturesTitle";
import FeatureCards, {
  Calender,
  FreeSession,
  Injured,
  Interpersonal,
  Meeting,
  SpecialKid,
} from "./FeatureCards";
import SectionTitle from "../../utils/SectionTitle";

const OurFeatures = () => {
  const features = [
    {
      title: "We teach Interpersonal skills, not just how to play.",
      id: "interpersonal skills",
      card: Interpersonal,
    },
    {
      title:
        "Check your calender to see which activity your kid will be doing next.",
      id: "calender",
      card: Calender,
    },

    {
      title: "Instantly know if your kid got injured while playing.",
      id: "injured",
      card: Injured,
    },

    {
      title:
        "After finishing the Camp, 1-1 Meeting with the guardian so that you understand what to do next.",
      id: "meeting",
      card: Meeting,
    },

    {
      title:
        "Free sessions to experience the camp live, before the actual program begins.",
      id: "free-sessions",
      card: FreeSession,
    },

    {
      title: "Special programs for special kids.",
      id: "special-kids",
      card: SpecialKid,
    },
  ];

  return (
    <div className="">
      <div className="">
        <SectionTitle title={"Our Features"}></SectionTitle>
        <div className="mt-12 px-3 md:px-3 ">
          <h2 className="uppercase font-bold md:text-3xl xl:text-4xl text-gray-500 transition-colors text-center">Our kids are our future, so we want to give the best</h2>
        </div>
      </div>
      <div className="mt-14 flex w-full gap-4 md:gap-10 lg:gap-20 items-start px-3 md:px-0 justify-between">
        {/* Flex part 1 */}
        <div className="w-[40%]">
          <ul className="py-[75vh]  md:py-[65vh]">
            {features.map((feature) => (
              <li key={feature.id}>
                <FeaturesTitle id={feature.id}>{feature.title}</FeaturesTitle>
              </li>
            ))}
          </ul>
        </div>

        {/* Flex part 2 */}
        <div className="sticky w-[50%] top-[35vh] lg:top-[20vh]">
          <div className="bg-gray-100 max-h-[50vh] aspect-square rounded-2xl ">
            {features.map((feature) => (
              <feature.card id={feature.id} key={feature.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurFeatures;
